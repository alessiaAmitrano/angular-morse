# MorseCoder by Alessia Amitrano

LIVE DEMO AT `https://alessiaamitrano.github.io/angular-morse/`

This application converts the input string into it's morse equivalent and displays it.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## How to start the app

First install the node modules with `npm i`.

I used the json-server package in order to mock a database and perform a http request. To start the json-server you can use `json-server --watch src/assets/translations.json`. You can access the json-server navigating to `http://localhost:3000/`.

I edited the `translation.json` file enclosing the objects in an array called `data`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Styling

I used SCSS for styling and the BEM pattern for class names.
Even if the application is not supposed to be responsive, I used flexbox to make the positioning of the elements simpler.

## Timeout

The idle timeout has been developed using the package `ng-idle`.

## Animations

I have included some basic routing animations and fade animations for the elements inside each page.

## Store

I created an NgXs Store to keep all the important data together. The store is accessed through a facade to keep its logic separated from the components.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
