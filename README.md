# frontify-test
Media Library page test case automation in Cypress

## Disclaimer
This project or repository is solely created as an assignment for an organisation named Frontify. This repo does not use any proprietary softwares.

## Author
Suprith Gangawar <suprith_4989@yahoo.com>

## Pre Requisites
node </br>
cypress </br>
Visual Stusio Code (any other editor for that matter) </br>

## Important Test Cases
### Sorting
Verify if the sorting functionality works as expected

Steps to Perform: </br>
1. Visit the URL https://demo.frontify.com/d/FkBpT1nT1tqo
2. Click on Media Library tab/page
3. Click on 'Sort Collections by Newest' or the Sort drop down
4. Select any other option from the drop down
5. Observe for changes in the UI


Expected Behavior: </br>
1. Listed items or collections should be sorted according to the selection from drop down

Current Behavior: </br>
Items are sorted according to how new or old they are, or alphabetically

### Filtering
Verify if the filtering functionality works as expected

Steps to Perform: </br>
1. Visit the URL https://demo.frontify.com/d/FkBpT1nT1tqo
2. Click on Media Library tab/page
3. Click on the Filter drop down
4. Select Images
5. Observe the behavior and listed items
6. Clear the filter
7. Select Movies
8. Observe the behavior and listed items

Expected Behavior: </br>
Only Images should be displayed when checked the Images check box
Only Movies should be displayed when checked the Movies check box

Current Behavior: </br>
Same as Expected Behavior

### Search
Verify searching an item and observe the behavior

Steps to Perform: </br>
1. Visit the URL https://demo.frontify.com/d/FkBpT1nT1tqo
2. Click on Media Library tab/page
3. Enter coconut in the search box

Expected Behavior: </br>
All the coconut images should be displayed in the output

Current Behavior: </br>
Same as Expected Behavior

### Details of the Listings
Verify clicking any listed item and validating its details

Steps to Perform: </br>
1. Visit the URL https://demo.frontify.com/d/FkBpT1nT1tqo
2. Click on Media Library tab/page
3. Click on any listed item and not a collection
4. Validate things displayed in the right column/pane

Expected Behavior: </br>
Information related to the item opened should be displayed in right pane
It should be divided into 2 columns: Basic and Metadata

Current Behavior: </br>
Same as Expected Behavior

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
