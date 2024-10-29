//Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Facebook' , 'Instagram' , 'Twitter' , 'LinkedIn' ],
        datasets: [{
            label: 'Participação das redes sociais',
            data: [45, 30, 15, 10],
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
                text: 'Participação nas Redes Sociais'
            }
        } 
        
    }
});
//Gráfico de Pizza 2
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Facebook' , 'Instagram' , 'Twitter' , 'LinkedIn' ],
        datasets: [{
            label: 'Participação das redes sociais',
            data: [45, 30, 15, 10],
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
                text: 'Participação nas Redes Sociais'
            }
        } 
        
    }
});
//Gráfico de barras
const ctxBarra = document.getElementById('graficoBarra').getContext('2d');
const graficoBarra = new Chart(ctxBarra, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Usuários ativos (em milhões)',
            data: [2800, 1500, 330, 810],
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
                text: 'Usuários Ativos nas Redes Sociais (milhões)'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
