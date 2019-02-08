using DynamicTables.Core.Entities;
using DynamicTables.Core.Entities.ValueObjects;
using DynamicTables.Core.Interfaces.Context;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace DynamicTables.Infra.Context
{
    public class MongoDBCotext : IMongoDBCotext
    {
        public IMongoClient Client { get; set; }
        public IMongoDatabase Database { get; set; }

        public MongoDBCotext()
        {
            this.Connect();
        }

        public void Connect()
        {
            var db = "db-dynamic-tables";
            Client = new MongoClient($"mongodb://localhost:27017/{db}");
            Database = Client.GetDatabase($"{db}");

            MappingEntitiesConfiguration();
        }

        private static void MappingEntitiesConfiguration()
        {
            try
            {
                //todo: mapeamento
                if(!BsonClassMap.IsClassMapRegistered( typeof(Module)))
                    BsonClassMap.RegisterClassMap<Module>();

                if (!BsonClassMap.IsClassMapRegistered(typeof(EntityTypeField)))
                    BsonClassMap.RegisterClassMap<EntityTypeField>();

                if (!BsonClassMap.IsClassMapRegistered(typeof(EntityTypeFieldItem)))
                    BsonClassMap.RegisterClassMap<EntityTypeFieldItem>();

                if (!BsonClassMap.IsClassMapRegistered(typeof(EntityType)))
                    BsonClassMap.RegisterClassMap<EntityType>();
            }   
            catch (System.Exception e)
            {
                System.Console.WriteLine( e.Message );
            }
            

        }
    }
}