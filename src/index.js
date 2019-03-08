// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result0 = {};
	let result = {H:0, Q:0, D:0, N:0, P:0};
	let result10 = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if (currency <= 0) {return result0;
	} else if (currency >= 10000) {return result10; 
	} else {
        const h = currency/50;
        const hm = currency%50;
        const hz = Math.floor(h);
	    result.H = hz;
	    if (hm === 0) {return result = {H:hz};}
	    if (hz === 0) {delete result.H;}
				
	    const q = hm/25;
	    const qm = hm%25;
	    const qz = Math.floor(q);
	    result.Q = qz;
		if (qm === 0) {
            delete result.D;
			delete result.N;
			delete result.P;
			return result;
        }
		if (qz === 0) {delete result.Q;}
				
		const d = qm/10;
		const dm = qm%10;
		const dz = Math.floor(d);
		result.D = dz;
		if (dm === 0) {
			delete result.N;
			delete result.P;
			return result;
		}
		if (dz === 0) {delete result.D;}
		
		const n = dm/5;
		const nm = dm%5;
		const nz = Math.floor(n);
		result.N = nz;
		if (nm === 0) {
			delete result.P;
			return result;
		}
		if (nz === 0) {delete result.N;}
		
		const p = currency - 50*hz - 25*qz - 10*dz - 5*nz;
		result.P = p;
		if (p === 0) {delete result.P;}
		return result;
	}
}
