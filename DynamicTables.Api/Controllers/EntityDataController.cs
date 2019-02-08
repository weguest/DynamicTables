using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using DynamicTables.Core.Entities;
using DynamicTables.Core.Entities.Enums;
using DynamicTables.Core.Entities.ValueObjects;
using DynamicTables.Core.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DynamicTables.Api.Controllers
{
    [Route("api/[controller]")]
    public class EntityDataController : Controller
    {

        IRepositoryBSON _repository;
        IRepository<EntityType, string> _repositoryEntityType;
        public EntityDataController(IRepositoryBSON repository, IRepository<EntityType, string> repositoryEntityType)
        {
            this._repository = repository;
            this._repositoryEntityType = repositoryEntityType;
        }

        // GET: api/values
        [HttpGet("{entityType}")]
        public IEnumerable<Dictionary<string,object>> Get(string entityType)
        {
            _repository.SetCollectionName(entityType);
            var r = _repository.SelectAll();
            return r;
        }

        // GET api/values/5
        [HttpGet("{entityType}/{id}")]
        public ActionResult<BsonDocument> Get(string entityType, string id)
        {
            _repository.SetCollectionName(entityType);
            var filter = new BsonDocument("Id", id);
            var find = this._repository.Find(filter).FirstOrDefault();
            if (find == null)
            {
                return NotFound();
            }
            return find;
        }

        // POST api/values
        [HttpPost("{entityType}")]
        public ActionResult<BsonDocument> Post(string entityType, [FromBody] Dictionary<string,object> value)
        {
            _repository.SetCollectionName(entityType);
            var fields = getEntitiesField( entityType );
            var document = new BsonDocument();
            
            //validar requisicao
            foreach (var item in fields)
            {
                if(!value.Keys.Contains( item.Name )){
                    return BadRequest();
                }
            }
            
            foreach (var item in fields)
            {
                document.Add( new BsonElement( item.Name, getBsonValue( value, item ) ));
            }

            //document.Add( new BsonElement( "Id", null));
            document.Add( new BsonElement( "name", new BsonString( value["name"].ToString() )));
            document.Add( new BsonElement( "description", new BsonString( value["description"].ToString() )));
            document.Add( new BsonElement( "created", new BsonDateTime(DateTime.Now)));
            document.Add( new BsonElement( "modified", new BsonDateTime(DateTime.Now)));

            _repository.InsertOne( document );

            return Ok( document );
        }

        private BsonValue getBsonValue(Dictionary<string, object> value, EntityTypeFieldItem item)
        {
            switch(item.FieldBase.FieldType)
            {
                case EnumFieldType.TEXT : return new BsonString(value[item.Name].ToString());
                case EnumFieldType.INTEGER : return new BsonInt64( (int)value[item.Name] );
                case EnumFieldType.MONEY : return new BsonDecimal128( (decimal)value[item.Name] );
                case EnumFieldType.DATE : return new BsonDateTime( DateTime.Parse(value[item.Name].ToString()).Date );
                case EnumFieldType.DATETIME : return new BsonDateTime( DateTime.Parse(value[item.Name].ToString()) );
                case EnumFieldType.TIME : return new BsonDateTime( DateTime.Parse(value[item.Name].ToString()) );
                default: return new BsonString(value[item.Name].ToString()); 
            }
        }

        // PUT api/values/5
        [HttpPut("{entityType}/{id}")]
        public ActionResult<BsonDocument> Put(string entityType, string id, FormDataCollection value)
        {
            _repository.SetCollectionName(entityType);
            var filter = new BsonDocument("Id", id);
            var find = this._repository.Find(filter).FirstOrDefault();
            if (find == null)
            {
                return NotFound();
            }

            find = this._repository.UpdateOne(new BsonDocument());
            return find;
        }

        // DELETE api/values/5
        [HttpDelete("{entityType}/{id}")]
        public DeleteResult Delete(string entityType, string id)
        {
            _repository.SetCollectionName(entityType);
            var result = _repository.DeleteOne(id);
            return result;
        }

        private IEnumerable<EntityTypeFieldItem> getEntitiesField( string name ){
            var entity = _repositoryEntityType.GetByName(name);
            return entity.Fields;
        }
    }
}
