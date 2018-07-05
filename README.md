# eShopper Project

## Overview

This is my third project for WDI16 at General Assembly and my first app using the MERN stack.

This time I'm building the user interface for an e-commerce website. It's actually the seller's user interface for building the inventory.

The user can sign up (or log in if already has an account), then it can create stores, and within the stores, it can create products.

They can create, read, update and delete any store, product or user.

The user keeps logged in until press "Log out" on the navbar.

The login uses the browser local storage to simulate a login experience.

This app doesn't use any type of encryption for the password. The login interface was created only to simulate the login experience for UX purposes on this app.

Inside the user profile, lives an instance of IBM Watson Assistant. This is a very simple example of the Watson Assistant, and it's being used to show my knowledge of using restful API and also for experimenting with the Watson technology.

### [Live eShopper site](https://wdi16-eshopper.herokuapp.com/)

## Technologies Used

* MongoDB
* Express.js
* Node.js
* React.js
* Styled Components
* Watson Developer Cloud
* Alertify.js
* [Trello](https://trello.com/b/xhdN59A8/eshopper)

## Features

* Create user
* Edit user
* Update user
* Delete user
* Create user store
* Edit user store
* Update user store
* Delete user store
* Create store product
* Edit store product
* Update store product
* Delete store product
* Watson assistant
.
<details>
<summary>Wireframe</summary>
<br>

![Image of Wireframe](https://github.com/Tilingo/eShopper/blob/master/public/images/wireframe1.jpg)

![Image of Wireframe](https://github.com/Tilingo/eShopper/blob/master/public/images/wireframe2.jpg)

</details>

<details>
<summary>ERD</summary>
<br>

![Image of ERD](https://github.com/Tilingo/eShopper/blob/master/public/images/ERD.jpg)

</details>

## Future Development

* Develope the buyer interface of the store
* Use a real encryption and authentication system
