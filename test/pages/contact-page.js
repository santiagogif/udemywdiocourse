class ContactPage {

    get fieldName(){
        return $('#evf-277-field_ys0GeZISRs-1');
    }

    get fieldEmail(){
        return $('#evf-277-field_LbH5NxasXM-2');
    }

    get fieldPhone(){
        return $('#evf-277-field_66FR384cge-3');
    }

    get fieldMessage(){
        return $('#evf-277-field_yhGx3FOwr2-4');
    }

    get btnSubmit(){
        return $('#evf-submit-277');
    }

    get successMessage(){
        return $('//*[@id="primary"]/div/div/div/section[3]/div/div/div/div/div/section[2]/div/div/div[2]/div/div/div/div/div/div/div');
    }
}

export default new ContactPage();