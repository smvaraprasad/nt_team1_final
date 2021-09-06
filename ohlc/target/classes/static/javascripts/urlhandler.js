/**
 * 
 */



function processURl()
{
	var st="http://localhost:8085/stocks/"+document.getElementById("symbol").value + "/"+document.getElementById("start").value + "/"+
	document.getElementById("end").value ;
	
	console.log(document.getElementById("start"));
	
	
	return st;
	
}
	


