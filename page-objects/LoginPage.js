//@ts-check

class LoginPage{

    /**
     * @param {import ("playwright/test").Page} page
     */
    constructor(page){
        this.emailid = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByTestId('login-button');
        this.page=page;
    }

    async validLogin(username, password){
        
        await this.emailid.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();    
    }

    async navigate(){
        await this.page.goto("https://www.saucedemo.com/");
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {LoginPage};