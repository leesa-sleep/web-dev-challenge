var container = document.getElementById("results");
var btn = document.getElementById("btn");
var res = [];


btn.addEventListener("click", function() {
  container.innerHTML = "";

  var request = new XMLHttpRequest();
  var input = document.getElementById("search").value;
  request.open('GET', `http://www.recipepuppy.com/api/?q=${input}`);
  request.onload = function() {
    var data = JSON.parse(request.responseText);
    //console.log(input);
    //console.log(data);
    renderHTML(data);
  };
  request.send();
});

function reply_click(clicked_id) {
  console.log(`the index is ${clicked_id.split("-").pop()}`);
  var index = clicked_id.split("-").pop();
  var favorite = res[index];

  var json_str = JSON.stringify(favorite, null, 2);
  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
  }
  console.log(favorite);
  setCookie("mycookie",favorite);

  window.location.href = "./php/handler.php"
}

function renderHTML(data) {
  var htmlString = "";
  var resultsArray = [];

  console.log(data.results.length);

  if (data.results.length == 0) {
    htmlString += `
      <div class="col-sm-12">
        <div class="result">
          <h2>Whoops! There were no results for that query.</h2>
          <p>Please try another search.</p>
        </div>
      </div>
    `;
  } else {
    for (i = 0; i < data.results.length; i++) {
      var ingredients = data.results[i].ingredients.split(", ");
      resultsArray[i] = [data.results[i].title, data.results[i].href, data.results[i].thumbnail, data.results[i].ingredients];

      htmlString += `
        <div class="col-md-3">
          <div class="result">
            <h4><a id="title" href="${data.results[i].href}">${data.results[i].title}</a></h4>
            <img id="thumb" src="${data.results[i].thumbnail}">
            <p>${ingredients.length} ingredient(s): ${data.results[i].ingredients}</p>
            <button id="fav-${i}" class="add-fav btn btn-primary" onClick="reply_click(this.id)">Favorite</button>
          </div>
        </div>
      `;
    }
  }

  console.log(resultsArray);
  res = resultsArray;

  container.insertAdjacentHTML('beforeend', htmlString);
}
