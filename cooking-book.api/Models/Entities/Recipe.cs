using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace cooking_book.api.Models.Entities
{
    public class Recipe
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        [NotMapped]
        public string[] TagArr 
        { 
            set 
            {
                Tag = string.Join(", ", value);
            } 
        }
        public string Tag {get; set; }
        public string Image { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public List<Step> Steps { get; set; }
    }
}