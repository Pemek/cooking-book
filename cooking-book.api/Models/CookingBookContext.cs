using Microsoft.EntityFrameworkCore;

namespace cooking_book.api.Models
{
    public class CookingBookContext : DbContext
    {
        public CookingBookContext (DbContextOptions<CookingBookContext> options) 
            :base(options) 
        {

        }
        public DbSet<Recipe> Recipes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
        }
    }
}