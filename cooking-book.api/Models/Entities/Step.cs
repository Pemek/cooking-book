using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cooking_book.api.Models.Entities
{
    public class Step
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}