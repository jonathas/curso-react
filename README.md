# Alura - React courses

This is the code that I've developed following the course. I've made some changes in the original one.

## React course part 1: Reusable components for your webapp

### Downloading and running the server

Download the jar file from [http://bit.ly/jar-api-curso-react](http://bit.ly/jar-api-curso-react).

Now, in case your MySQL server doesn't have a password, you can just run:

```bash
java -jar jar-cdc-react.jar
```

In case your MySQL server has a password, run it the following way:

```bash
java -Dspring.datasource.password=myPassword -jar jar-cdc-react.jar
```

## Content

### Creating and configuring the project

 - Understanding what we are going to build during the course
 - Configuring the environment and create-react-app
 - Our first page
 - Why do we use JSX and Babel?
 - Where does Webpack come in?

### HTML structure of the first page

 - Importing CSS
 - Defining HTML
 - Implementation of the base layout

### Consuming the API and bringing our listing to life

 - Maintaining the state of the component
 - Updating Component Status
 - Understanding a little more about the details of React
 - Setting up the environment for running the API locally
 - Implementing dynamic listing

### Registering new authors

 - Synthetic events
 - Keeping the state of form fields
 - Updating the listing based on the form
 - Reuse of components and parameterization

### Refactoring the author component and improving communication

 - Extracting the enrollment components for specific classes
 - High Order Components
 - Publish / Subscriber to Decrease Coupling
 - Dealing with API validation errors

### Routes and the React Router

 - Router Configuration
 - Navigating with the History API
 - Daughter Routes and IndexRoute

### Book and general review

 - Implementation of the book registry
 - Selecting the author

### Latest improvements and next steps

 - Spread operator
 - Simplifying the form
 - Build and deploy demo
 - Analyzing what was generated for us by create-react-app

---

## React course part 2: Container components and the react life cycle

### Downloading and running the server

Download the jar file from [https://github.com/alberto-alura/instalura-api/raw/master/instalura.jar](https://github.com/alberto-alura/instalura-api/raw/master/instalura.jar).

Now, in case your MySQL server doesn't have a password, you can just run:

```bash
java -jar instalura.jar
```

In case your MySQL server has a password, run it the following way:

```bash
java -Dspring.datasource.password=myPassword -jar instalura.jar
```

## Content

### Creation of Instalura

 - Importing html, css and images
 - Discovering the components of our application

### Consuming the Instalura API

 - Using the Fetch API
 - Dealing with Promises

### Deeper into the React Router

 - Using parameters on the route
 - onEnter to check conditions before entering route

### JWT-based Authentication

 - JWT to traffic the user's token

### A bit more of the React life cycle and components

 - Having attributes that are not part of the component state
 - componentWillReceiveProps and one more way to handle state change in component

### A little more division of responsibilities

 - Implementation of like and comment features
 - Presentational and Container components
