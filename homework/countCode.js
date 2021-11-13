/* funktsioon mis loeb kokku mitu kindla algustähega koodi seal array's on. 
Näiteks soovime lugeda kokku kõik "T" tähega algavad koodid array sees käivitame funktsiooni countCode("T"). 
Funktsioon countCode(letter) tuleb teil ise kirjutada. */

const data = ["FWmcfgAWxe", "KnFJXGcACq", "cCYApSPiX0", "iHwbq2giBx", "X5Ebl6sjLf",
			"Rxc2oFCgI4", "jFtFONF7NK", "b8iIhVOJl6", "aGlxlytbic", "30e8YSgLzd", "0oj65bHiHZ",
			"NtykZPC0DH", "qgj6THRgT0", "rFM7G7SJbB", "lcu5UKrj7w", "xurxryxn5u", "7XDXFJ8Axh",
			"RuQU6EeJyi", "go3SD5CYYT", "c8sOoXTa59", "Vh0QfTkdKk", "rrYBTg4sWc", "CmeWiA73ig",
			"iM8MD2IXle", "SQk4WlTLiE", "wn3JhYo93i", "Hlh1Amt1jo", "Rd6hiOekcE", "LMKIBsBBmQ",
			"nb72pL5LKQ", "8GufbXPMRb", "OO5OnLzsdP", "hLddf4izXl", "6x8suntNs6", "8VATvVOQZR",
			"jxL8zSOcZN", "87YqnuB6Mc", "qr1WbVsWv", "fLC17MbW59", "tJ6Z5r6mDd", "iiEffxACk7",
			"C6w4k9AS2N", "9rQTNM8xmG", "x4JQLDr6hd", "3bYXSm7Zgo", "phTYCmMxOW", "isl31Fd0SN",
			"CZItvlfdqW"];
function countCode(upperFirstLetter){
	//const result = friends.map(([v])=> v);
       	//console.log(result);        
    	let result;
	let counter = 0;
	for (let element of data) {
		let firstLetter = element.charAt(0);
		if (upperFirstLetter == firstLetter) { 
			result = firstLetter;
			counter++;
		}
	} console.log("Täht - " + result + " Mitu korda esineb seda tähte - " + counter);
	return counter;
}

