**MyConnect - Test Automation Project** 🚀

_📌**Overview**_

MyConnect is a test automation project that includes:

✅ API Testing using Postman

✅ End-to-End (E2E) Testing using Cypress

✅ Performance Testing using JMeter


_**Repository Structure**_

📦 MyConnect

┣ 📜 API Automation.postman_collection.json # API Test Collection (Postman)

┣ 📜 Login Load Test (50 Users, 30s Ramp-up).jmx # Load Test Configuration (JMeter)

┣ 📜 login.cy.js # E2E Test Script (Cypress)

┗ 📜 README.md # Documentation of this project

_**🛠Setup and Installation**_

1️⃣ **Running API Tests**

- Make sure Postman is installed.
  Run with Postman:
- Open Postman → Import
- Select the API Automation.postman_collection.json file
- Run the request as needed

2️⃣ **Running End-to-End (E2E) Tests**
- Make sure Cypress is installed.
- Install Cypress (if not):
  
Run the test:
- npx cypress open
- Then select and run login.cy.js

3️⃣ **Running Performance Testing (Load Test)**
- Make sure Apache JMeter is installed.
How to run:
- Open Apache JMeter
- Import the Login Load Test (50 Users, 30s Ramp-up).jmx file
- Run the test by pressing the ▶️ (Start) button

📊 _**Testing Approach**_
- API Testing
Using Postman to validate API responses

- E2E Testing
Using Cypress to automate login scenarios

- Performance Testing
Using JMeter to test login API performance
Simulating 50 users with 30 seconds ramp-up time

