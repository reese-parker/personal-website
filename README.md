# Personal Website

[Use the app here](https://reeseparker.com/)



## Description

This project is designed to be a personal website to showcase portfolio projects and contact information.

## Design

* The website is styled using MUI V5 components. Additional custom styles are applied using CSS modules. Responsiveness is achievied through grids and media-queries.
* [React-scroll](https://www.npmjs.com/package/react-scroll) is used to provide smooth scrolling when selecting menu items. [React-visibility-sensor](https://www.npmjs.com/package/react-visibility-sensor) is used to create motion when components are scrolled in and out of view.
* Loading state is managed with useState and useEffect.
* Hosting is provided through Firebase.
* Jest is used to test reusable project and contact cards.


## How it works

* On page load the app checks a loading variable in state and displays a progress animation while true. useEffect then triggers a setTimeout to toggle the loading variable. 
* Users can scroll through content or access sections through a navbar menu. 
* Components are wrapped with MUI fade transitions. Visibility is triggered when the component is in the viewport. Components have their own listeners and are triggered individually to provide smooth motion while scrolling through content.
* The project card component is reusable; The projects data object is mapped over and passes props to display dynamic project cards.
* The contact card component takes props and conditionally renders the appropriate icon buttons. Contact information is passed through props.

## Testing

* Jest is used to test the ProjectCard and ContactCard components.
* The ProjectCard component includes tests for rendering a project from the projectsData.js file, as well as testing the correct links are applied for GitHub and the hosted project. Additional tests confirm whether the list of applicable technologies are joined into a string. 
* The ContactCard component includes tests for rendering all contact methods from the contactData.js file, as well as confirming the correct Material UI icon is applied 

## Future Features

* Screenshots attatched to project cards.
* Photos and additional personal content for the About section.
* Animations for project cards.

## Installation

* Clone the repo by opening terminal and typing

```bash
$ git clone https://github.com/reese-parker/personal-website.git
```

* Navigate to the new folder by typing into terminal:
```bash
$ cd personal-website
```

* Install the required dependencies by typing into terminal:
```bash
$ npm install
```
* Run the project by typing into terminal:
```bash
$ npm start
```