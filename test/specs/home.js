import HomePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Home', ()=> {

   
    beforeEach(async () => {
        console.log('THIS COULD BE USED FOR TEST SETUP')
             //open urL
       await HomePage.open('/');
    })

   after(async () => {
        console.log('Test clenup')
    })

    afterEach(async () => {
        console.log('THIS RUNS AFTER EACH TEST')
             //open urL
       await HomePage.open('/');
    })

    it('Open URL & asser tittle', async () => {
       allureReporter.addSeverity("minor");
        //assert tittle
       await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    });
    it('Open about URL & asser tittle', async () => {
        
        await HomePage.open('https://practice.automationbro.com/about/')
        //assert url
       await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')
    });
    it('Click get started btn & assert url contains get-started text', async () => {

       //click btn get started
       await HomePage.btnGetStarted.click();
        
        //assert url contains get started text
       await expect(browser).toHaveUrlContaining('get-started')
    });

    it('Click on Logo btn & assert url doesn`t contains get-started text', async () => {
        
       //click logo
       await HomePage.imageLogo.click();

       await expect(browser).not.toHaveUrlContaining('get-started')

    });
    it('Find heading element & assert the text', async () => {
   
       //find heading elemennt
       const headingEl = await HomePage.txtHeading;

       //get the text
       const headingText = await headingEl.getText();

       //assert the text
       await expect(headingEl).toHaveText('Think different. Make different.');

    });
});
