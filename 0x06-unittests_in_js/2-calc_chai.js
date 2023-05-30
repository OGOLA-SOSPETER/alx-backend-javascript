function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
	if (type == "SUM"){
		return an + bn
	}
	if (type == "SUBTRACT"){
		return an - bn
	}
	if (type == "DIVIDE"){
		if (bn == 0){
			return "Error"
		}
		return an / bn
	}
}

module.exports = calculateNumber;
