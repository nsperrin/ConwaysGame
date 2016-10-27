/**
 * Created by Nick on 10/26/2016.
 */
describe("Clear Button:", function(){
    var grid;
    var button = null;
    beforeEach(function(done){
        browser.driver.get('http://localhost:3000');
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        grid = element(by.css('#pixelGrid'));
        button = element(by.css('#clearButton'));
        done();
    });

    it('exists',function(done){
        expect(button).toBeTruthy();
        done();
    });

    it('Reads "CLEAR"', function(done){
        expect(button.getText()).toBe('CLEAR');
        done();
    });

    it('Clicking (0,0,20,20) to turn blue, then clearing that with the clear button', function(done){
        var i,j;
        for(i=0 ;i<20;i++) {
            for(j = 0; j < 20; j++) {
                browser.driver.actions().mouseMove(grid, {x: j * 5, y: i * 5}).click().perform();
            }
        }
        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(0,0,100,100);
        }).then(function (gridData) {
            for(var k=0;k<gridData.length;k+=4){
                expect(Number(gridData.data[k])).toEqual(30);
                expect(Number(gridData.data[k+1])).toEqual(127);
                expect(Number(gridData.data[k+2])).toEqual(255);
                expect(Number(gridData.data[k+3])).toEqual(255);
            }
        });
        button.click();
        browser.executeScript(function () {
            return document.getElementById('pixelGrid').getContext("2d").getImageData(0,0,100,100);
        }).then(function (gridData) {
            for(var k=0;k<gridData.length;k+=4){
                expect(Number(gridData.data[k])).toEqual(255);
                expect(Number(gridData.data[k+1])).toEqual(255);
                expect(Number(gridData.data[k+2])).toEqual(255);
                expect(Number(gridData.data[k+3])).toEqual(255);
            }
            done();
        });
    });
});


