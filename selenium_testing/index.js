const {By,Key,Builder,until} = require("selenium-webdriver");
require("chromedriver");
 
async function Careers(){
 
        let searchPosition = "Test Automation Engineer";
         
        //To wait for browser to build and launch properly
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        
        //To fetch https://careers.epam.by/ from the browser
        await driver.get("https://careers.epam.by/");

        //To click on 'Карьера' button in top menu
        await driver.findElement(By.xpath("//a[text()='Карьера']")).click();
        //Close pop-up with cookies
        await driver.findElement(By.className("button-ui bg-color-light-blue cookie-disclaimer__button")).click();
                     
        //To send a search query by passing the value in searchPosition
        await driver.findElement(By.xpath("//input[@id='new_form_job_search-keyword']")).sendKeys(searchPosition);
        await driver.findElement(By.className("recruiting-search__submit")).click();

        //To filter results
        await driver.findElement(By.className("recruiting-search__filter-label checkbox-custom-label")).click();
        driver.sleep(9000);
        await driver.findElement(By.className("default-label")).click();
        driver.sleep(9000);
                
        await driver.wait(until.elementLocated(By.css("#jobSearchFilterForm > div:nth-child(3) > div > div.multi-select-dropdown-container > div > ul:nth-child(2) > li:nth-child(2) > label > span"))).click(); 
        
        await driver.findElement(By.className("selected-params  selected")).click();

        //To scroll to the bottom
        driver.executeScript('window.scrollTo(0,10000);');
              
        //To go to LinkedIn
        await driver.findElement(By.className("footer__social-link")).click();
        driver.sleep(10000);
        
        //To quit the browser after execution
        
        //await driver.quit();
}
 Careers();