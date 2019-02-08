using DynamicTables.Core.Interfaces.Services;

namespace DynamicTables.Core.Services
{
    public class FooService : IFooService
    {
        public void Foo()
        {
            System.Console.WriteLine("Foo...");
        }
    }
}