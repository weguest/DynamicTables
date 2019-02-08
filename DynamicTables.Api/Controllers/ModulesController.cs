using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DynamicTables.Core.Entities;
using DynamicTables.Core.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DynamicTables.Api.Controllers
{
    [Route("api/[controller]")]
    public class ModuleController : Controller
    {
        IRepository<Module, string> _repository;
        IRepository<EntityType, string> _repositoryET;
        public ModuleController(IRepository<Module, string> repository, IRepository<EntityType, string> repositoryET)
        {
            this._repository = repository;
            this._repositoryET = repositoryET;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Module> Get()
        {
            return _repository.SelectAll();
        }

        // GET api/values/5
        [HttpGet]
        [Route("{name}", Order = 2)]
        public ActionResult<Module> Get(string name)
        {
            var find = this._repository.Find(x => x.Name == name).FirstOrDefault();
            if(find == null)
            {
                return NotFound();
            }
            return find;
        }

        // GET api/values/5

        [HttpGet]
        [Route("{name}/GetByName", Name = "GetByName", Order = 1)]
        public ActionResult<IEnumerable<Module>> GetByName(string name)
        {
            var find = this._repository.GetByName( name );
            if(find == null)
            {
                return NotFound();
            }

            return Ok(find);
        }

        [HttpGet]
        [Route("{name}/Entities", Name = "Entities", Order = 1)]
        public ActionResult<IEnumerable<EntityType>> Entities(string name)
        {
            var find = this._repository.GetByName( name );
            if(find == null)
            {
                return NotFound();
            }

            var result = _repositoryET.Find( r=> r.Module == find.Id);

            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Module> Post([FromBody]Module value)
        {
            var find = this._repository.InsertOne(value);
            return find;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<Module> Put(string id, [FromBody]Module value)
        {
            var find = this._repository.Find(x => x.Id == id).FirstOrDefault();
            if (find == null)
            {
                return NotFound();
            }

            find = this._repository.UpdateOne(value);
            return find;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public DeleteResult Delete(string id)
        {
            var result = _repository.DeleteOne(id);
            return result;
        }
    }
}
