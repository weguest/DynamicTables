namespace DynamicTables.Core.Interfaces.Context
{
    public interface IMongoDBSeed
    {
         void Seed();
         void DeleteAll();
    }
}