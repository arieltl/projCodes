// Read sessionStorage
const serviceNames = JSON.parse(sessionStorage.getItem('servicos'))

// Let's read QueryParameters
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// If Params weren't passed we should show an error
if (params.name == null || params.services == null || params.time == null) {
    alert("Houve um erro. Por-favor volte para o calendário e tente novamente")
}

// Create <li>
params.services.split(',').forEach((service) => {
    const liService = document.createElement('li')
    liService.innerHTML = serviceNames[service]

    document.querySelector("#servicesul").appendChild(liService)
})

// Fill in the blanks
document.querySelector("#clientname").innerHTML = params.name
document.querySelector("#clienttime").innerHTML = params.time
document.querySelector("#clientname").innerHTML = params.name

document.querySelector(".fa-check").addEventListener("click",() => {
    const apts = JSON.parse(sessionStorage.getItem("agendamentos"))
    const wait = JSON.parse(sessionStorage.getItem("listaespera"))
    console.log(apts)
    sessionStorage.setItem('listaespera',JSON.stringify(wait.filter((e)=>e.name!=params.name))) 
    sessionStorage.setItem('agendamentos',JSON.stringify(apts.concat(wait.filter((e)=>e.name==params.name))))  
    
    window.history.back()
})