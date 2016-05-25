function saveOptions(){
	var temp=document.getElementById("domains").value.trim().split("\n")
	console.log(temp)
	localStorage.domains=temp
}

document.getElementById('save').addEventListener('click',saveOptions)