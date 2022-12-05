const path = require('path');

describe('upload file', () => {
    it('Simple upload file', async () =>{
        //Open url
        await browser.url('https://the-internet.herokuapp.com/upload');

        console.log(__dirname);

        //store test file path
        const filePath = path.join(__dirname, '../data/image.png')

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await browser.pause(4000)
        await $('#file-submit').click();

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!')
    });

    it.only('Upload on a hidden input field', async() => {
        //open urk
        await browser.url('/cart/');

        const filePath = path.join(__dirname, '../data/image.png')

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class
        
        await browser.execute("document.querySelector('#upfile_1').className = ''");
        
          //set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click(); //click the submit button

        //assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');

    })
})