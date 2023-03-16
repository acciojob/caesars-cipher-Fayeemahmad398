// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q','E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y','M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G','U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	var encodedarr=encodedStr.split(" ");
	// spliting string to  string array
	for(let i=0;i<encodedarr.length;i++)
		{
			var encodedword=encodedarr[i];
			// accessing the indivisual word from string arr

			var decodedword="";
			
			for(let j=0;j<encodedword.length;j++)
				{
					var char=encodedword[j];
					var decodechar=lookup[char];
					decodedword+=decodechar;
				}
			decodedArr.push(decodedword);
			
		}
	
	
	

  return decodedArr.join(" ") ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
