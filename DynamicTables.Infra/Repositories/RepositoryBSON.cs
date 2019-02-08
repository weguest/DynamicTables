using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDB.Bson.Serialization;

using DynamicTables.Core.Interfaces.Context;
using DynamicTables.Core.Interfaces.Entities;
using DynamicTables.Core.Interfaces.Repositories;

namespace DynamicTables.Infra.Repositories
{

    public class RepositoryBSON : IRepositoryBSON
    {
        public IMongoDBCotext _context;
        public IMongoCollection<BsonDocument> collection { get; set; }

        public RepositoryBSON(IMongoDBCotext context)
        {
            this._context = context;
        }

        public void SetCollectionName(string name)
        {
            var collectionName = $"{name}_data";
            var filter = new BsonDocument("name", collectionName);
            var collectionCursor = _context.Database.ListCollections(new ListCollectionsOptions { Filter = filter });

            if (!collectionCursor.Any())
            {
                _context.Database.CreateCollection(collectionName);
            }

            this.collection = _context.Database.GetCollection<BsonDocument>(collectionName);
        }

        public DeleteResult DeleteAll()
        {
            var r = this.collection.DeleteMany(x => true);
            return r;
        }

        public DeleteResult DeleteOne(string Id)
        {
            var filter = new BsonDocument("Id", Id);
            var r = this.collection.DeleteOne(filter);
            return r;
        }

        public bool Exists(BsonDocument filter)
        {
            return this.collection.Find(filter).Any();
        }

        public IEnumerable<BsonDocument> Find(BsonDocument filter)
        {
            return this.collection.Find(filter).ToList();
        }

        public BsonDocument GetById(string Id)
        {
            var filter = new BsonDocument("Id", Id);
            return this.collection.Find(filter).SingleOrDefault();
        }

        public BsonDocument GetByName(string name)
        {
            var filter = new BsonDocument("Name", name);
            return this.collection.Find(filter).SingleOrDefault();
        }

        public BsonDocument InsertOne(BsonDocument e)
        {
            var name = e.GetValue("name").ToString();
            var filter = new BsonDocument("name", name);
            var search = this.Find(filter).FirstOrDefault();

            if (search != null)
            {
                throw new Exception($"Registro com o nome {name} já existe na base.");
            }

            this.collection.InsertOne(e);
            return e;
        }

        public BsonDocument UpdateOne(BsonDocument e)
        {
            var Id = e.GetValue("Id").ToString();
            var filter = new BsonDocument("Id", Id);
            this.collection.ReplaceOne(filter, e);
            return e;
        }

        public IEnumerable<Dictionary<string, object>> SelectAll()
        {
            var r = this.collection.Find(x => true).ToList();
            return r.Select(e=> e.ToDictionary());
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return base.ToString();
        }

        public IEnumerable<BsonDocument> Find(Expression<Func<BsonDocument, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public bool Exists(Expression<Func<BsonDocument, bool>> predicate)
        {
            throw new NotImplementedException();
        }
    }
}
