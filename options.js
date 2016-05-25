function saveOptions(){
	localStorage.domains=document.getElementById("domains").value.replace(" ","").trim().split("\n")
	localStorage.MIMEtypes=document.getElementById("MIMEtypes").value.toLowerCase().replace(" ","").trim().split("\n")
}

document.getElementById('save').addEventListener('click',saveOptions)