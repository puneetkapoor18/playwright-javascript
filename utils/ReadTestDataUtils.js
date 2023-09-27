//@ts-check

const dataset = require('../resources/E2ETestData.json');
class ReadTestDataUtils{

    constructor(){}

    /**
     * @param {string | number} testcase
     */
    readTestData(testcase){
        try {
            return dataset[testcase];
          } catch (error) {
            throw new Error(`${error.message}`);
          }   
    }
}

module.exports = ReadTestDataUtils;