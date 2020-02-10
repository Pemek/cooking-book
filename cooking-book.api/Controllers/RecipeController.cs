using Microsoft.AspNetCore.Mvc;

namespace cooking_book.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() 
        {
            return Ok("My recipe endpoint");
        } 
    }
}