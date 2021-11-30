window.addEventListener("DOMContentLoaded", () => {
    createData();
})

function createData() {
    if (!sessionStorage.getItem("agendamentos")) {
        sessionStorage.setItem("agendamentos", JSON.stringify([{
                'name': 'José',
                'services': [0, 1],
                'time': '11:30'
            },
            {
                'name': 'Maria',
                'services': [2],
                'time': '14:00'
            },
            {
                'name': 'Juliana',
                'services': [0, 3, 4, 5],
                'time': '15:30'
            },
        ]))
    }
    if (!sessionStorage.getItem("servicos")) {
        sessionStorage.setItem("servicos", JSON.stringify({
            0: 'Corte de Cabelo',
            1: 'Corte Barba',
            2: 'Manicure',
            3: 'Pedicure',
            4: 'Escova',
            5: 'Maquiagem'
        }))
    }
}