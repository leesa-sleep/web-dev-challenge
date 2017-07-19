$(document).ready(function(){

   var getRecipe = function(){

        var recipe = $('#term').val();
        console.log(recipe);

   };

   $('#search').click(getRecipe);
             
});
