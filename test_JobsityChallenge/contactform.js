
const puppeteer = require('puppeteer')
const expect = require('chai').expect
const assert = require('assert')

const config = require('../test_JobsityChallenge/lib/config')
const helpers = require('../test_JobsityChallenge/lib/helpers')
const utils = require('../test_JobsityChallenge/lib/utils')
const objects = require('../test_JobsityChallenge/lib/objects')

describe('Contact Form Automation:On Contact form all fields must be validated before sending a message ', () => {
    let browser
    let page

    before(async function () {
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


    })

    after(async function () {
        await browser.close()
    })

    describe('First Phase', () => {
        it('Entering to the Page : http://automationpractice.com/ ', async () => {

            await helpers.loadUrl(page, config.baseUrl)
            await helpers.shouldExist(page, '#header_logo');

        })

        it('Clickin on Contact Menu Option', async () => {
            await helpers.shouldExist(page, '#index > #page > .columns-container')
            await page.click('#index > #page > .columns-container')

            await helpers.shouldExist(page, '.container > .row > nav > #contact-link > a')
            await page.click('.container > .row > nav > #contact-link > a')


        })


        describe('Filling the Contact Form with Information', () => {

            it('Selecting Subject Heading ', async () => {

                await page.waitForSelector('.clearfix #id_contact')
                await page.click('.clearfix #id_contact')

                await page.select('.clearfix #id_contact', '2')

                await page.waitForSelector('.clearfix #id_contact')
                await page.click('.clearfix #id_contact')
            })

            it('Writing the email', async () => {
                await page.waitForSelector('fieldset #email')
                await helpers.typeText(page, 'abrahamwmella@gmail.com', 'fieldset #email')
            })

            it('Writing Order References', async () => {
                await page.waitForSelector('fieldset #id_order')
                await helpers.typeText(page, '01020202', 'fieldset #id_order')

            })
            it('Uploading Image', async () => {



                const fileSelector = '[type=file]';
                const element = await page.waitForSelector(fileSelector);
                const files = ['./test_JobsityChallenge/imgs/testing.jpeg'];
                for (let index = 0; index < files.length; index++) {
                    const filePath = files[index];
                    await element.uploadFile(filePath);
                }

                await page.waitFor(4000)

            })


            it('Writing some Message', async () => {
                await page.waitForSelector('fieldset #message')
                await helpers.typeText(page, 'TESTING TESTING TESTING', 'fieldset #message')

            })

            it('Clicking on the submit', async () => {
                await page.waitForSelector('.contact-form-box > fieldset > .submit > #submitMessage > span')
                await page.click('.contact-form-box > fieldset > .submit > #submitMessage > span')


            })


            it('ScreenShot for the Succesfull', async () => {
                await page.screenshot({ path: './test_JobsityChallenge/errorScreenShots/imgsresult.png', type: 'png', fullPage: true });
            })
        })





    })


    describe('Second Phase: Testing for invalids fill contact form ', () => {
        it('Entering to the Page : http://automationpractice.com/ ', async () => {

            await helpers.loadUrl(page, config.baseUrl)
            await helpers.shouldExist(page, '#header_logo');

        })

        it('Clickin on Contact Menu Option', async () => {
            await helpers.shouldExist(page, '#index > #page > .columns-container')
            await page.click('#index > #page > .columns-container')

            await helpers.shouldExist(page, '.container > .row > nav > #contact-link > a')
            await page.click('.container > .row > nav > #contact-link > a')


        })


        it('Writing the email', async () => {
            await page.waitForSelector('fieldset #email')
            await helpers.typeText(page, '@.com', 'fieldset #email')
        })

        it('Clicking on the submit', async () => {
            await page.waitForSelector('.contact-form-box > fieldset > .submit > #submitMessage > span')
            await page.click('.contact-form-box > fieldset > .submit > #submitMessage > span')


        })

        
        it('Writing a Invalid Email', async () => {
                       
            await page.waitForSelector('fieldset #email')
            await helpers.typeText(page, '@.com', 'fieldset #email')
        })



        it('Validate if a message for a Invalid Email its showing up.', async () => {
            await page.waitFor(3000)
            await page.waitForFunction(
                'document.querySelector("body").innerText.includes("Invalid email address.")',
              );
            
                   
        })

        it('ScreenShot for the Succesfull', async () => {
            await page.screenshot({ path: './test_JobsityChallenge/errorScreenShots/error1.png', type: 'png', fullPage: true });
        })


        
        it('Entering to the Page : http://automationpractice.com/index.php?controller=contact', async () => {

            await helpers.loadUrl(page, "http://automationpractice.com/index.php?controller=contact")
            await helpers.shouldExist(page, '#header_logo');

        })

        it('Selecting Subject Heading ', async () => {

            await page.waitForSelector('.clearfix #id_contact')
            await page.click('.clearfix #id_contact')

            await page.select('.clearfix #id_contact', '2')

            await page.waitForSelector('.clearfix #id_contact')
            await page.click('.clearfix #id_contact')
        })

        it('Writing a  Email', async () => {
                       
            await page.waitForSelector('fieldset #email')
            await helpers.typeText(page, 'abrahamwmella@gmail.com', 'fieldset #email')
        })

        it('Clicking on the submit', async () => {
            await page.waitForSelector('.contact-form-box > fieldset > .submit > #submitMessage > span')
            await page.click('.contact-form-box > fieldset > .submit > #submitMessage > span')


        })
        
        it('Validate if a message for a Invalid Message its showing up.', async () => {
            await page.waitFor(3000)
            await page.waitForFunction(
                'document.querySelector("body").innerText.includes("The message cannot be blank.")',
              );
            
                   
        })

        it('ScreenShot for the Succesfull', async () => {
            await page.screenshot({ path: './test_JobsityChallenge/errorScreenShots/error2.png', type: 'png', fullPage: true });
   
        })






    })


})



