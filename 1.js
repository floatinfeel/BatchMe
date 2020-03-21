function bio(nama, umur){
	let bio={};

	bio.nama=nama;
	bio.umur=umur;
	bio.address='Jl.Kp Kelapa';
	bio.hobbies=['Menulis puisi', 'Membaca Artikel', 'Bermain game online'];
	bio.is_married=false;
	bio.list_school=[{name: 'MI Sulamul Huda', year_in: 2005, year_out: 2011, majority: null}, {name: 'SMP Wira Buana', year_in: 2011, year_out: 2014, majority: null}, {name: 'SMK Wira Buana 2', year_in: 2014, year_out:2017, majority: 'RPL'}];

	return bio;
}

console.log(bio('Dandi Husni',20));