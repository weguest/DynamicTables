using DynamicTables.Core.Entities;
using DynamicTables.Core.Interfaces.Context;
using DynamicTables.Core.Interfaces.Repositories;

namespace DynamicTables.Infra.Context
{
    public class MongoDBSeed : IMongoDBSeed
    {
        IMongoDBCotext _context ;
        IRepository<Module, string> _repositoryModule;

        public MongoDBSeed(IMongoDBCotext context, IRepository<Module, string> repositoryModule )
        {
            this._context = context;
            this._repositoryModule = repositoryModule;
            Seed();
        }

        public void DeleteAll()
        {
            
        }

        public void Seed()
        {
            try
            {   
                Module crm = new Module
                {
                    Name = "CRM",
                    Label = "Módulo de CRM"
                };

                crm = _repositoryModule.InsertOne(crm);
            }
            catch (System.Exception ex)
            {
                System.Console.WriteLine(ex.Message);
            }

        }
    }

}