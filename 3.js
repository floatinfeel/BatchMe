function triangle(angka){

	let display = "";
	if(isNaN(angka)||angka<1){
		display= "parameter harus angka dan positif";
	}else{

		for(let i=1; i<=angka; i++){
			for(let j=1; j<=i; j++){
				display+="#";

			}

			display+="\n";

		}


	}


	return display;

}

console.log(triangle(5));