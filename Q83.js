//write a function that create three functions in first value increase and decrase and value will reset
var createCounter = function(init) {
 let current  = init
    return {
        increment: function(){
            current += 1
        return  current
        
    },
        decrement : function(){
            current -= 1
            return  current 
        },
   reset : function(){
    current = init
        return current
            
        }
    }
    
};
const counter = createCounter(5);
 console.log(counter.increment()); // 6

 console.log (counter.reset()); // 5
console.log(counter.decrement()); // 4
