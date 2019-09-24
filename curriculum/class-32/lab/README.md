# LAB - Custom Hooks and Magical Todos!

For this assignment, you will be refactoring a socket.io based chat application to make use of React Hooks and Context APIs

In addition to the raw functionality, you should give careful consideration to the visual layout of your application, color choices, animations, and overall usability.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder. 

## Assignment

* Setup the react application provided and deploy
* Connect it to the "official" API and Q servers (linked below)
  * You'll need a .env file in the root folder of the app
  * REACT_APP_Q_SERVER
  * REACT_APP_API
* Create a complete and verbose UML drawing that shows how the application works
  * Data Flow (what happens when you add a to do item?)
  * How do the components connect?
  * When do the hooks run?
* Write a complete README that describes the application architecture in words.
   * Hooks and how we're managing state in the form
   * The Q/API Connections
   * Which Components are at play
   * What happened to the Shopping list?
     * How would you put it back?

### Stretch Goal (but do it)
* Resurrect your own API and Q servers from earlier in the course.
* Deploy those to Heroku
* Reconnect your React App to use those instead of the official ones.


### Resources

* You will need a deployed API server to store your data inot a 'todo' collection
* You will need a deployed Q server to handle events.
* The API server should be connected to, and publish CRUD events to your Q server

If you are having issues or troubles getting these servers deployed on your own, you may connect to the public API and Q servers. We highly recommend using your own, however.

* [API Server](https://api-js401.herokuapp.com/api/v1)
* [Q Server](https://q-js401.herokuapp.com)

## Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
