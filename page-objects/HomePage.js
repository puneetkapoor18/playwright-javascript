//@ts-check

class HomePage{

    /**
     * @param {import ("playwright/test").Page} page
     */
    constructor(page){
        this.title = page.locator("//span[@class='title']");
        this.page = page;
    }

    async getTitle(){
        return await this.title.textContent();
    }
}
module.exports= {HomePage};