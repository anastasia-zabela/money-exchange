// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let result = {H:0, Q:0, D:0, N:0, P:0};
	if (currency <= 0) {return {};
	} else if (currency >= 10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
	} else {
        
        let countCurrency = Math.floor(currency/50);
		result.H = countCurrency;
		let remainderCurrency = currency%50;
		
	    countCurrency = Math.floor(remainderCurrency/25);
		result.Q = countCurrency;
		remainderCurrency %= 25;
				
		countCurrency = Math.floor(remainderCurrency/10);
		result.D = countCurrency;
		remainderCurrency %= 10;
		
		countCurrency = Math.floor(remainderCurrency/5);
		result.N = countCurrency;
		remainderCurrency %= 5;
		
		result.P = remainderCurrency;

		for (let key in result) {
			if (result[key] === 0) {
				delete result[key];
			}
		}
		
		return result;
	}
}
