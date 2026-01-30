
#########  Playwright + WireMock BDD API Tests  #########


## Overview

This repository contains automated API test for mock services in Docker containers using Playwight and WireMock
The tests are written in BDD style with clear GIVEN, WHEN, THEN comments and assertions.
- User service: http://localhost:3001
- Order service: http://localhost:3002


## Tech Stack
- Playwright: for automated API testing
- WireMock: for mocking services
- Docker: to run WireMock containers
- TypeScript: test scripting


## How to Run
- clone the repo
- Download and install Node.js
- npx playwright install
- docker-compose up -d
- run tests in ui mode: "npx playwright test --ui"
- run tests in headless mode: "npx playwright test"


## Tests
- GET User
    - Retrieve user info from endpoint /orders?userId=:id
    - Checks that the /user/:id endpoint returns status code 200 
    - validates the response contains id, name, and email fields

- GET Order
    - Checks that the /user/:id endpoint returns status code 200 

- POST Order
    - Sends a POST request to /orders with order data
    - Ensures http 200 response


## BDD Approach
- Tests are written in BDD style:
- GIVEN – initial state or input data
- WHEN – the action being tested (API request)
- THEN – expected results with assertion