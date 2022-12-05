import HomePage from '../pages/home-page.js';
import ContactPage from '../pages/contact-page';
import * as faker from 'faker';

describe('Contact menu', () => {
    it('Fill form & assert them', async () => {
        await HomePage.open('/contact');

        const fieldName = await ContactPage.fieldName;
        const fieldEmail = await ContactPage.fieldEmail;
        const fieldPhone = await ContactPage.fieldPhone;
        const fieldMessage = await ContactPage.fieldMessage;
        const btnSubmit = await ContactPage.btnSubmit;
        const successMessage = await ContactPage.successMessage;

        await fieldName.scrollIntoView();
        await fieldName.setValue(faker.name.findName());
        await fieldEmail.setValue(faker.internet.email());
        await fieldPhone.setValue(faker.phone.phoneNumber());
        await fieldMessage.setValue(faker.lorem.paragraphs(2));
        await btnSubmit.click();
    
        const alert = await successMessage.getText();
        await expect(alert).toEqual('Thanks for contacting us! We will be in touch with you shortly');
    })
})