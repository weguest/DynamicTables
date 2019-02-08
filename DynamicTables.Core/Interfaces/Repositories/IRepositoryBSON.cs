using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using DynamicTables.Core.Interfaces.Entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DynamicTables.Core.Interfaces.Repositories
{
    public interface IRepositoryBSON
    {

        IMongoCollection<BsonDocument> collection { get; }

        IEnumerable<Dictionary<string, object>> SelectAll();

        void SetCollectionName(string name);

        BsonDocument InsertOne(BsonDocument e);

        BsonDocument UpdateOne(BsonDocument e);

        DeleteResult DeleteOne(string Id);

        DeleteResult DeleteAll();

        BsonDocument GetById(string Id);

        BsonDocument GetByName(string name);

        IEnumerable<BsonDocument> Find(BsonDocument filter);

        bool Exists(BsonDocument filter);

    }
}
