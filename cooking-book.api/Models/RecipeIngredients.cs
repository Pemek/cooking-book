namespace cooking_book.api.Models
{
    public class RecipeIngredients
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }
        public string Amount { get; set; }
    }
}