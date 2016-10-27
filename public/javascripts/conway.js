/**
 * Created by Nick on 10/26/2016.
 */
function Conway(){
    this.population = {};
}


Conway.prototype.get = function(){
    return this.population;
};


Conway.prototype.add = function(x,y){
    for(var i=-1;i<2;i++){
        var xt = x+i;
        if(!this.population[xt+""]) this.population[xt+""] = {};
        for(var j=-1;j<2;j++){
            var yt = y+j;
            if(!this.population[xt+""][yt+""]) this.population[xt+""][yt+""] = 0;
            else this.population[xt+""][yt+""] = 1;
        }
    }
    if(!this.population[x+""][y+""])this.population[x+""][y+""] = 1;
    else this.population[x+""][y+""] = 0;
};


Conway.prototype.propogate = function(x,y){
    var isAlive;
    if(!this.population[x+""]) isAlive = 1;
    else isAlive = this.population[x+""][y+""];
    var neighbors = 0;
    x = Number(x);
    y = Number(y);
    for(var i=-1; i<2; i++){
        for(var j =-1; j<2; j++){
            var xt = x+i, yt = y+j;
            if(this.population[xt+""] != undefined &&
               this.population[xt+""][yt+""] == 1 &&
                !(i==0 && j ==0)
            ){
                neighbors++;
            }
        }
    }
    return neighbors==3 || (neighbors==2 && isAlive == 1);
};


Conway.prototype.clear = function(){
    this.population = {};
};


Conway.prototype.step = function(callBack){
    var nextGen = [];
    var con = this;
    Object.keys(con.population).forEach(function(x){
        Object.keys(con.population[x]).forEach(function(y){
            if(con.propogate(x,y)){
                nextGen.push({x:x,y:y});
            }
        });
    });
    this.clear();
    for(var i=0; i< nextGen.length; i++){
        this.add(Number(nextGen[i].x),Number(nextGen[i].y));
    }
    callBack(nextGen);
};


var conway = new Conway();