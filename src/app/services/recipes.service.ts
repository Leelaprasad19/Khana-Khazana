import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  cuisines = [
      {path1: "assets/Images/Cusines/home-chinese.jpg", name1: "Chinese", info1:"Chinese cuisine is an important part of Chinese culture and includes cuisines originating from the diverse regions of China as well as from Overseas Chinese who have settled in other parts of the world. Because of the Chinese diaspora and historical power of the country, Chinese cuisine has influenced many other cuisines in Asia, with modifications made to cater to local palates. Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide. The preferences for seasoning and cooking techniques of Chinese provinces depend on differences in historical background and ethnic groups. Geographic features including mountains, rivers, forests, and deserts also have a strong effect on the local available ingredients, considering that the climate of China.",
      path2: "assets/Images/Cusines/home-indian.webp", name2: "Indian", info2:"Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits. Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.Historical events such as invasions, trade relations, and colonialism have played a role in introducing certain foods to this country. The Columbian discovery of the New World brought a number of new vegetables and fruit to India. A number of these such as potatoes, tomatoes, chillies, peanuts, and guava have become staples in many regions of India.  Indian cuisine has influenced other cuisines across the world, especially those from Europe."},
      {path1: "assets/Images/Cusines/home-italian.jpg", name1: "Italian", info1:"Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity, and later spread around the world together with waves of Italian diaspora. Significant changes occurred with the colonization of the Americas and the introduction of potatoes, tomatoes, capsicums, maize and sugar beet - the latter introduced in quantity in the 18th century. Italian cuisine is known for its regional diversity, especially between the north and the south of Italy. It offers an abundance of taste, and is one of the most popular and copied in the world. It influenced several cuisines around the world, chiefly that of the United States. Italian cuisine is generally characterized by its simplicity, with many dishes having only two to four main ingredients.", 
      path2: "assets/Images/Cusines/home-mexican.jpg", name2: "Mexican", info2:"Mexican cuisine consists of the cooking cuisines and traditions of the modern country of Mexico. Its roots lie in Mesoamerican cuisine. Its ingredients and methods begin with the first agricultural communities such as the Maya who domesticated maize, created the standard process of maize nixtamalization, and established their foodways (Maya cuisine). Successive waves of other Mesoamerican groups brought with them their own cooking methods. These included: the Olmec, Teotihuacanos, Toltec, Huastec, Zapotec, Mixtec, Otomi, Purépecha, Totonac, Mazatec, Mazahua, and Nahua. With the Mexica formation of the multi-ethnic Triple Alliance (Aztec Empire), culinary foodways became infused (Aztec cuisine). Today's food staples are native to the land and include: corn (maize), beans, squash, amaranth, chia, avocados, tomatoes, tomatillos and chilli pepper."},
  ]

  unsortedchineseRecipes = [
    {"path" : "assets/Images/Cusines/Chinese/dim-sum.jpg", "name" : "Dim Sum", "ingredients" : "shrimp,garlic,wonton wrappers,soya sause,spring onion,meat", "procedure_" : "assets/Images/Procedure/chinese/dimsim.png", "duration" : 60}, 
    {"path" : "assets/Images/Cusines/Chinese/hakka-noodles.jpg", "name" : "Hakka Noodles", "ingredients" : "veggies,carrot,cabbage,soy sause,toasted sesame oil,herbs,rice vinegar", "procedure_" : "assets/Images/Procedure/chinese/hakka-noodles.png", "duration" : 25}, 
    {"path" : "assets/Images/Cusines/Chinese/ma-po-eggplant.jpg", "name" : "Ma Po Eggplant", "ingredients" : "chilli black bean paste,soya sauce,oyster sauce,brown sugar,cornstarch,water", "procedure_" : "assets/Images/Procedure/chinese/ma-po- eggplant.png", "duration" : 45}, 
    {"path" : "assets/Images/Cusines/Chinese/pearl-meatballs.jpg", "name" : "Pearl Meatballs", "ingredients" : "dried bamboo leaves,glutinous rice,pork,water chestnuts,ginger,scallions,Shaoxing wine,cornstarch,ground white pepper,sesame oil,sea salt,sugar", "procedure_" : "assets/Images/Procedure/chinese/pearl-meatball.png", "duration" : 40}, 
    {"path" : "assets/Images/Cusines/Chinese/Piri-Piri-Chicken.jpg", "name" : "Piri Piri Chicken", "ingredients" : "fresh cilantro,ginger,large shallot,garlic cloves,piri piri sauce,hot pepper sauce,olive oil,lemon juice,coarse kosher salt,freshly ground black pepper,chicken", "procedure_" : "assets/Images/Procedure/chinese/piri-piri.png", "duration" : 50}, 
    {"path" : "assets/Images/Cusines/Chinese/schezwan-chilli-chicken.jpg", "name" : "Schezwan Chilli Chicken", "ingredients" : "oil,clove garlic,Spring onion,carrot,yellow capsicum, beans,green capsicum,sweet corn,salt,soy sauce,vinegar,schezwan sauce,cup leftover rice,spring onion", "procedure_" : "assets/Images/Procedure/chinese/schezwanchillichicken.png", "duration" : 45}, 
    {"path" : "assets/Images/Cusines/Chinese/shitake-fried-rice.webp", "name" : "Shitake Fried Rice", "ingredients" : "Coarse salt,ground pepper,brown rice,vegetable oil,eggs,shitake mushrooms,garlic cloves,red pepper flakes,shelled edamame,scallions,lime juice,soya sauce", "procedure_" : "assets/Images/Procedure/chinese/shitakefriedrice.png", "duration" : 40}, 
    {"path" : "assets/Images/Cusines/Chinese/Spring-Roll.jpg", "name" : "Spring Roll", "ingredients" : "oil,clove,garlic,chilli,spring onion,onion,carrot,cabbage,beans,capsicum,vinegar,soya sauce,chilli sauce,pepper powder,salt", "procedure_" : "assets/Images/Procedure/chinese/springroll.png", "duration" : 35}, 
    {"path" : "assets/Images/Cusines/Chinese/sushi.jpg", "name" : "Sushi", "ingredients" : "rice,nori,sushi rice,wasabi,avocado,soya sause,cucumber,rice vinegar", "procedure_" : "assets/Images/Procedure/chinese/sushi.png", "duration" :  100}, 
    {"path" : "assets/Images/Cusines/Chinese/wonton.webp", "name" : "Wonton", "ingredients" : "pork,soya sauce,chives,rice wine vinegar,cornstarch,grated ginger,garlic clove,crushed red pepper flakes,sesame oil,square wonton wrappers,water", "procedure_" : "assets/Images/Procedure/chinese/wonton.png", "duration" :  60}, 
    {"path" : "assets/Images/Cusines/Chinese/hakka-noodles.jpg", "name" : "Hakka Noodles", "ingredients" : "pork,soya sauce,chives,rice wine vinegar,cornstarch,grated ginger,garlic clove,crushed red pepper flakes,sesame oil,square wonton wrappers,water", "procedure_" : "assets/Images/Procedure/chinese/dimsim.png", "duration" : 499}, 
    {"path" : "assets/Images/Cusines/Chinese/hakka-noodles.jpg", "name" : "Hakka Noodles", "ingredients" : "pork,soya sauce,chives,rice wine vinegar,cornstarch,grated ginger,garlic clove,crushed red pepper flakes,sesame oil,square wonton wrappers,water", "procedure_" : "assets/Images/Procedure/chinese/dimsim.png", "duration" : 500} 
  ]

  unsortedindianRecipes = [
    {"path" : "assets/Images/Cusines/Indian/Aloo-Paratha.jpg", "name" :  "Aloo Paratha", "ingredients" :  "potato,red chilli powder,coriander leaves,onion,salt,garam masala powder,ghee,wheat flour,water", "procedure_" : "assets/Images/Procedure/indian/alooparantha.png", "duration" : 50}, 
    {"path" : "assets/Images/Cusines/Indian/chicken-biryani.jpg", "name" :  "Chicken Biryani", "ingredients" :  "basmati rice,chicken,mint leaves,garam masala powder,salt,saffron,oil,bay leaf,green cardamom,black cardamom,clove,cumin seeds,onion,green chillies,turmeric  powder,ginger paste,garlic paste,red chilli powder,curd,ginger,coriander leaves,kewra,water,rose water,ghee", "procedure_" : "assets/Images/Procedure/indian/chickenbiryani.png", "duration" : 85}, 
    {"path" : "assets/Images/Cusines/Indian/dal-makhani.jpg", "name" :  "Dal Makhani", "ingredients" :  "red kidney beans,salt,red chilli powder,ginger,butter,oil,onion,green chilli,tomato puree,garam masala powder,cream,urad dal,ginger paste,garlic paste,water", "procedure_" : "assets/Images/Procedure/indian/dalmakhni.png", "duration" : 80}, 
    {"path" : "assets/Images/Cusines/Indian/eggless-chocolate-cake.jpg", "name" :  "Eggless Chocolate Cake", "ingredients" :  "all-purpose flour,white sugar,unsweetened cocoa powder,oil,water,baking soda,salt,vanilla extract", "procedure_" : "assets/Images/Procedure/indian/egglesschocolatecake.png", "duration" : 45}, 
    {"path" : "assets/Images/Cusines/Indian/fish-fry.jpg", "name" :  "Fish Fry", "ingredients" :  "fish,turmeric powder,salt,ginger past,garlic paste,curd,mustard oil", "procedure_" : "assets/Images/Procedure/indian/fishfry.png", "duration" : 40}, 
    {"path" : "assets/Images/Cusines/Indian/Masala-Dosa.jpg", "name" :  "Masala Dosa", "ingredients" :  "rice,oil,urad dal,fenugreek seeds,salt,potato,onion,green chilli,oil,mustard seeds,curry leaves,turmeric powder,water,salt", "procedure_" : "assets/Images/Procedure/indian/masala dosa.png", "duration" : 30}, 
    {"path" : "assets/Images/Cusines/Indian/paneer-pizza-recipe.jpg", "name" :  "Paneer Pizza", "ingredients" :  "pizza base,pizza sauce,paneer,green capsicum,mozzarella,butter,oregano,chilli flakes", "procedure_" : "assets/Images/Procedure/indian/paneer pizza.png", "duration" :  100}, 
    {"path" : "assets/Images/Cusines/Indian/prawn-currry.jpg", "name" :  "Prawn Curry", "ingredients" :  "prawns,onion,turmeric powder,tomato,salt,water,green chilli,coriander seeds,curry leaves,cumin seeds,dry red chili,oil,coconut,tamarind", "procedure_" : "assets/Images/Procedure/indian/prawncurry.png", "duration" : 30}, 
    {"path" : "assets/Images/Cusines/Indian/Samosa.jpg", "name" :  "Samosa", "ingredients" :  "all-purpose-flour,oil,cumin seeds,coriander seeds,ginger,green chilli,raisins,cashews,potato,cumin powder,coriander powder,garam masala powder,red chilli powder,salt,kasoori methi leaves,coriander leaves,carom seeds,ghee,water,peanuts", "procedure_" : "assets/Images/Procedure/indian/samosa.png", "duration" : 55}, 
    {"path" : "assets/Images/Cusines/Indian/shakshuka.jpg", "name" :  "Shakshula", "ingredients" : "olive oil,onion,red capsicum,garlic,paprika,cumin,red chili powder,tomatoes,eggs,salt,pepper,coriander", "procedure_" : "assets/Images/Procedure/indian/shakshuka.png", "duration" : 30}, 
    {"path" : "assets/Images/Cusines/Indian/chicken-biryani.jpg", "name" :  "Chicken Biryani", "ingredients" :  "basmati rice,chicken,mint leaves,garam masala powder,salt,saffron,oil,bay leaf,green cardamom,black cardamom,clove,cumin seeds,onion,green chillies,turmeric  powder,ginger paste,garlic paste,red chilli powder,curd,ginger,coriander leaves,kewra,water,rose water,ghee", "procedure_" : "assets/Images/Procedure/indian/chickenbiryani.png", "duration" : 499}, 
    {"path" : "assets/Images/Cusines/Indian/chicken-biryani.jpg", "name" :  "Chicken Biryani", "ingredients" :  "basmati rice,chicken,mint leaves,garam masala powder,salt,saffron,oil,bay leaf,green cardamom,black cardamom,clove,cumin seeds,onion,green chillies,turmeric  powder,ginger paste,garlic paste,red chilli powder,curd,ginger,coriander leaves,kewra,water,rose water,ghee", "procedure_" : "assets/Images/Procedure/indian/chickenbiryani.png", "duration" : 500}    
  ]

  chineseRecipes = [
    {"path" : "assets/Images/Cusines/Chinese/dim-sum.jpg", "name" : "Dim Sum", "ingredients" : "shrimp,garlic,wonton wrappers,soya sause,spring onion,meat", "procedure_" : "assets/Images/Procedure/chinese/dimsim.png", "duration" : 60}, 
    {"path" : "assets/Images/Cusines/Chinese/hakka-noodles.jpg", "name" : "Hakka Noodles", "ingredients" : "veggies,carrot,cabbage,soy sause,toasted sesame oil,herbs,rice vinegar", "procedure_" : "assets/Images/Procedure/chinese/hakka-noodles.png", "duration" : 25}, 
    {"path" : "assets/Images/Cusines/Chinese/ma-po-eggplant.jpg", "name" : "Ma Po Eggplant", "ingredients" : "chilli black bean paste,soya sauce,oyster sauce,brown sugar,cornstarch,water", "procedure_" : "assets/Images/Procedure/chinese/ma-po- eggplant.png", "duration" : 45}, 
    {"path" : "assets/Images/Cusines/Chinese/pearl-meatballs.jpg", "name" : "Pearl Meatballs", "ingredients" : "dried bamboo leaves,glutinous rice,pork,water chestnuts,ginger,scallions,Shaoxing wine,cornstarch,ground white pepper,sesame oil,sea salt,sugar", "procedure_" : "assets/Images/Procedure/chinese/pearl-meatball.png", "duration" : 40}, 
    {"path" : "assets/Images/Cusines/Chinese/Piri-Piri-Chicken.jpg", "name" : "Piri Piri Chicken", "ingredients" : "fresh cilantro,ginger,large shallot,garlic cloves,piri piri sauce,hot pepper sauce,olive oil,lemon juice,coarse kosher salt,freshly ground black pepper,chicken", "procedure_" : "assets/Images/Procedure/chinese/piri-piri.png", "duration" : 50}, 
    {"path" : "assets/Images/Cusines/Chinese/schezwan-chilli-chicken.jpg", "name" : "Schezwan Chilli Chicken", "ingredients" : "oil,clove garlic,Spring onion,carrot,yellow capsicum, beans,green capsicum,sweet corn,salt,soy sauce,vinegar,schezwan sauce,cup leftover rice,spring onion", "procedure_" : "assets/Images/Procedure/chinese/schezwanchillichicken.png", "duration" : 45}, 
    {"path" : "assets/Images/Cusines/Chinese/shitake-fried-rice.webp", "name" : "Shitake Fried Rice", "ingredients" : "Coarse salt,ground pepper,brown rice,vegetable oil,eggs,shitake mushrooms,garlic cloves,red pepper flakes,shelled edamame,scallions,lime juice,soya sauce", "procedure_" : "assets/Images/Procedure/chinese/shitakefriedrice.png", "duration" : 40}, 
    {"path" : "assets/Images/Cusines/Chinese/Spring-Roll.jpg", "name" : "Spring Roll", "ingredients" : "oil,clove,garlic,chilli,spring onion,onion,carrot,cabbage,beans,capsicum,vinegar,soya sauce,chilli sauce,pepper powder,salt", "procedure_" : "assets/Images/Procedure/chinese/springroll.png", "duration" : 35}, 
    {"path" : "assets/Images/Cusines/Chinese/sushi.jpg", "name" : "Sushi", "ingredients" : "rice,nori,sushi rice,wasabi,avocado,soya sause,cucumber,rice vinegar", "procedure_" : "assets/Images/Procedure/chinese/sushi.png", "duration" :  100}, 
    {"path" : "assets/Images/Cusines/Chinese/wonton.webp", "name" : "Wonton", "ingredients" : "pork,soya sauce,chives,rice wine vinegar,cornstarch,grated ginger,garlic clove,crushed red pepper flakes,sesame oil,square wonton wrappers,water", "procedure_" : "assets/Images/Procedure/chinese/wonton.png", "duration" :  60}, 
    {"path" : "assets/Images/Cusines/Chinese/hakka-noodles.jpg", "name" : "Hakka Noodles", "ingredients" : "pork,soya sauce,chives,rice wine vinegar,cornstarch,grated ginger,garlic clove,crushed red pepper flakes,sesame oil,square wonton wrappers,water", "procedure_" : "assets/Images/Procedure/chinese/dimsim.png", "duration" : 499}, 
    {"path" : "assets/Images/Cusines/Chinese/hakka-noodles.jpg", "name" : "Hakka Noodles", "ingredients" : "pork,soya sauce,chives,rice wine vinegar,cornstarch,grated ginger,garlic clove,crushed red pepper flakes,sesame oil,square wonton wrappers,water", "procedure_" : "assets/Images/Procedure/chinese/dimsim.png", "duration" : 500} 
  ]

  indianRecipes = [
    {"path" : "assets/Images/Cusines/Indian/Aloo-Paratha.jpg", "name" :  "Aloo Paratha", "ingredients" :  "potato,red chilli powder,coriander leaves,onion,salt,garam masala powder,ghee,wheat flour,water", "procedure_" : "assets/Images/Procedure/indian/alooparantha.png", "duration" : 50}, 
    {"path" : "assets/Images/Cusines/Indian/chicken-biryani.jpg", "name" :  "Chicken Biryani", "ingredients" :  "basmati rice,chicken,mint leaves,garam masala powder,salt,saffron,oil,bay leaf,green cardamom,black cardamom,clove,cumin seeds,onion,green chillies,turmeric  powder,ginger paste,garlic paste,red chilli powder,curd,ginger,coriander leaves,kewra,water,rose water,ghee", "procedure_" : "assets/Images/Procedure/indian/chickenbiryani.png", "duration" : 85}, 
    {"path" : "assets/Images/Cusines/Indian/dal-makhani.jpg", "name" :  "Dal Makhani", "ingredients" :  "red kidney beans,salt,red chilli powder,ginger,butter,oil,onion,green chilli,tomato puree,garam masala powder,cream,urad dal,ginger paste,garlic paste,water", "procedure_" : "assets/Images/Procedure/indian/dalmakhni.png", "duration" : 80}, 
    {"path" : "assets/Images/Cusines/Indian/eggless-chocolate-cake.jpg", "name" :  "Eggless Chocolate Cake", "ingredients" :  "all-purpose flour,white sugar,unsweetened cocoa powder,oil,water,baking soda,salt,vanilla extract", "procedure_" : "assets/Images/Procedure/indian/egglesschocolatecake.png", "duration" : 45}, 
    {"path" : "assets/Images/Cusines/Indian/fish-fry.jpg", "name" :  "Fish Fry", "ingredients" :  "fish,turmeric powder,salt,ginger past,garlic paste,curd,mustard oil", "procedure_" : "assets/Images/Procedure/indian/fishfry.png", "duration" : 40}, 
    {"path" : "assets/Images/Cusines/Indian/Masala-Dosa.jpg", "name" :  "Masala Dosa", "ingredients" :  "rice,oil,urad dal,fenugreek seeds,salt,potato,onion,green chilli,oil,mustard seeds,curry leaves,turmeric powder,water,salt", "procedure_" : "assets/Images/Procedure/indian/masala dosa.png", "duration" : 30}, 
    {"path" : "assets/Images/Cusines/Indian/paneer-pizza-recipe.jpg", "name" :  "Paneer Pizza", "ingredients" :  "pizza base,pizza sauce,paneer,green capsicum,mozzarella,butter,oregano,chilli flakes", "procedure_" : "assets/Images/Procedure/indian/paneer pizza.png", "duration" :  100}, 
    {"path" : "assets/Images/Cusines/Indian/prawn-currry.jpg", "name" :  "Prawn Curry", "ingredients" :  "prawns,onion,turmeric powder,tomato,salt,water,green chilli,coriander seeds,curry leaves,cumin seeds,dry red chili,oil,coconut,tamarind", "procedure_" : "assets/Images/Procedure/indian/prawncurry.png", "duration" : 30}, 
    {"path" : "assets/Images/Cusines/Indian/Samosa.jpg", "name" :  "Samosa", "ingredients" :  "all-purpose-flour,oil,cumin seeds,coriander seeds,ginger,green chilli,raisins,cashews,potato,cumin powder,coriander powder,garam masala powder,red chilli powder,salt,kasoori methi leaves,coriander leaves,carom seeds,ghee,water,peanuts", "procedure_" : "assets/Images/Procedure/indian/samosa.png", "duration" : 55}, 
    {"path" : "assets/Images/Cusines/Indian/shakshuka.jpg", "name" :  "Shakshula", "ingredients" : "olive oil,onion,red capsicum,garlic,paprika,cumin,red chili powder,tomatoes,eggs,salt,pepper,coriander", "procedure_" : "assets/Images/Procedure/indian/shakshuka.png", "duration" : 30}, 
    {"path" : "assets/Images/Cusines/Indian/chicken-biryani.jpg", "name" :  "Chicken Biryani", "ingredients" :  "basmati rice,chicken,mint leaves,garam masala powder,salt,saffron,oil,bay leaf,green cardamom,black cardamom,clove,cumin seeds,onion,green chillies,turmeric  powder,ginger paste,garlic paste,red chilli powder,curd,ginger,coriander leaves,kewra,water,rose water,ghee", "procedure_" : "assets/Images/Procedure/indian/chickenbiryani.png", "duration" : 499}, 
    {"path" : "assets/Images/Cusines/Indian/chicken-biryani.jpg", "name" :  "Chicken Biryani", "ingredients" :  "basmati rice,chicken,mint leaves,garam masala powder,salt,saffron,oil,bay leaf,green cardamom,black cardamom,clove,cumin seeds,onion,green chillies,turmeric  powder,ginger paste,garlic paste,red chilli powder,curd,ginger,coriander leaves,kewra,water,rose water,ghee", "procedure_" : "assets/Images/Procedure/indian/chickenbiryani.png", "duration" : 500}    
  ]

  getCuisines(){
    return this.cuisines;
  }

  getChineseRecipes(){
    return  this.unsortedchineseRecipes;
  }

  getIndianRecipes(){
    return  this.unsortedindianRecipes;
  }

  getChineseRecipesRankWise(){

    this.chineseRecipes.sort(function (a, b) {
      return a.duration - b.duration;
    });

    return  this.chineseRecipes;
  }

  getIndianRecipesRankWise(){
    
    this.indianRecipes.sort(function (a, b) {
      return a.duration - b.duration;
    });

    return  this.indianRecipes;
  }

}
