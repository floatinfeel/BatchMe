function longest(kalimat){
	let display="";
	let kwara= kalimat.replace("!","");

	let kata=kwara.split(" ");
	
	let angkah=0;
	let highest=0;

	for(let i=0; i<kata.length; i++){
	
		

		if(kata[i].length>highest){
			highest=kata[i].length;
			display=kata[i];
		}
				

	}

	return display;

}

console.log(longest("Baju ini sangat bagus sekali!"));