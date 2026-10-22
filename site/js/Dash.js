// Variavel para todos os graficos
  const labels = ['20/10', '21/10', '22/10', '23/10', '24/10', '25/10', '26/10'];

// Grafico Linha para porcentagem dos silos
  const ctx_evolucao = document.getElementById('Evolucao'); 
  const LIMITE_CRITICO = 90;
  new Chart(ctx_evolucao, {
    type: 'line',
    data: {    
      labels: labels,
      datasets: [{
        label: 'Silo 1',
        data: [20, 35, 40, 47, 50, 70, 73],
        borderWidth: 1,
        borderColor: '#D9A02B',
        backgroundColor: '#D9A02B'
      }, 
    {
        label: 'Silo 2',
        data: [15, 30, 45, 55, 68, 80, 93],
        borderWidth: 1,
        borderColor: '#6B8F71',
        backgroundColor: '#6B8F71'
    },
    {
        label: 'Silo 3',
        data: [7, 14, 21, 28, 35, 42, 47],
        borderWidth: 1,
        borderColor: '#B83A2E',
        backgroundColor: '#B83A2E'
    }, {
       label: 'Ponto crítico',
        data: labels.map(() => LIMITE_CRITICO),
        borderColor: '#FF0000',
        borderWidth: 2,
        borderDash: [6, 6],
        pointRadius: 0
    }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
      legend: {
        labels: {
          filter: item => item.text !== 'Ponto crítico'
        }
      }
    },
      scales: { x:{
            title: {
            display: true,
            text: 'Dias'
            },
            beginAtZero: true
        },
        y: {
            title: {
            display: true,
            text: '% do silos'
            },
          max: 100,
          beginAtZero: true
        }
      }
    }
  });

// Grafico para falar a quantidade de Grãos que entram e Sai
  const ctx_EntrarSair = document.getElementById('EntrarSair');
  new Chart(ctx_EntrarSair, {
    type: 'bar',
    data: {    
      labels: labels,
      datasets: [{
        label: 'Entrada',
        data: [20, 35, 40, 47, 50, 70, 73],
        borderWidth: 1,
        borderColor: '#244A36',
        backgroundColor: '#244A36'
      }, 
    {
        label: 'Saida',
        data: [5, 10, 12, 22, 9, 18, 30],
        borderWidth: 1,
        borderColor: '#D9A02B',
        backgroundColor: '#D9A02B'
    }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
      legend: {
        labels: {
          filter: item => item.text !== 'Ponto crítico'
        }
      }
    },
      scales: {
        x:{
            title: {
            display: true,
            text: 'Dias'
            },
            beginAtZero: true
        }, 
        y: {
          title: {
            display: true,
            text: 'Quantidade Grãos(T)'
          }, 
          beginAtZero: true
        }
      }
    }
  });
