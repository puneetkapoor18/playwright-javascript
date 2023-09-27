//@ts-check

const {expect} = require('@playwright/test');
const test = require('../fixtures/fixture');
const testDataUtil = require('../utils/ReadTestDataUtils');
let e2etestdata;
test.beforeAll(async()=>{
    e2etestdata = JSON.parse(JSON.stringify((require('../resources/E2ETestData.json'))));
})

test.beforeEach(async({loginpage})=>{
    await loginpage.navigate();
})

test("@SmokeTest: Valid Login", async ({loginpage, homepage, page},info)=>{
    const testdata = new testDataUtil().readTestData(info.title.split(":")[1].trim());

    await test.step("Step to validate a successful login", async()=>{
        await loginpage.validLogin(testdata.username, testdata.password);
        expect(await homepage.getTitle() === "Products").toBeTruthy();
    }); 
});


