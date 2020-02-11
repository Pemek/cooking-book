using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace cooking_book.api.Models
{
    public class DataGenerator
    {
        public static void Initialize(CookingBookContext context)
        {
            if (!context.Recipes.Any())
            {
                var seedDataFile = File.ReadAllText("Resources/SeedData.json");
                var seedDataJson = JObject.Parse(seedDataFile);

                var recipes = JsonConvert.DeserializeObject<List<Recipe>>(seedDataJson["Recipes"].ToString());
                var ingredients = JsonConvert.DeserializeObject<List<Ingredient>>(seedDataJson["Ingredients"].ToString());
                var recipeIngredients = JsonConvert.DeserializeObject<List<RecipeIngredients>>(seedDataJson["RecipeIngredients"].ToString());

                context.Recipes.AddRange(recipes);
                context.Ingredients.AddRange(ingredients);
                context.RecipeIngredients.AddRange(recipeIngredients);

                context.SaveChanges();
            }
        }
    }
}