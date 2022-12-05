describe('Iframe', () =>{
    it('working with iframe', async() =>{
        //openurl
        await browser.url('/iframe-sample');

        // access the ifrme
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);
        //verify logo exist
        await expect($('#site-logo')).toExist();

        // switch to parent frame
        await browser.switchToParentFrame();

        //verify page tittle
        await expect($('#tg-page-header__title')).toHaveText('IFrame Sample')

    })
})