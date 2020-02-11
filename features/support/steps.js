const {Given, When, Then, Before, After} = require('cucumber');


Before(async function(){
 return await this.launchBrowser();

});

After(async function(){
    return await this.closeBrowser();
   
   });

   Given("Entering on the Contact form Page", async function(){
    return await this.visit();
   });

   When("I Fill Contact Form Page" , async function(){
       return await this.fillContactForm();
   });

   When("I click on submit button" , async function(){
    return await this.submitContact();
});

Then("I expect to see its succesfull" , async function(){
    return await this.verifySuccesfull();
})
