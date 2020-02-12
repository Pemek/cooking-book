using System.Collections.Generic;

namespace cooking_book.api.Models.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public List<RecipeIngredients> RecipeIngredients { get; set; }
    }
}