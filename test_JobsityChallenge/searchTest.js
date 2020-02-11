const puppeteer = require('puppeteer')
const expect = require('chai').expect
const assert = require('assert')

const config = require('../test_JobsityChallenge/lib/config')
const helpers = require('../test_JobsityChallenge/lib/helpers')
const utils = require('../test_JobsityChallenge/lib/utils')
const objects = require('../test_JobsityChallenge/lib/objects')

describe('Search Automation: Should Search and have everything working correctly ', () => {
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

    describe('Searching for A Correctly Word', () => {
        it('Entering to the Page : http://automationpractice.com/ ', async () => {

            await helpers.loadUrl(page, config.baseUrl)
            await helpers.shouldExist(page, '#header_logo');

        })

        it('Searching For "Dress Word "', async () => {
            await page.waitForSelector('.container > .row > #search_block_top > #searchbox > .btn')
            await helpers.typeText(page, 'dress', 'input[placeholder="Search"]')
            await page.click('button[name="submit_search"]')
        })

        it("Identifying if the Word Searched its Correctly ", async () => {
            await page.waitForFunction(
                'document.querySelector("body").innerText.includes("dress")',
            );

            await page.screenshot({ path: './test_JobsityChallenge/screenShotsforSearch/wordsearched.png', type: 'png', fullPage: true });
        })


        describe("Testing for all the Sort By Options", () => {
            it('Ordering by Lowest First', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'price:asc')
                await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/lowestfirst.png', type: 'png', fullPage: true });
            })

            it('Ordering by Highest  First', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'price:desc')
               await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/highestfirst.png', type: 'png', fullPage: true });
            })

            it('Ordering by A to Z ', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'name:asc')
                 await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/atoz.png', type: 'png', fullPage: true });
            })
            it('Ordering by Z to A ', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'name:desc')
                await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/ztoa.png', type: 'png', fullPage: true });
            })

            it('Ordering by Stocks ', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'quantity:desc')
               await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/stocks.png', type: 'png', fullPage: true });
            })

            it('Ordering by Reference: Lowest First ', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'reference:asc')
                 await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/referencelowestfirst.png', type: 'png', fullPage: true });
            })

            it('Ordering by Reference: Highest First ', async () => {
         

                await page.waitForSelector('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.click('.sortPagiBar > #productsSortForm #selectProductSort')
                await page.select('.sortPagiBar > #productsSortForm #selectProductSort', 'reference:desc')
                await page.screenshot({ path: './test_JobsityChallenge/ssForOrderBy/referencehighestfirst.png', type: 'png', fullPage: true });
            })

        })
        describe('Testing for Invalid words', () => {
            it('Searching For "@ "', async () => {
                await helpers.loadUrl(page, config.baseUrl)
                await page.waitForSelector('.container > .row > #search_block_top > #searchbox > .btn')
                await helpers.typeText(page, '@', 'input[placeholder="Search"]')
                await page.click('button[name="submit_search"]')

            })
            it('Checking for @ Results ', async () => {
                await page.waitFor(1500);
                await page.screenshot({ path: './test_JobsityChallenge/screenShotsforSearch/firstinvalidword.png', type: 'png', fullPage: true });
                             
            })

            it('Searching For "%#(*@#(*@#)) "', async () => {
                await helpers.loadUrl(page, config.baseUrl)
                await page.waitForSelector('.container > .row > #search_block_top > #searchbox > .btn')
                await helpers.typeText(page, '%#(*@#(*@#))', 'input[placeholder="Search"]')
                await page.click('button[name="submit_search"]')

            })
            it('Checking for%#(*@#(*@#)) Results ', async () => {
                
                await page.waitFor(1500);
                await page.screenshot({ path: './test_JobsityChallenge/screenShotsforSearch/secondinvalidword.png', type: 'png', fullPage: true });
                
            })

            it('Searching For "%#(*@#(*@#)) "', async () => {
                await helpers.loadUrl(page, config.baseUrl)
                await page.waitForSelector('.container > .row > #search_block_top > #searchbox > .btn')
                await helpers.typeText(page, '%#(*@#(*@#))', 'input[placeholder="Search"]')
                await page.click('button[name="submit_search"]')

            })

            it('Searching For "12312312313" ', async () => {
                await helpers.loadUrl(page, config.baseUrl)
                await page.waitForSelector('.container > .row > #search_block_top > #searchbox > .btn')
                await helpers.typeText(page, '12312312313', 'input[placeholder="Search"]')
                await page.click('button[name="submit_search"]')

            })

            it('Checking for 12312312313 Results ', async () => {
                await page.waitFor(1500);
                await page.screenshot({ path: './test_JobsityChallenge/screenShotsforSearch/numberinvalidword.png', type: 'png', fullPage: true });
                
            })

           

        })

        


    })

  

})



