using System;
using DynamicTables.Core.Interfaces.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace DynamicTables.Core.Entities
{
    [BsonIgnoreExtraElements]
    public class EntityBase : IEntityBase
    {
        public EntityBase()
        {
            this.Active = true;
            this.Created = DateTime.Now;
            this.Modified = DateTime.Now;
        }

        [BsonIgnoreIfDefault]
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public bool Active { get; set; }
    }
}
