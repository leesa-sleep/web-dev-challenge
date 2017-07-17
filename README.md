# Installation instructions

You will need to have Node.js installed to view this program.  Type the below command into the terminal to check if you already have node installed;
```
$node -v
```
If you already have node installed it will tell you which version (e.g. v7.7.4).  If you need to install node.js please follow this link <https://nodejs.org/en/>.

To install all the dependencies please enter the following command into the terminal once you have navigated into the root directory; 
```
$npm install
```

To start the program enter the following command;
```
$npm start
```

Once compiled the program will be running on <http://localhost:3000/>

## Testing
To run the tests, enter the following command into the terminal;
```
$npm test
```

## Built With
[React](https://facebook.github.io/react/) - javascript library for building user interfaces

[Redux](http://redux.js.org/) - predictable state container for JavaScript apps

[Bootstrap](http://getbootstrap.com/css/) - front-end framework

# Leesa Web Developer Code Challenge


This is a basic challenge to determine how you approach ambiguous challenges. Most of the time you'll be working directly with our marketing team and they may not be able to provide you with complete requirements.  Show us how you can take a partial set of instructions!

## The Ask

You will need to make a small application that can search for recipes and save them to a list of favorites.

For this we'll use the free api at [Recipe Puppy](http://www.recipepuppy.com/). Documentation [can be found here.](http://www.recipepuppy.com/about/api/)

There are some basic mocks in `/mocks` -- showing the poor artistry of the random engineer assigned to the task.

 - Fork this project.
 - **Complete the items below using any front end tech you'd like.** (( This must be entirely in the front end. Server side languages or platforms will be immediately disqualified ))
 - Submit a Pull Request with your changes.
 - Create an issue if you have any questions.
 

### What should it do?
 - Provide search functionality to query the api for recipes.
 - Show a list of recipes. Information should contain a thumbnail, recipe name, and number of ingredients.
 - Provide the functionality to add a recipe to my favorites.
 - Provide a way to get to a page showing all of my favorites.
 - Favorites should persist between page views.
 - Site should work on mobile devices.
 - Should have a very small code footprint.


#### Extra credit:
 - Add navigation that makes sense.
 - Add the ability to remove favorites.
 - Create the ability to share my favorites with others.
