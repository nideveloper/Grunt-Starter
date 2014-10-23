var calculator = (function() {
    // your module code goes here
    var total = 0 ;
    var currentOperation;

    return {
        add:function(value1, value2) {
        	if(typeof value2 === 'undefined'){
        		total += value1;
        	}else{
        		total = value1 + value2;
        	}
            return total;
        },
        subtract:function(value1, value2) {
        	if(typeof value2 === 'undefined'){
        		total -= value1;
        	}else{
        		total = value1 - value2;
        	}
            return total;
        },
        multiply: function(value1, value2){
        	if(typeof value2 === 'undefined'){
        		total *= value1;
        	}else{
        		total = value1 * value2;
        	}
            return total;
        },
        divide: function(value1, value2){
        	if(typeof value2 === 'undefined'){
        		total /= value1;
        	}else{
        		total = value1 / value2;
        	}
            return total;
        },
        setCurrentOperation: function(operation){
        	currentOperation = this[operation];
        },
        calculateTotal: function(value){
        	return currentOperation(value);
        },
        setTotal:function(value){
        	total = value;
        	return true;
        },
        getTotal:function(){
        	return total;
        },
        reset:function() {
        	total = 0;
            return true;    
        }  
    };   
}());