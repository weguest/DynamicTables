using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using DynamicTables.Core.Interfaces.Entities;
using MongoDB.Driver;

namespace DynamicTables.Core.Interfaces.Repositories
{
    public interface IRepository<TEntity, in TKey> : IQueryable<TEntity> where TEntity : IEntityBase<TKey>
    {

        IMongoCollection<TEntity> collection { get; }

        IEnumerable<TEntity> SelectAll();

        TEntity InsertOne(TEntity e);

        TEntity UpdateOne(TEntity e);

        DeleteResult DeleteOne(TKey Id);

        DeleteResult DeleteAll();

        TEntity GetById(TKey Id);

        TEntity GetByName(string name);

        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);

        bool Exists(Expression<Func<TEntity, bool>> predicate);

    }
}
