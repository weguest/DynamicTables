using System;
using System.Linq;
using DynamicTables.Core.Entities;
using DynamicTables.Core.Interfaces.Context;
using DynamicTables.Core.Interfaces.Repositories;
using DynamicTables.Core.Interfaces.Services;
using DynamicTables.Core.Services;
using DynamicTables.Infra.Context;
using DynamicTables.Infra.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace DynamicTables.App
{
    public static class AppInitialize
    {
        public static IServiceCollection AddAppReferences(this IServiceCollection service)
        {

            service.AddScoped<IFooService, FooService>();
            service.AddScoped<IMongoDBCotext, MongoDBCotext>();
            service.AddScoped(typeof(IRepository<,>), typeof(RepositoryBase<,>));
            service.AddScoped<IRepositoryBSON, RepositoryBSON>();
            service.AddScoped<IMongoDBSeed, MongoDBSeed>();

            //var x = service.BuildServiceProvider().GetServices<IMongoDBSeed>().FirstOrDefault();
            //x.Seed();


            return service;
        }
    }
}
