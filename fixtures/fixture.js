//@ts-check

const base = require('@playwright/test');
const { LoginPage } = require("../page-objects/LoginPage");
const { HomePage } = require("../page-objects/HomePage");

const test = base.test.extend({
    loginpage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    homepage: async({page},use)=>{
        await use(new HomePage(page));
    }
});

module.exports=test;
