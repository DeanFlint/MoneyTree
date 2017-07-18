# MoneyTree - Project 1

## Overview

### What is the purpose of this website?

This website is aimed to educate young adults about ISAs, Money Saving tips and Credit Scores.

### What does it do?

This website has an ISA Calculator which will show them how much they can make whilst saving in a tax free ISA. There is a video and podcast available. This website will also explain what a credit score is and how to improve your own score. There is also a form that allows the user to submit feedback.

### How does it work?

The user will be able to register their details (through JSON web tokens to authenicate the users) and once logged in, they will remain so until they decide to logout. The website is styled with bootstrap and the data provided is consumed from an API hosted on Heroku using AngularJS.

## Features

### Existing Features
- User Based Features
  -ISA calculator
  -Contact Us form

### Features Left to Implement
- User Based Features
	-Registration
	-Login
	-Logout

## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - I used **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - I used **Bootstrap** to give my project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - I used **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [font-awesome](http://fontawesome.io/)
    - I used **font-awesome** to include images for icons.
- [Google Fonts](https://fonts.google.com/) 
    - **Google Fonts** is used to style the text in my site.
- [Angular Animate](https://github.com/angular/bower-angular-animate)
    - I used the Bower package for the AngularJS animation module to implement tooltips on my forms.
- [UI Bootstrap] (https://angular-ui.github.io/bootstrap/)
    -Used for the accordion on the Money-Saving Tips page.

## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <https://github.com/DeanFlint/MoneyTree.git>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request