$(document).ready(function(){

   var getRecipe = function(){

        var recipe = $('#term').val();
        $('#status').text("");
        console.log(recipe);

        if(recipe ==''){
            $('#status').text("Please enter a search term. Help us help you!")
        }

        else {
             

             var myUrl = 'http://www.recipepuppy.com/api/?q='+recipe;
             var Proxy = 'https://cors-anywhere.herokuapp.com/';
             var finalUrl = Proxy + myUrl;

             console.log(finalUrl);

             $.getJSON(finalUrl, function(json) {
                 console.log(json.results);
                 console.log(json.length);

                 if($.isEmptyObject({})){
                     console.log("failed");
                      $('#status').text("We couldn't find any recipes for " + recipe + " try something else!")
                 }

                 else {
                    $('#status').text("Here are your recipes for " + recipe +"!")
                    var html=""
                // for(var i = 0; i < json.results.length; i++){
                    for(var i in json.results){
                    html += '<div class="col-sm-4 recipe">';
                    html += '<p>' + json.results[i].title + '</p>';
                    html += '<p>' + json.results[i].ingredients + '</p>';
                    // html += '<img src="'+json.results[i].thumbnail+'">;
                    html += '</div>';
                    //  $('#result').text(json.results[i].title);
                 }
                 $('#result').html(html);

                  console.log(json.results[0].title);

                 }
                
            });
        }

    }

   $('#search').click(getRecipe);

   

});
