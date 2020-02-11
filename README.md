# Web Test Automation
 ## Prequisites
 - Node.JS

 # What Do This Automation?
##  Contact Form Automation:On Contact form all fields must be validated before sending a message
 - √ Entering to the Page : http://automationpractice.com/ 
  - √ Clickin on Contact Menu Option (458ms)
    -  Filling the Contact Form with Information
      -  √ Selecting Subject Heading  (568ms)
       - √ Writing the email (117ms)
       - √ Writing Order References (54ms)
       - √ Uploading Image (4006ms)
       - √ Writing some Message (110ms)
      - √ Clicking on the submit (648ms)
       - √ ScreenShot for the Succesfull (473ms)
  - Second Phase: Testing for invalids fill contact form
     - √ Entering to the Page : http://automationpractice.com/  (1454ms)
     - √ Clickin on Contact Menu Option (569ms)
     - √ Writing the email (105ms)
     - √ Clicking on the submit (640ms)
     - √ Writing a Invalid Email (120ms)
     - √ Validate if a message for a Invalid Email its showing up. (3003ms)
     - √ ScreenShot for the Succesfull (585ms)
     - √ Entering to the Page : http://automationpractice.com/index.php?controller=contact (1602ms)
     - √ Selecting Subject Heading  (110ms)
     - √ Writing a  Email (176ms)
     - √ Clicking on the submit (540ms)
     - √ Validate if a message for a Invalid Message its showing up. (3001ms)
     - √ ScreenShot for the Succesfull (712ms)

 ## Search Automation: Should Search and have everything working correctly
  -  Searching for A Correctly Word
    -  √ Entering to the Page : http://automationpractice.com/  (3354ms)
    -  √ Searching For "Dress Word " (615ms)
    -  √ Identifying if the Word Searched its Correctly  (1084ms)
    -  Testing for all the Sort By Options
     -   √ Ordering by Lowest First (1045ms)
      -  √ Ordering by Highest  First (1064ms)
      -  √ Ordering by A to Z  (1349ms)
      -  √ Ordering by Z to A  (1145ms)
       - √ Ordering by Stocks  (1099ms)
       - √ Ordering by Reference: Lowest First  (1085ms)
       - √ Ordering by Reference: Highest First  (1054ms)
     - Testing for Invalid words
     -   √ Searching For "@ " (3029ms)
      -  √ Checking for @ Results  (2507ms)
      -  √ Searching For "%#(*@#(*@#)) " (1971ms)
      -  √ Checking for%#(*@#(*@#)) Results  (2503ms)
      -  √ Searching For "%#(*@#(*@#)) " (2179ms)
      -  √ Searching For "12312312313"  (2987ms)
     -   √ Checking for 12312312313 Results  (2622ms)

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
...
npm run testcontacform
...
- For Running the Search Automation
...
npm run testsearch
...


## ScreenShots for the Succesfull and Errors it's on the
- You can see the errors for the Succesfull and Errors on the folder 
...
/test_JobsityChallenge/errorScreenShots/
...
## ScreenShots for Order By Results
- You can see the results for the Order By on the folder 
...
/test_JobsityChallenge/ssForOrderBy/
...

## ScreenShots for The Search Automation
- You can see the results for the Search on the folder 
...
/test_JobsityChallenge/screenShotsforSearch/
...
