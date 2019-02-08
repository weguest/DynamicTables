using System;
using System.Collections.Generic;
using DynamicTables.Core.Entities.ValueObjects;
using DynamicTables.Core.Interfaces.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DynamicTables.Core.Entities
{
    [BsonIgnoreExtraElements]
    public class EntityType : EntityBase, IEntityType
    {
        public EntityType() {
            this.Fields = new List<EntityTypeFieldItem>();
        }

        public string Label { get; set; }

        public string Html { get; set; }

        public string JavaScript { get; set; }

        public string CSS { get; set; }

        public string Code { get; set; }

        public IEnumerable<EntityTypeFieldItem> Fields { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string Module { get; set; }
    }
}
