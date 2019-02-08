using System;
using DynamicTables.Core.Interfaces.Entities;

namespace DynamicTables.Core.Entities
{
    public class Module : EntityBase, IModule, IEntityBase
    {
        public string Label { get; set; }
        public string Icon { get; set; }
    }
}
