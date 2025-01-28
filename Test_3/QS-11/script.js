function createCounter(){
    let counter = 0;
    return{
        incriment: function(){
            counter++;
        },
        decriment: function(){
            counter--;
        },
        getCounter: function(){
            return counter;
        }
    }
}

const counter = createCounter();
counter.incriment();
counter.incriment();
counter.incriment();
counter.decriment();
console.log(counter.getCounter());