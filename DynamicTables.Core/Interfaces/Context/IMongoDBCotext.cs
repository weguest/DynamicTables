using MongoDB.Driver;

namespace DynamicTables.Core.Interfaces.Context
{
    public interface IMongoDBCotext
    {
        IMongoClient Client { get; set; }
        IMongoDatabase Database { get; set; }

        void Connect();
    }
}