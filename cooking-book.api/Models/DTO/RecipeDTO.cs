using System.Collections.Generic;
using System.Linq;
using cooking_book.api.Models.Entities;

namespace cooking_book.api.Models.DTO
{
    public class RecipeDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Tag { get; set; }
        public string Image { get; set; }
        public List<IngredientDTO> Ingredients { get; set; }
        public List<StepDTO> Steps { get; set; }

        public RecipeDTO()
        {
            
        }
        public RecipeDTO(Recipe recipe)
        {
            Id = recipe.Id;
            Description = recipe.Description;
            Name = recipe.Name;
            Image = recipe.Image;
            Tag = recipe.Tag;
            Ingredients = recipe.Ingredients.Select(ri => 
                new IngredientDTO
                {
                    Id = ri.Id,
                    Name = ri.Name,
                    Amount = ri.Amount,
                    Unit = ri.Unit
                }
            ).ToList();
            Steps = recipe.Steps.Select(rs => 
                new StepDTO
                {
                    Id = rs.Id,
                    Description = rs.Description
                }
            ).ToList();
        }
    }
}