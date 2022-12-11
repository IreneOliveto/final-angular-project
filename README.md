# FinalProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Description of the project:

## Wireframes:
The wireframe of this project was created by me with draw.io:
![final-project-recipes](https://user-images.githubusercontent.com/106282460/206898513-61428ce5-32af-4ee0-bbd5-cc13be3ae883.png)

## Technologies Used:
* Angular
* Angular Material
* CSS

## Components and Pages structure
This project is composedby five main pages: the homepage, the recipes list page, the recipe detail page, the create recipe page, and update page. All of them have the same navbar and footer, with different contents between them.
* The **homepage** has a title, a button linked to the recipes list page and an hero section with an image.

* The **recipes list page** has the list of all the recipes of the database. Every recipe is a card with the image and name of the recipe, and "read more" button linked to the recipe detail page of that specific item.

* The **recipe detail page** has the name, the photo and the informations of the recipe, in the information section are displayed: the ingredients, the instructions and the energetic values. 

* The **create recipe page** has a form with all the the fields of the recipe data object and a submit button. By submitting the form, the user is redirected to the recipes list page where the new recipe is added at the end of the list. The form validation checks if all the fields are filled. When a new recipe is created, two new buttons become visible in the detail page: the "update" button is used to change the values of the item and the "delete" button is used to delete the item.

* The **update recipe page** has a form with all the recipes values saved in the database and a submit button. By submitting the form, the recipe will be updated in the database. The form validation checks if all the fields are filled. 
The user can acces the update and delete button in the detail page just if this item was created by the user. The user won't be able to modify (delete or update) the rest of the database.

## SetUp
Run `json-server --watch db.json --port 8000`
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`.

## Resources
IronHack material and internet research.

## Created by
Irene Oliveto
