# FinalProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Description of the project:

## Wireframes:
I created the wireframe with draw.i![final-project-recipes](https://user-images.githubusercontent.com/106282460/206898513-61428ce5-32af-4ee0-bbd5-cc13be3ae883.png)
o 

## Technologies Used:
* Angular
* Angular Material
* CSS

## Components and Pages structure
This webpage is composedby four pages: the homepage, the recipes list page, the recipe detail page, the create recipe page, and update page all of them have the same navbar and footer, with different contents between them.
* The **homepage** has a title, a button linked to the recipes page and an hero section.

* The **recipes page** has the list of all the recipes of the db. Every recipe is a card with a "read more" button linked to therecipe detail page of that specific recipe.

* The **recipe detail page** has the name, the photo and the informations of the recipe clicked. 

* The **create recipe page** has a form with all the recipes data and a submit button, submitting the form the new recipe will be created in the database. The form validation checks if all the fields are filled. When a new recipe is created, the detail page will show two new buttons: "update" and "delete".

* The **update recipe page** has a form with all the recipes data  saved in the db and a submit button. By submitting the form, the recipe will be updated in the database. The form validation checks if all the fields are filled. When a new recipe is created, the detail page will show two new buttons: "update" and "delete".

## SetUp
Run `json-server --watch db.json --port 8000`
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`.

## Resources
IronHack material and internet research.

## Created by
Irene Oliveto
