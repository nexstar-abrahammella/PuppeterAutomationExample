//This is where we create all our custom functionality above the standard property at the API

module.exports = {
    click: async function (page,selector){
        try{
            await page.waitForSelector(selector)
            await page.click(selector)
         }
        catch(error){
            throw new Error(`Could not click on selector: ${selector}`)
        }


        
    },

    typeText: async function (page,text,selector) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector,text)
        } catch (error) {
            throw new Error(`Could not type text into selector: ${selector}`)
            
        }
    },
    
    loadUrl: async function(page,url){
                            //This means is that it will constrain navigation to be finished and there are no more network connections for at least 500 miliseconds
        await page.goto(url,{ waitUntil: 'networkidle0'})
    },

    getText: async function(page,selector){
try {
    await page.waitForSelector(selector)
    return page.$eval(selector, e => e.innerHTML) //Extract text for a selector
    
} catch (error) {
    throw new Error(`Cannot get text from: ${selector}`)
    
}
    },

    //getCount get the number of selector on the website 
getCount: async function (page,selector){
    try {
        await page.waitForSelector(selector)
        return page.$$eval(selector, items => items.length)
    } catch (error) {

        throw new Error(`Cannot get count of selector: ${selector}`)
        
    }
},

//Function to validate text or any other given string on the page.
//The idea is to pass a string into a validation and then specify where you want to validate a string.

waitForText: async function (page,selector,text){

    try {
        await page.waitForSelector(selector)
        await page.waitForFunction((selector,text) =>
        document.querySelectorAll(selector).innerText.includes(text),
        {},
        selector,
        text
        )
    } catch (error) {
        throw new Error(`Text: ${text} not found for selector ${selector}`)
    }
},

pressKey: async function(page,key) {
    try {
        await page.keyboard.press(key)
        
    } catch (error) {
        throw new Error(`Could not press key: ${key} on the keyboard`)
        
    }
},

shouldExist: async function(page,selector)
{
    try {
        await page.waitForSelector(selector, {visible: true})
        
    } catch (error) {
        throw new Error(`Selector: ${selector} not exist`)
        
    }
},

shouldNotExist: async function(page,selector){
    try {
        await page.waitFor(() => !document.querySelector(selector))
        
    } catch (error) {
        throw new Error (`Selector: ${selector} is visible, but should not.`)
        
    }
},

    
}


 