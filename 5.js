function groupNumber(angka){
	let hasil = "";
	
	let x=angka.split(" ").join("");
	let temp = x.split("-").join("");
	let karakter="";
	let limit = 0;


	for(let i=1; i<=temp.length; i++){
		
		if(temp.length%3==0){
			if(i%3==0 && i!=temp.length){
				karakter=karakter+temp[limit]+"-";
			}else{
				karakter+=temp[limit];
			}
			
		}else{
			if(i%3==0 && i!=temp.length-1){
				karakter=karakter+temp[limit]+"-";
			}else if(i==temp.length-2){
				karakter=karakter+temp[limit]+"-";

			}else{
				karakter+=temp[limit];
			}	
		}

		limit++;
	}
  return karakter;
}

 console.log(groupNumber("9901-1 0231 1-021422"));