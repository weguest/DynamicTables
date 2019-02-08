using System;
namespace DynamicTables.Core.Interfaces.Entities
{
    public interface IModule : IEntityBase
    {
        string Label { get; set; }
    }
}
