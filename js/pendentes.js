// Read sessionStorage
const serviceNames = JSON.parse(sessionStorage.getItem('servicos'))

window.addEventListener("DOMContentLoaded", () => {
    const appointments = JSON.parse(sessionStorage.getItem('listaespera'));
    const apList = document.querySelector('.atendimentos>ul')
    for (let appointment of appointments) {
        console.log(appointment)
        addAppointment(appointment, apList)
    }
})

function addAppointment({ name, services, time }, parent) {
    const apt = document.createElement('li');
    const nameElement = document.createElement('p')
    const servicesP = document.createElement('p')
    const timeP = document.createElement('p')
    const actionsDiv = document.createElement('div')
    const checkBtn = document.createElement('i')
    const removeBtn = document.createElement('i')
    
    checkBtn.classList.add("fas")
    checkBtn.classList.add("fa-check")
    checkBtn.classList.add("cell_item")

    removeBtn.classList.add("fas")
    removeBtn.classList.add("fa-times")
    removeBtn.classList.add("cell_item")

    actionsDiv.appendChild(checkBtn)
    actionsDiv.appendChild(removeBtn)
    checkBtn.addEventListener('click',(e)=>{
        e.stopPropagation()
        const apts = JSON.parse(sessionStorage.getItem("agendamentos"))
        const wait = JSON.parse(sessionStorage.getItem("listaespera"))
        console.log(apts)
        sessionStorage.setItem('listaespera',JSON.stringify(wait.filter((e)=>e.name!=name))) 
        sessionStorage.setItem('agendamentos',JSON.stringify(apts.concat(wait.filter((e)=>e.name==name))))  
        const li = e.target.parentNode.parentNode
        li.parentNode.removeChild(li)
    })
    console.log(name, services, time)

    // Set data
    nameElement.innerHTML = name
    timeP.innerHTML = time
    servicesP.innerHTML = (serviceNames[parseInt(services[0])]) + ((services.length > 1)? ", Outros" : "")

    // Handle name links
    apt.addEventListener("click", () => window.location.href = `confirmar-servico.html?name=${name}&services=${services}&time=${time}`)
    

    // Create the new element
    apt.appendChild(timeP)
    apt.appendChild(nameElement)
    // apt.appendChild(servicesP)
    apt.appendChild(actionsDiv)

    // Add to DOM
    parent.appendChild(apt)
}