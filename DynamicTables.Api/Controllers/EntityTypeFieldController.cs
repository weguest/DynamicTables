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
    public class EntityTypeFieldController : Controller
    {

        IRepository<EntityTypeField, string> _repository;
        public EntityTypeFieldController(IRepository<EntityTypeField, string> repository)
        {
            this._repository = repository;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<EntityTypeField> Get()
        {
            return _repository.SelectAll();
        }

        // GET api/values/5
        [HttpGet("{name}")]
        public ActionResult<EntityTypeField> Get(string name)
        {
            var find = this._repository.GetByName( name );
            if (find == null)
            {
                return NotFound();
            }
            return find;
        }

        // POST api/values
        [HttpPost]
        public ActionResult<EntityTypeField> Post([FromBody]EntityTypeField value)
        {
            var find = this._repository.InsertOne(value);
            return find;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<EntityTypeField> Put(string id, [FromBody]EntityTypeField value)
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
