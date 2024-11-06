//Gráfico de Pizza 1
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim' , 'Não' , 'Não sei' ],
        datasets: [{
            label: 'Porcentagem de alunos',
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
                text: '1 - Você pretende realizar algum curso de graduação de alguma faculdade/universidade?'
            }
        } 
        
    }
});
//Gráfico de Pizza 2
const ctxBanana = document.getElementById('graficoBanana').getContext('2d');
const graficoBanana = new Chart(ctxBanana, {
    type: 'pie',
    data: {
        labels: ['Federal', 'Estadual', 'Paticular'],
        datasets: [{
            label: 'Porcentagem de alunos',
            data: [37, 27, 36],
            backgroundColor: [
		 '#f05454', '#30475E', '#DDDDDD', '#222831',
			],
            borderColor: '#30475E',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
             title: {
                display: true,
                text: '2 - Caso tenha interesse, que tipo de instituição tentará ingressar?'
            }
        } 
        
    }
});

//Gráfico de Pizza 3
const ctxWailmer = document.getElementById('graficoWailmer').getContext('2d');
const graficoWailmer = new Chart(ctxWailmer, {
    type: 'pie',
    data: {
        labels: ['Sim' , 'Não' , 'Talvez' , 'Temporariamente'  ],
        datasets: [{
            label: 'Porcentagem de alunos',
            data: [55, 18, 23, 4],
            backgroundColor: [
                '#f05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 3
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
                text: '3 - Você quer sair do país, estado ou cidade?'
            }
        } 
        
    }
});



//Gráfico de Pizza 4
const ctxCoringa = document.getElementById('graficoCoringa').getContext('2d');
const graficoCoringa = new Chart(ctxCoringa, {
    type: 'pie',
    data: {
        labels: ['Sim' , 'Não' , 'Talvez' ],
        datasets: [{
            label: 'Porcentagem de alunos',
            data: [55, 36, 9],
            backgroundColor: [
                '#f05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 4
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
                text: '5 - Você pretende começar uma família?'
            }
        } 
        
    }
});