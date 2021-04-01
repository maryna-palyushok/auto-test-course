describe('Website', function () {
    it('should be alive', function () {
        browser.url(`http://demo.litecart.net/`)
        const img = $('header a img');       
        if(!img.isExisting()){
            throw new Error('Website should be opened, and logo displayed');
        } 
    })
    it('should have a link', function() {
        browser.url(`http://demo.litecart.net/`)
        const link = $('section.manufacturers.hidden-xs.hidden-sm ul li a[href^="http"]'); 
        link.click();
        if(!link.isExisting()){
            throw new Error('Link should be finded and clicked');
        }
    })
})
