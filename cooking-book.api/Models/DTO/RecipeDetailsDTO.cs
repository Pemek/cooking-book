using System.Collections.Generic;
using System.Linq;
using cooking_book.api.Models.Entities;

namespace cooking_book.api.Models.DTO
{
    public class RecipeDetailsDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string[] Tag { get; set; }
        public string Image { get; set; }
        public List<IngredientDTO> Ingredients { get; set; }
        public List<StepDTO> Steps { get; set; }

        public RecipeDetailsDTO()
        {
            
        }
        public RecipeDetailsDTO(Recipe recipe, string baseUrl)
        {
            Id = recipe.Id;
            Description = recipe.Description;
            Name = recipe.Name;
            Image = $"{baseUrl}/{recipe.Image}";
            Tag = recipe.TagArr;
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