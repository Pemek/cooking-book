using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq;
using cooking_book.api.Models.Entities;

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

                var recipes = JsonConvert.DeserializeObject<List<Recipe>>(seedDataJson["recipes"].ToString());
                context.Recipes.AddRange(recipes);

                context.SaveChanges();
            }
        }
    }
}