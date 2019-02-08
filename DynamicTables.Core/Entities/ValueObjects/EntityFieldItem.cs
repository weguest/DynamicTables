using System.Collections.Generic;

namespace DynamicTables.Core.Entities.ValueObjects
{
    public class EntityTypeFieldItem : ValueObject
    {

        public EntityTypeFieldItem()
        {
            this.FieldBase = new EntityTypeField();
        }

        public EntityTypeFieldItem(EntityTypeField e)
        {
            FieldBase = e;
            Html = e.Html;
            CSS = e.CSS;
            Javascript = e.JavaScript;
            Code = e.Code;
        }

        public EntityTypeField FieldBase { get; set; }

        public string Name { get; set; }
        public string Html { get; set; }
        public string CSS { get; set; }
        public string Code { get; set; }
        public string Javascript { get; set; }

        public Dictionary<string, object> Labels { get; set; }
        public Dictionary<string, object> placeholders { get; set; }
        public Dictionary<string, object> Hint { get; set; }
        public Dictionary<string, object> Description { get; set; }
    }
}