using System;
using System.Collections.Generic;
using DynamicTables.Core.Entities.ValueObjects;

namespace DynamicTables.Core.Interfaces.Entities
{
    public interface IEntityType : IEntityBase
    {
        string Label { get; set; }
        string Html { get; set; }
        string JavaScript { get; set; }
        string CSS { get; set; }
        string Code { get; set; }
        IEnumerable<EntityTypeFieldItem> Fields { get; set; }
        string Module { get; set; }
    }
}
