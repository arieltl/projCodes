window.addEventListener("DOMContentLoaded",()=> {
    createData();
})

function createData(){
    if (!sessionStorage.getItem("agendamentos")){
        sessionStorage.setItem("agendamentos",JSON.stringify([
            {
                'name':'josé',
                'services': [0,1],
                'time': '11:30'
            },
            {
                'name':'Maria',
                'services': [2],
                'time': '14:00'
            },
            {
                'name':'Maria',
                'services': [0,3,4,5],
                'time': '15:30'
            },
        ]))
    }
    if (!sessionStorage.getItem("servicos")){
        sessionStorage.setItem("servicos",JSON.stringify(
            {
                0:'corte cabelo',
                1:'corte barba',
                2:'manicure',
                3:'pedicure',
                4:'escova',
                5:'maquiagem'
            }
        ))
    }
}