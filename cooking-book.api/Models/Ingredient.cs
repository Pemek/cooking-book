using System.Collections.Generic;

namespace cooking_book.api.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<RecipeIngredients> RecipeIngredients { get; set; }
    }
}