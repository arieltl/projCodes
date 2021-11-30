// Read sessionStorage
const serviceNames = JSON.parse(sessionStorage.getItem('servicos'))

window.addEventListener("DOMContentLoaded", () => {
    const appointments = JSON.parse(sessionStorage.getItem('agendamentos'));
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

    // Let's log some stuff to check the function's invocation
    console.log(name, services, time)

    // Set data
    nameElement.innerHTML = name
    timeP.innerHTML = time
    servicesP.innerHTML = services.map((i) => serviceNames[i])

    // Handle name links
    apt.addEventListener("click", () => window.location.href = `../finalizar-servico.html?name=${name}&services=${services}&time=${time}`)

    // Create the new element
    apt.appendChild(nameElement)
    apt.appendChild(servicesP)
    apt.appendChild(timeP)

    // Add to DOM
    parent.appendChild(apt)
}