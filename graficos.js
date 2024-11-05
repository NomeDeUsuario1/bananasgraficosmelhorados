//Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim' , 'Não' , 'Não sei' ],
        datasets: [{
            label: '1 - Você pretende, no futuro próximo, realizar algum curso de graduação de alguma faculdade/universidade?',
            data: [82, 14, 4],
            backgroundColor: [
                '#f05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options:{
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: '1 - Você pretende, no futuro próximo, realizar algum curso de graduação de alguma faculdade/universidade?'
            }
        } 
        
    }
});
//Gráfico de barras
const ctxBarra = document.getElementById('graficoBarra').getContext('2d');
const graficoBarra = new Chart(ctxBarra, {
    type: 'bar',
    data: {
        labels: ['Federal', 'Estadual', 'Paticular'],
        datasets: [{
            label: '2 - Caso tenha interesse, que tipo de instituição tentará ingressar?',
            data: [37, 27, 36],
            backgroundColor: '#F05454',
            borderColor: '#30475E',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '2 - Caso tenha interesse, que tipo de instituição tentará ingressar?'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim' , 'Não' , 'Talvez' , 'Temporariamente'  ],
        datasets: [{
            label: '3 - Você quer sair do país, estado ou cidade?',
            data: [],
            backgroundColor: [
                '#f05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options:{
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: '1 - Você pretende, no futuro próximo, realizar algum curso de graduação de alguma faculdade/universidade?'
            }
        } 
        
    }
});