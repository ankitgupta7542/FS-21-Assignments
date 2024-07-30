let a = 10;
let b = 20;

function outer(){
    let c = 30;
    return function inner(){
        let d = 40;
        return {a,b,c,d};
    }
}

let result = outer();
result();