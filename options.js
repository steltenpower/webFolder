function saveOptions(){
	localStorage.domains=document.getElementById("domains").value.trim().split("\n")
	localStorage.MIMEtypes=document.getElementById("MIMEtypes").toLowerCase().value.trim().split("\n")
}

document.getElementById('save').addEventListener('click',saveOptions)