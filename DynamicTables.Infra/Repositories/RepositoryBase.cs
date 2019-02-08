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

    public class RepositoryBase<TEntity, TKey> : IRepository<TEntity, TKey> where TEntity : IEntityBase<TKey>
    {
        public RepositoryBase(IMongoDBCotext context)
        {
            var collectionName = GetCollectionName();

            var filter = new BsonDocument("name", collectionName);
            var collectionCursor = context.Database.ListCollections(new ListCollectionsOptions { Filter = filter });

            if (!collectionCursor.Any())
            {
                context.Database.CreateCollection(collectionName);
            }

            this.collection = context.Database.GetCollection<TEntity>(collectionName);
        }

        private string GetCollectionName()
        {
            return typeof(TEntity).Name;
        }

        public IMongoCollection<TEntity> collection { get; set; }

        public Type ElementType => throw new NotImplementedException();

        public Expression Expression => throw new NotImplementedException();

        public IQueryProvider Provider => throw new NotImplementedException();

        public DeleteResult DeleteAll()
        {
            var r = this.collection.DeleteMany(x => true);
            return r;
        }

        public DeleteResult DeleteOne(TKey Id)
        {
            var filter = Builders<TEntity>.Filter.Eq(s => s.Id, Id);
            var r = this.collection.DeleteOne(filter);
            return r;
        }

        public bool Exists(Expression<Func<TEntity, bool>> predicate)
        {
            return this.collection.AsQueryable().Any(predicate);
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return this.collection.AsQueryable().Where(predicate).ToList();
        }

        public TEntity GetById(TKey Id)
        {
            var filter = Builders<TEntity>.Filter.Eq(s => s.Id, Id);
            return this.collection.Find(filter).SingleOrDefault();
        }

        public TEntity GetByName(string name)
        {
            var filter = Builders<TEntity>.Filter.Eq(s => s.Name, name);
            return this.collection.Find(filter).SingleOrDefault();
        }

        public TEntity InsertOne(TEntity e)
        {
            var search = this.Find(x => x.Name == e.Name).FirstOrDefault();

            if (search != null)
            {
                throw new Exception($"Registro com o nome {e.Name} já existe na base.");
            }

            this.collection.InsertOne(e);
            return e;
        }

        public TEntity UpdateOne( TEntity e)
        {
            var filter = Builders<TEntity>.Filter.Eq(s => s.Id, e.Id);
            this.collection.ReplaceOne(filter, e);
            return e;
        }

        public IEnumerable<TEntity> SelectAll()
        {
            return this.collection.Find(x => true).ToList();
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

        public IEnumerator<TEntity> GetEnumerator()
        {
            throw new NotImplementedException();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
