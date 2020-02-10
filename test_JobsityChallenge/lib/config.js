//This is where we store our configurarion for our test such as basic viral load options or timeout values

module.exports = {
    baseUrl: 'http://automationpractice.com/index.php',
    isHeadless: false,
    slowMo: 0,
    isDevtools: false,
    launchTimeout: 10000,
    waitingTimeout: 20000,
    viewportWidth: 1000,
    viewportHeight: 800
}