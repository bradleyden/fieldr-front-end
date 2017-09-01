![Screenshot](https://raw.githubusercontent.com/bradleyden/fieldr-front-end/master/Fieldrscreenshot.png)

# Fieldr

Welcome to Fieldr, a fullstack baseball scoring and data visualization application made by a fan, for fans.

## Links

-   [Deployed Client](https://bradleyden.github.io/fieldr-front-end)
-   [Deployed API](https://serene-hollows-15808.herokuapp.com)
-   [API Repo](https://github.com/bradleyden/fieldr-api)

## Technologies Used

Front-end:
HTML/SCSS and Bootstrap
JavaScript
Ember

Back-end:
Ruby on Rails
PostgreSQL

## Planning

-   [User Stories](https://drive.google.com/open?id=1TaBbTpUiw1MndNdx3hTswQ4vCjXgbcR6XQ)
-   [Wireframes](https://drive.google.com/open?id=1huaFfyxumh8fKocIU63CaIr-OuNJuEa6FA)

## Process

This project grew from a love for watching and following baseball, and a desire to bring the multitudes of different stats to life through visualization.

I began the process by trying to boil baseball down to the basic concepts that could be recreated with basic data entered by the user. It turns out baseball is much more complex than it may originally seem, so it was a challenge to conceptualize the data in a way that made it manageable in the time I had but still provided a complete product.

Once I had the data planned out and mapped, I began to build out my API for the initial resource, games, and a simple Ember front end to start the initial CRUD process. As I began to get this working, I expanded the data relationship to include plate appearances, and was able to get all of the data I needed to start mapping a visual UI.

## Installation Instructions

- Fork and clone this repository
- npm install
- bower install

## What's Next

While this project is a fantastic starting point, there is still much that I would like to incorporate into the application in the future. A few key elements that are at the top of my priority list are:
  - Roster information, so that player numbers can be matched to names
  - D3.js data visualization for each game
  - More advanced stats, including defensive player and pitching stats
  - Team color customization
