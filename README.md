Roman Numeral Converter
==========================
A Node JS Appication that takes in a number and outputs a roman numeral.

Installation
-------------
The installation requires node.js and the node.js package manager, npm.

#### Install node.js

Go to [the node.js website](http://nodejs.org/) to download and install node.js. Installing node.js also installs npm.

#### Clone the Application

Clone the repository from [https://github.com/kamaechi25/roman_test.git](https://github.com/kamaechi25/roman_test.git) using your git client.

    git clone https://github.com/kamaechi25/roman_test.git


#### Install dependencies and compile the application

Go to the project directory, and then run:

    npm install

This will download application dependencies into the `node_modules` directory.

Once everything is installed, use the below command to compile the application.

    npm start

Once the build completes a server will automatically be started to serve your application.
You can access it by pointing a browser to http://localhost:8080/romannumeral?query={integer}
or you can use an api platform to do a GET call to the endpoint

For Example:

[http://localhost:8080/romannumeral?query=15](http://localhost:8080/romannumeral?query=15)

Outputs
```
{
  "result": "XV"
}
```

Engineering and Testing Methodologies
-------------------------------------
The software engineering methodology adopted was the Agile development methodology to develop this software in iterations that contain mini-increments of the new functionality. Also this was in combination with TDD (Test Driven Development) methodology on creating unit test cases before developing the actual code.


Testing
--------
Jasmine is the testing framework used in this application.Run the commande below to execute the unit tests.

    npm test



Packages Layout
---------------
```
project
│   README.md
│   app.js
│   package.json
│   package-lock.json
│
└───libs
│   │   roman-converter.js
│
└───spec
    │   roman-converter.spec.js
    │   server.spec.js
    │
    └───support
        │   jasmine.json
```

Metrics, Monitoring and Logging
-------------------------------
There is a metric dashboard module that has been intergated to the app. This provides a very easy-to-use web based dashboard to show the performance metrics of the running Node.js application.

To view the dashboard,
1. Ensure the app is running ```npm start```
2. Navigate to http://localhost:8080/appmetrics-dash

Dependencies
---------------
* Jasmine Testing Framework https://github.com/jasmine/jasmine
* Super Test for HTTP Assertions https://github.com/visionmedia/supertest#readme
* Node Application Metrics Dashboard for monitoring the app https://www.npmjs.com/package/appmetrics-dash



