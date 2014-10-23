var calculatorUI = {
	operatorClick: function(operatorName){
		var total = parseInt($('#calculatorInput').val());
		
		if(calculator.getTotal() === 0){
			$('#calculatorInput').val('');
			calculator.setTotal(total);
			calculator.setCurrentOperation(operatorName);
		}else{
			this.equalsClick();
		}
	},
	equalsClick: function(){
		var valueEntered = parseInt($('#calculatorInput').val());
		$('#calculatorInput').val(calculator.calculateTotal(valueEntered));
	},
	resetCalculator: function(){
		calculator.reset();
		$('#calculatorInput').val('');
	}
};

$(document).ready(function(){

	$('.operator').click(function(){
		calculatorUI.operatorClick($(this).prop('name'));
	});

	$('#equals').click(function(){
		calculatorUI.equalsClick();
	});

});
