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
        public async Task<ActionResult<List<Recipe>>> GetAllRecipes() 
        {
            var recipes = await _context.Recipes
                .Include(r => r.RecipeIngredients)
                .ThenInclude(ri => ri.Ingredient)
                .ToListAsync();
                
            List<RecipeDTO> recipesDTO = recipes.Select(r => 
                new RecipeDTO
                {
                    Id = r.Id,
                    Description = r.Description,
                    Title = r.Title,
                    Ingredients = r.RecipeIngredients.Select(ri => 
                        new IngredientDTO
                        {
                            Id = ri.IngredientId,
                            Name = ri.Ingredient.Name,
                            Amount = ri.Amount
                        }
                    ).ToList()
                }
            ).ToList();

            return Ok(recipesDTO);
        }

        [HttpGet("{id}")]
        public ActionResult<Recipe> GetRecipe(int Id)
        {
            var recipe = _context.Recipes.FirstOrDefault(x => x.Id == Id);
            if (recipe == null)
                return NotFound();
            return recipe;
        }

        [HttpPost]
        public async Task<ActionResult<Recipe>> Post(Recipe newRecipe)
        {
            var numberOfRecipes = await _context.Recipes.CountAsync();
            int newId;
            if (numberOfRecipes == 0)
                newId = 1;
            else
                newId = _context.Recipes.Select(x => x.Id).Max() + 1;
            newRecipe.Id = newId;
            _context.Add(newRecipe);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAllRecipes), new { id = newRecipe.Id }, newRecipe);
        }
    }
}