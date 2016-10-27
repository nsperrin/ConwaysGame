/**
 * Created by Nick on 10/26/2016.
 */
describe("Step Button", function(){

    var grid;
    var button = null;
    beforeEach(function(done){
        browser.driver.get('http://localhost:3000');
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        grid = element(by.css('#pixelGrid'));
        button = element(by.css('#stepButton'));
        done();
    });

    it('exists',function(done){
        expect(button).toBeTruthy();
        done();
    });

    it('Reads "STEP"', function(done){
        expect(button.getText()).toBe('STEP');
        done();
    });

    it('making glider then stepping', function(done){
        browser.driver.actions().mouseMove(grid, {x: 10 * 5, y: 10 * 5}).click().perform();
        browser.driver.actions().mouseMove(grid, {x: 10 * 5, y: 11 * 5}).click().perform();
        browser.driver.actions().mouseMove(grid, {x: 10 * 5, y: 12 * 5}).click().perform();
        browser.driver.actions().mouseMove(grid, {x: 11 * 5, y: 12 * 5}).click().perform();
        browser.driver.actions().mouseMove(grid, {x: 12 * 5, y: 11 * 5}).click().perform();

        button.click();

        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(11*5,10*5,1,1);
        }).then(function (gridData) {
            expect(Number(gridData.data[0])).toEqual(30);
            expect(Number(gridData.data[1])).toEqual(127);
            expect(Number(gridData.data[2])).toEqual(255);
            expect(Number(gridData.data[3])).toEqual(255);
        });

        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(10*5,11*5,1,1);
        }).then(function (gridData) {
            expect(Number(gridData.data[0])).toEqual(30);
            expect(Number(gridData.data[1])).toEqual(127);
            expect(Number(gridData.data[2])).toEqual(255);
            expect(Number(gridData.data[3])).toEqual(255);
        });

        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(10*5,12*5,1,1);
        }).then(function (gridData) {
            expect(Number(gridData.data[0])).toEqual(30);
            expect(Number(gridData.data[1])).toEqual(127);
            expect(Number(gridData.data[2])).toEqual(255);
            expect(Number(gridData.data[3])).toEqual(255);
        });

        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(11*5,12*5,1,1);
        }).then(function (gridData) {
            expect(Number(gridData.data[0])).toEqual(30);
            expect(Number(gridData.data[1])).toEqual(127);
            expect(Number(gridData.data[2])).toEqual(255);
            expect(Number(gridData.data[3])).toEqual(255);
        });

        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(9*5,11*5,1,1);
        }).then(function (gridData) {
            expect(Number(gridData.data[0])).toEqual(30);
            expect(Number(gridData.data[1])).toEqual(127);
            expect(Number(gridData.data[2])).toEqual(255);
            expect(Number(gridData.data[3])).toEqual(255);
        });

        done();

    });

});