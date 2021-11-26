
const serviceNames = JSON.parse(sessionStorage.getItem('servicos'))
window.addEventListener("DOMContentLoaded",()=> {
    const appointments = JSON.parse(sessionStorage.getItem('agendamentos'));
    const apList = document.querySelector('.atendimentos>ul')
    for (let appointment of appointments){
        console.log(appointment)
        addAppointment(appointment,apList)
    }



    
})
function addAppointment({name,services,time},parent){
    console.log(name)
    const apt = document.createElement('li');
    const nameA = document.createElement('a')
    nameA.innerHTML = name
    apt.appendChild(nameA)
    const servicesP = document.createElement('p')
    servicesP.innerHTML = services.map((i)=>serviceNames[i])
    apt.appendChild(servicesP)
    const timeP = document.createElement('p')
    timeP.innerHTML = time
    apt.appendChild(timeP)
    parent.appendChild(apt)
}

