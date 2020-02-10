# Web Test Automation


 Contact Form Automation:On Contact form all fields must be validated before sending a message
    First Phase
      v Entering to the Page : http://automationpractice.com/ 
      v Clickin on Contact Menu Option 
      Filling the Contact Form with Information
        v Selecting Subject Heading  
        v Writing the email (130ms)
        v Writing Order References (52ms)
        v Uploading Image (4009ms)
        v Writing some Message (110ms)
        v Clicking on the submit (1051ms)
        v ScreenShot for the Succesfull (449ms)
    Second Phase: Testing for invalids fill contact form
      v Entering to the Page : http://automationpractice.com/  (2031ms)
      v Clickin on Contact Menu Option (857ms)
      v Writing the email (115ms)
      v Clicking on the submit (760ms)
      v Writing a Invalid Email (226ms)
      v Validate if a message for a Invalid Email its showing up. (3003ms)
      v ScreenShot for the Succesfull (587ms)
      v Entering to the Page : http://automationpractice.com/index.php?controller=contact (1464ms)
      v Selecting Subject Heading  (117ms)
      v Writing a  Email (158ms)
      v Clicking on the submit (504ms)
      v Validate if a message for a Invalid Message its showing up. (3003ms)
      v ScreenShot for the Succesfull (626ms)


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
