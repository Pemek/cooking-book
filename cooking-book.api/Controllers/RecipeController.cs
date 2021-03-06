using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cooking_book.api.Models;
using cooking_book.api.Models.DTO;
using cooking_book.api.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cooking_book.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {
        private CookingBookContext _context;
        
        public RecipeController(CookingBookContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> GetAllRecipes([FromQuery]string keyword = "") 
        {
            string baseUrl = $"{Request.Scheme}://{Request.Host.ToUriComponent()}";
            var recQuery = string.IsNullOrWhiteSpace(keyword) || keyword.Length < 3 
                ? _context.Recipes
                : _context.Recipes.Where(x => x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase));

            var recipes = await recQuery
                .Include(r => r.Ingredients)
                .Include(r => r.Steps)
                .ToListAsync();
                
            List<RecipeDTO> recipesDTO = recipes.Select(r => new RecipeDTO(r, baseUrl)).ToList();
            return Ok(recipesDTO);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe([FromRoute]string Id)
        {
            string baseUrl = $"{Request.Scheme}://{Request.Host.ToUriComponent()}";
            var recipe = await _context.Recipes
                .Include(r => r.Ingredients)
                .Include(r => r.Steps)
                .FirstOrDefaultAsync(x => x.Id == Id);
            if (recipe == null)
                return NotFound();
            var recipeDTO = new RecipeDetailsDTO(recipe, baseUrl);
            return Ok(recipeDTO);
        }
    }
}