namespace cooking_book.api.Models
{
    public class RecipeIngredients
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public int IngredientId { get; set; }
        public string Amount { get; set; }
    }
}