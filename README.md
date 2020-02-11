# Web Test Automation: Jobsity Challenge
 ## Prequisites
 - Node.JS

 ## What Do This Automation?
###  Contact Form Automation:On Contact form all fields must be validated before sending a message
 - √ Entering to the Page : http://automationpractice.com/ 
  - √ Clickin on Contact Menu Option 
    -  Filling the Contact Form with Information
      -  √ Selecting Subject Heading  
       - √ Writing the email 
       - √ Writing Order References 
       - √ Uploading Image 
       - √ Writing some Message 
      - √ Clicking on the submit 
       - √ ScreenShot for the Succesfull 
  - Second Phase: Testing for invalids fill contact form
     - √ Entering to the Page : http://automationpractice.com/ 
     - √ Clickin on Contact Menu Option 
     - √ Writing the email 
     - √ Clicking on the submit 
     - √ Writing a Invalid Email 
     - √ Validate if a message for a Invalid Email its showing up.
     - √ ScreenShot for the Succesfull
     - √ Entering to the Page : http://automationpractice.com/index.php?controller=contact 
     - √ Selecting Subject Heading  
     - √ Writing a  Email 
     - √ Clicking on the submit 
     - √ Validate if a message for a Invalid Message its showing up. 
     - √ ScreenShot for the Succesfull

 ### Search Automation: Should Search and have everything working correctly
   -  Searching for A Correctly Word
   -  √ Entering to the Page : http://automationpractice.com/  
   -  √ Searching For "Dress Word " 
   -  √ Identifying if the Word Searched its Correctly 
   -  Testing for all the Sort By Options
   -  √ Ordering by Lowest First 
   -  √ Ordering by Highest  First 
   -  √ Ordering by A to Z  
   -  √ Ordering by Z to A  
   - √ Ordering by Stocks 
   - √ Ordering by Reference: Lowest First  
   - √ Ordering by Reference: Highest First 
   - Testing for Invalid words
   -   √ Searching For "@ "
   -  √ Checking for @ Results  
   -  √ Searching For "%#(*@#(*@#)) " 
   -  √ Checking for%#(*@#(*@#)) Results  
   -  √ Searching For "%#(*@#(*@#)) " 
   -  √ Searching For "12312312313"  
   -   √ Checking for 12312312313 Results 

## How To
- Set up the project
```
git clone https://github.com/AbrahamMella/JobsityChallenge.git
npm install 
```
- Run Test Suite
```
npm run testjobsity
```

### For Individuals Test
- For Running the Contact Form Automation

```
npm run testcontactform
```

- For Running the Search Automation

``
npm run testsearch
``


### ScreenShots for the Succesfull and Errors it's on the
- You can see the errors for the Succesfull and Errors on the folder 
```
/test_JobsityChallenge/errorScreenShots/
```
## ScreenShots for Order By Results
- You can see the results for the Order By on the folder 
```
/test_JobsityChallenge/ssForOrderBy/
```

## ScreenShots for The Search Automation
- You can see the results for the Search on the folder 
```
/test_JobsityChallenge/screenShotsforSearch/
```
