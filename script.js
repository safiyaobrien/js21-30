function countEvens(x){
    var y = 0;
    for(var i=0; i<x.length; i++){
        if(x[i]%2==0){
            y++;
        }
    }
    return y;
}

function countHi(x){
    var y = 0;
    for(var i=0; i<x.length; i++){
        if((x.substring(i, i+1) == "h") && (x.substring(i+1, i+2) == "i")){
            y++;
        }
    }
    return y;
}

function no14(x){
    var y = 0;
    var z = 0;
    for(var i=0; i<x.length; i++){
        if(x[i] == 1){
            y++;
        }
        if(x[i] == 4){
            z++;
        }
    }
    if(y>0 && z>0){
        return false;
    }
    return true;
}

function either24(x){
    var y = 0;
    var z = 0;
    for(var i=0; i<x.length; i++){
        if(x[i]==2 && x[i+1]==2){
            y++
        }
        if(x[i]==4 && x[i+1]==4){
            z++;
        }
    }
    if(y>0 && z==0){
        return true;
    }
    if(z>0 && y==0){
        return true;
    }
    if(y>0 && z>0){
        return false;
    }
    return false;
}

function makeChocolate(small, big, goal){
    var smaller = goal-big*5;
    var x = 1;
    while(smaller<0){
        smaller=goal-(big-x)*5;
        x++;
    }
    if(smaller>small){
        return -1;
    }
    if(smaller>=0){
        return smaller;
    }
}

function luckySum(a,b,c){
    if(a==13){
        return 0;
    }
    if(b==13){
        return a;
    }
    if(c==13){
        return a +b;
    }
    return a+b+c;
}

function maxBlock(x){
    var y=1;
    var z=0;
    for(var i=0; i<x.length; i++){
        if(x.substring(i,i+1)==x.substring(i+1,i+2)){
            y++
        }else{
            if(y>z){
                z=y;
            }
            y=1;
        }
    }
    return z;
}

function linearIn(inner, outer){
    var x= 0;
    var z = 0;
    for(var i=0; i<outer.length; i++){
        x=outer[i];
        for(var b=0; b<inner.length; b++){
            if(x==inner[b]){
                z++
                break;
            }
        }
    }
    if(z==outer.length){
        return true;
    }
    return false;
}

function countTriple(x){
    var z = 0;
    for(var i=0; i<x.length; i++){
        if(x.substring(i,i+1)==x.substring(i+1, i+2)&& x.substring(i,i+1)==x.substring(i+2,i+3)){
            z++;
        }
    }
    return z;
}

function sameEnds(x){
    var first="";
    var second="";
    if(x.length%2==0){
        first=x.substring(0,x.length/2);
        second=x.substring(x.length/2, x.length);
    }else{
        first=x.substring(0,x.length/2 +0.5);
        second=x.substring(x.length/2+ 0.5, x.length);
    }
    var z=0;
    for(var i=0; i<second.length; i++){
        if(second.substring(i,i+1)==first.substring(0,1)){
            z=0;
            for(var b=i;b<second.length;b++){
                if(second.substring(b,b+1)==first.substring(z,z+1)){

                }else{
                    break;
                }
                z++;
                if(b==second.length-1){
                    return first.substring(0,z);
                }
            }
        }
    }
    return "";
}

function tester(){
    document.getElementById("countEvens").innerHTML += countEvens(2,1,2,3,4);
    document.getElementById("countHi").innerHTML += countHi('ABChi hi');
    document.getElementById("no14").innerHTML += no14(1,2,3,4);
    document.getElementById("either24").innerHTML += either24(4,4,1,2,2);
    document.getElementById("makeChocolate").innerHTML += makeChocolate(4,1,9);
    document.getElementById("luckySum").innerHTML += luckySum(1,2,13);
    document.getElementById("maxBlock").innerHTML += maxBlock('hoopla');
    document.getElementById("linearIn").innerHTML += linearIn([1,2,4,6], [2,4]);
    document.getElementById("countTriple").innerHTML += countTriple('XXXabc');
    document.getElementById("sameEnds").innerHTML += sameEnds('xxx');
}