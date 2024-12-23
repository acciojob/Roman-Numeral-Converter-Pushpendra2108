function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	
  let result = "";

  // Loop through the obj array
  for (const [symbol, value] of Object.values(obj)) {
    while (num >= value) {
      result += symbol; 
      num -= value;     
    }
  }

  return result;
}

// console.log(convertToRoman(36));

module.exports = convertToRoman