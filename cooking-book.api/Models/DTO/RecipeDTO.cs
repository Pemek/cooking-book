using System.Collections.Generic;
using cooking_book.api.Models.Entities;

namespace cooking_book.api.Models.DTO
{
    public class RecipeDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string[] Tag { get; set; }
        public string Image { get; set; }

        public RecipeDTO(Recipe recipe, string baseUrl)
        {
            Id = recipe.Id;
            Description = recipe.Description;
            Name = recipe.Name;
            Image = $"{baseUrl}/{recipe.Image}";
            Tag = recipe.TagArr;
        }
    }
}