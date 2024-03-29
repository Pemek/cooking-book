using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cooking_book.api.Models.Entities
{
    public class Ingredient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Amount { get; set; }
        public string Unit { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}