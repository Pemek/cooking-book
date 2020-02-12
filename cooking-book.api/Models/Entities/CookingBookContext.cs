using Microsoft.EntityFrameworkCore;

namespace cooking_book.api.Models.Entities
{
    public class CookingBookContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Step> Steps { get; set; }
        public CookingBookContext (DbContextOptions<CookingBookContext> options) 
            :base(options) 
        {
            DataGenerator.Initialize(this);
        }
    }
}