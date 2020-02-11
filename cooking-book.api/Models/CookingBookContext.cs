using Microsoft.EntityFrameworkCore;

namespace cooking_book.api.Models
{
    public class CookingBookContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<RecipeIngredients> RecipeIngredients { get; set; }
        public CookingBookContext (DbContextOptions<CookingBookContext> options) 
            :base(options) 
        {
            DataGenerator.Initialize(this);
        }
    }
}