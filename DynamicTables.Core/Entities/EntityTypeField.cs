using System;
using DynamicTables.Core.Entities.Enums;
using DynamicTables.Core.Interfaces.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DynamicTables.Core.Entities
{
    public class EntityTypeField : EntityBase, IEntityTypeField
    {
        public string icon {get; set;}
        public string Label { get; set; }
        public string Html { get; set; }
        public string JavaScript { get; set; }
        public string CSS { get; set; }
        public string Code { get; set; }
        public string Format { get; set; }

        [BsonRepresentation(BsonType.String)]
        public EnumFieldType FieldType { get; set; }
    }

}