using System;
using DynamicTables.Core.Entities.Enums;

namespace DynamicTables.Core.Interfaces.Entities
{
    public interface IEntityTypeField : IEntityBase
    {
        string Label { get; set; }

        string Html { get; set; }

        string JavaScript { get; set; }

        string Code { get; set; }

        string Format { get; set; }

        EnumFieldType FieldType { get; set; }
    }
}
