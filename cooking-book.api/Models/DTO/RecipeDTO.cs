using System.Collections.Generic;

namespace cooking_book.api.Models.DTO
{
    public class RecipeDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<IngredientDTO> Ingredients { get; set; }
    }
}