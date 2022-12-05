import HomePage from '../pages/home-page.js';
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {
    it('Get the text of all menu & assert them', async () => {
        allureReporter.addFeature("Navigation");
        allureReporter.addSeverity("critical");
        await HomePage.open('/');

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        const actualLinks = [];

        //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);

    })

    it.only('Get the text of all menu & assert them - using wait', async () => {
        await HomePage.open('/');

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        const actualLinks = [];


        // WAIT UNTIL THE HOME TEXT IS DISPLATED ON THE NAVIGATION MENUÇ

        await browser.waitUntil(async function() {
            const hometext = await HomePage.NavComponent.firstNavMenuList.getText();
            return hometext === "Home";
        }, {
            timeoutMsg: 'Could not verify the home text from #primary-menu'
        }
        )
        //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);

    })
})