/**
 * Created by Nick on 10/27/2016.
 */
describe('Conway:', function(){

    afterEach(function(done){
        conway.clear();
        done();
    });

    describe("add:", function(){
        it('single point should create 9 spaces, all of which are dead except the point I chose',function(done){
            conway.add(0,0);
            var expected = {
                "-1":{"-1":0,"0":0,"1":0},
                "0":{"-1":0,"0":1,"1":0},
                "1":{"-1":0,"0":0,"1":0}
            };
            var actual = conway.get();

            expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
            done();
        });

        it('two points, one space diagonal of each other should create five spaces and two should be alive', function(done){
            conway.add(0,0);
            conway.add(1,1);

            var expected = {
                "-1":{"-1":0,"0":0,"1":0},
                "0":{"-1":0,"0":1,"1":0,"2":0},
                "1":{"-1":0,"0":0,"1":1,"2":0},
                "2":{       "0":0,"1":0,"2":0}
            };
            var actual = conway.get();

            expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
            done();
        });
    });

    describe("propogate:", function(){
        afterEach(function(done){
            conway.clear();
            done();
        });

        it("Alive w/ 0 neighbors",function(done){
            conway.add(0,0);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Alive w/ 1 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Alive w/ 2 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            expect(conway.propogate(0+"",0+"")).toEqual(true);
            done();
        });
        it("Alive w/ 3 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            expect(conway.propogate(0+"",0+"")).toEqual(true);
            done();
        });
        it("Alive w/ 4 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Alive w/ 5 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Alive w/ 6 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            conway.add(1,-1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Alive w/ 7 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            conway.add(1,-1);
            conway.add(1,0);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Alive w/ 8 neighbors",function(done){
            conway.add(0,0);
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            conway.add(1,-1);
            conway.add(1,0);
            conway.add(1,1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });

        it("Dead w/ 0 neighbors",function(done){
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 1 neighbors",function(done){
            conway.add(-1,-1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 2 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 3 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            expect(conway.propogate(0+"",0+"")).toEqual(true);
            done();
        });
        it("Dead w/ 4 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 5 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 6 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            conway.add(1,-1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 7 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            conway.add(1,-1);
            conway.add(1,0);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
        it("Dead w/ 8 neighbors",function(done){
            conway.add(-1,-1);
            conway.add(-1,0);
            conway.add(-1,1);
            conway.add(0,-1);
            conway.add(0,1);
            conway.add(1,-1);
            conway.add(1,0);
            conway.add(1,1);
            expect(conway.propogate(0+"",0+"")).toEqual(false);
            done();
        });
    });

    describe('clear:', function(){
        it('clearing takes my population erases every trace of their existence', function(done){
            conway.add(0,0);
            var expected = {
                "-1":{"-1":0,"0":0,"1":0},
                "0":{"-1":0,"0":1,"1":0},
                "1":{"-1":0,"0":0,"1":0}
            };
            var actual = conway.get();
            expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
            conway.clear();
            expected = {};
            actual = conway.get();
            expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
            done();
        });
    });

    describe('step', function(){
        it('making a glider and stepping once moves it where I would expect it to be', function(done){
            conway.add(0,0);
            conway.add(0,1);
            conway.add(0,2);
            conway.add(1,2);
            conway.add(2,1);
            conway.step(function(lives){

            });
            var actual = conway.get();
            var expected = {
                "0":{"0":0,"1":1,"2":1,"3":0,"-1":0},
                "1":{"0":1,"1":0,"2":1,"3":0,"-1":0},
                "2":{"0":0,"1":0,"2":0,"3":0,"-1":0},
                "-1":{"0":0,"1":1,"2":0,"3":0},
                "-2":{"0":0,"1":0,"2":0}
            };
            expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
            done();
        });
    });
});