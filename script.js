function getFormvalue() {
    //Write your code here
	let f = document.getElementsByName("fname");
	let l = document.getElementsByName("lname");
	let res=f[0].value +" "+ l[0].value;

	alert(res);
}
