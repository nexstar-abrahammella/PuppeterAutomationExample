const {setWorldConstructor } = require('cucumber');
const {expect } = require('chai');
const puppeteer = require('puppeteer');
const assert = require('assert')

const config = require('./lib/config')
const helpers = require('./lib/helpers')
const utils = require('./lib/utils')
const objects = require('./lib/objects')
let browser;
let page;

class CustomWorld{

    
    async launchBrowser () {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: config.slowMo,
            devtools: config.devtools,
            timeout: config.launchTimeout
        })

        page = await browser.newPage()
        await page.setDefaultNavigationTimeout(config.waitingTimeout)
        await page.setViewport({
            width: config.viewportWidth,
            height: config.viewportHeight
        })


    }

    async closeBrowser() {
        await browser.close()
    }
    
    async visit() {
      
            await helpers.loadUrl(page, config.baseUrl)
            await helpers.shouldExist(page, '#header_logo');

            await helpers.shouldExist(page, '#index > #page > .columns-container')
            await page.click('#index > #page > .columns-container')

            await helpers.shouldExist(page, '.container > .row > nav > #contact-link > a')
            await page.click('.container > .row > nav > #contact-link > a')
    
    }

    async fillContactForm (){
  
                await page.waitForSelector('.clearfix #id_contact')
                await page.click('.clearfix #id_contact')

                await page.select('.clearfix #id_contact', '2')

                await page.waitForSelector('.clearfix #id_contact')
                await page.click('.clearfix #id_contact')
           
                await page.waitForSelector('fieldset #email')
                await helpers.typeText(page, 'abrahamwmella@gmail.com', 'fieldset #email')
            
         
                await page.waitForSelector('fieldset #id_order')
                await helpers.typeText(page, '01020202', 'fieldset #id_order')

         
      

                const fileSelector = '[type=file]';
                const element = await page.waitForSelector(fileSelector);
                const files = ['./test_JobsityChallenge/imgs/testing.jpeg'];
                for (let index = 0; index < files.length; index++) {
                    const filePath = files[index];
                    await element.uploadFile(filePath);
                }
                await page.waitFor(4000)

         


                await page.waitForSelector('fieldset #message')
                await helpers.typeText(page, 'TESTING TESTING TESTING', 'fieldset #message')

    

          
        
    }

    async submitContact(){
   
            await page.waitForSelector('.contact-form-box > fieldset > .submit > #submitMessage > span')
            await page.click('.contact-form-box > fieldset > .submit > #submitMessage > span')

    }

    async verifySuccesfull(){

            await page.screenshot({ path: './test_JobsityChallenge/imgsresult.png', type: 'png', fullPage: true });
   
    }



}

setWorldConstructor(CustomWorld);