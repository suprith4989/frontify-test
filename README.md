# frontify-test
Media Library page test case automation in Cypress

## Disclaimer
This project or repository is solely created as an assignment for an organisation named Frontify. This repo does not use any proprietary softwares.

## Author
Suprith Gangawar <suprith_4989@yahoo.com>

## Pre Requisites

## Important Test Cases
### Sorting
Verify if the sorting functionality works as expected

Steps to Perform: </br>
Expected Behavior: </br>
Current Behavior: </br>

### Filtering
Verify if the filtering functionality works as expected

Steps to Perform: </br>
Expected Behavior: </br>
Current Behavior: </br>

### Search
Verify searching an item and observe the behavior

Steps to Perform: </br>
Expected Behavior: </br>
Current Behavior: </br>

### Details of the Listings
Verify clicking any listed item and validating its details

Steps to Perform: </br>
Expected Behavior: </br>
Current Behavior: </br>

## Installation and Usage
1. Clone the repo using command: 'git clone {repo link}'
2. Switch to the repo: 'cd {repo name}'
3. Run the test case file: 'cypress run --spec cypress/integration/<spec file name>
4. Or simply use the direct download option and install cypress. This will let you open the project directly in the cypress dashboard.
5. Open the installed Cypress application
6. Drag your project into the window or manually open it
7. Run the test case spec file
8. Observe the cypress window for test case status
  
## Important Files
cypress/cyppress.json - Has entries to adjust window size of the browser such that all the features are displayed </br>
cypress/package.json - Has all dependencies, versions and repository information </br>
cypress/support/index.js - Has code block to save cypress from failing from uncaught exceptions </br>
cypress/integration/testWhich.spec.js - Has the actual test case within 'describe' and 'it' block </br>
cypress/support/pageObjects/common.js - Has all the selectors from the web pages for ease of use for the user & to track them all in a single file </br>
