console.log("script runs")
const recipes = {
    wings: `Ingredients<br>
    Vegetable oil, for rack 
    2 lb. chicken wings
    2 tsp. kosher salt
    1 1/2 tsp. baking powder
    2/3 c. apricot jam
    1/4 c. reduced-sodium soy sauce
    1/4 c. sriracha
    2 tbsp. sesame seeds
    2 tbsp. butter
    4 tsp. garlic cloves, grated or minced
    2 tsp. fresh ginger, grated or minced
    1 1/2 tsp. Chinese five spice powder
    2 tbsp. lime juice
    2 tsp. toasted sesame oil
    Thinly sliced scallion and/or cilantro leaves, for garnish
    Lime wedges, for serving
    <br>Directions<br>
    Step 1
    Line a baking sheet with aluminum foil and fit with a wire rack. Add about a teaspoon vegetable oil to a piece of paper towel and grease the wire rack.
    Step 2
    In a large bowl, combine wings, salt, and baking powder and toss to coat. Place on prepared rack, making sure that no wings are touching. Place in the refrigerator uncovered, ideally for at least 8 hours, and no more than 24.
    Step 3
    When ready to cook, preheat oven to 450°. In a medium bowl, whisk to combine jam, soy sauce, Sriracha, and sesame seeds.
    Step 4
    When oven is preheated, place wings on center rack and bake for 20 minutes.
    Step 5
    Meanwhile, make sauce: In a medium saucepan over medium heat, melt butter. Add garlic, ginger, and five spice, and cook until fragrant, 1 minute.
    Step 6
    Add jam mixture to pan and cook, stirring constantly, until sauce has thickened, about 5 minutes. Remove from heat and stir in lime juice and sesame oil. Transfer sauce to a large bowl.
    Step 7
    When 20 minutes are up, remove wings from oven and use tongs to flip them. Return to oven and cook until wings are browned all over, about 15 minutes more.
    Step 8
    Add cooked wings to bowl with sauce and toss well to coat. Transfer to serving platter, top with herbs, and serve with lime wedges on the side.`,


    salmon: `Ingredients<br>
        1 teaspoon minced garlic
        1/2 teaspoon minced ginger
        1 tablespoon olive oil
        1 tablespoons low sodium low soy sauce
        2 tablespoons Heinz chili sauce (substitute with Buffalo sauce or hot sauce to suit your heat preference)
        1 teaspoon brown sugar (or brown sugar substitute) -- OPTIONAL
        pinch of crushed red chili flakes
        1-2 teaspoons sriracha (adjust to suit your heat preference)
        4 skin off salmon fillets
        Salt and pepper to season
        1/2 teaspoon paprika (mild, smoky or spicy)
        1/4 cup chives chopped
        <br>Directions<br>
        In a shallow bowl, whisk together the minced garlic, minced ginger, olive oil, soy sauce, chili sauce, brown sugar, red chili flakes and sriracha to combine.
        Season salmon with salt, pepper and paprika. Add salmon fillets to the marinade, turning each to evenly coat in the sauce.
        Cover with plastic wrap and let marinate in the refrigerator for 2 hours or overnight (if time allows).
        Preheat oven to 370°F (190°C). Heat an oven proof skillet over medium heat with a small drizzle of oil.
        Sear salmon for 2-3 minutes on both sides, undisturbed, to get nice crust. (You may need to sear in batches depending on the size of your skillet.)
        Transfer to plate and repeat with remaining salmon.
        Return all salmon fillets to the skillet. Alternatively, transfer to baking dish.
        Bake for 8-10 minutes, or until cooked to your liking.
        Serve warm with chopped chives.`,


    rolls: `Ingredients<br>
        2 Persian cucumbers, peeled and julienned
        1/2 tsp. rice wine vinegar
        1/4 tsp. kosher salt
        2 (5-oz.) cans tuna packed in water, drained
        1/4 c. mayonnaise (preferably Kewpie)
        3 tbsp. Sriracha
        1 tsp. togarashi (optional)
        6 nori sheets
        4 c. prepared sushi rice, divided
        1 avocado, sliced 1/3" thick
        Black and white sesame seeds and thinly sliced scallions, for garnish
        <br>Directions<br>
        Step 1
        In a medium bowl, toss cucumbers, vinegar, and salt. In another medium bowl, mix tuna, mayonnaise, Sriracha, and togarashi (if using).
        Step 2
        On a bamboo mat, lay 1 nori sheet. Using dampened hands, spread 2/3 c. rice evenly across 80% of the nori, leaving an uncovered border at end farthest from you. Working at end closest to you, arrange 3 tbsp. tuna mixture in a straight line horizontally on top of rice. Top tuna mixture with strips of cucumber and avocado.
        Step 3
        Lift bamboo mat from end closest to you and use it to guide edge of rice into a tight spiral. Squeeze firmly along mat to compact roll, then continue rolling in a spiral log to seal edge. Repeat with remaining ingredients.
        Step 4
        Let roll sit 10 minutes before slicing. Garnish with sesame seeds and scallions.`
    };
    

    document.getElementById("wings").addEventListener("click", function() {
        console.log("Wings clicked")
        const recipeContainer = document.getElementById("wings-recipe");
        if (recipeContainer.innerHTML.length!=0) {
            recipeContainer.innerHTML = "";
          } 
          else {
            recipeContainer.innerHTML = recipes["wings"];
          }
    });
    
    document.getElementById("salmon").addEventListener("click", function() {
        console.log("Salmon clicked")
        const recipeContainer = document.getElementById("salmon-recipe");
        if (recipeContainer.innerHTML.length!=0) {
            recipeContainer.innerHTML = "";
          } 
          else {
            recipeContainer.innerHTML = recipes["salmon"];
          }
    });
    
    document.getElementById("rolls").addEventListener("click", function() {
        console.log("Rolls clicked")
        const recipeContainer = document.getElementById("rolls-recipe");
        if (recipeContainer.innerHTML.length!=0) {
            recipeContainer.innerHTML = "";
          } 
          else {
            recipeContainer.innerHTML = recipes["rolls"];
          }
    });