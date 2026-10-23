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

  const entradaPorSilo = [
  [20, 35, 40, 47, 50, 70, 73],  
  [15, 30, 45, 55, 68, 80, 93],  
  [7, 14, 21, 28, 35, 42, 47]    
  ];

  const saidaPorSilo = [
  [5, 10, 12, 22, 9, 18, 30],    
  [4, 8, 15, 20, 25, 30, 22],    
  [2, 5, 8, 10, 12, 15, 18]      
  ];

  const selectEntrarSair = document.getElementById('Silos_EntrarSair');
  
  const ctx_EntrarSair = document.getElementById('EntrarSair');
  const graficoEntrarSair = new Chart(ctx_EntrarSair, {
    type: 'bar',
    data: {    
      labels: labels,
      datasets: [{
        label: 'Entrada',
        data: entradaPorSilo[0],
        borderWidth: 1,
        borderColor: '#244A36',
        backgroundColor: '#244A36'
      }, 
    {
        label: 'Saida',
        data: saidaPorSilo[0],
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

  function atualizarGraficoEntrarSair() {
  const posicao = selectEntrarSair.value;
  graficoEntrarSair.data.datasets[0].data = entradaPorSilo[posicao];
  graficoEntrarSair.data.datasets[1].data = saidaPorSilo[posicao];
  graficoEntrarSair.update();
}

  selectEntrarSair.addEventListener('change', atualizarGraficoEntrarSair);


// Silo interagindo com a porcentagem
let nomes       = ["Silo 1 - Soja", "Silo 2 - Milho", "Silo 3 - Arroz"];
let capacidades = [2000, 1500, 1000];    
let armazenados = [1450, 1390, 470];      
let precoSaca   = [160.14, 70.93, 79.07]; 
let pesoSaca    = [60, 60, 50];  

let select    = document.getElementById("Silos_SiloIndividual");
let siloNivel = document.getElementById("siloNivel");
let siloNome  = document.getElementById("siloNome");
let siloStatus = document.getElementById("siloStatus");
let siloPct   = document.getElementById("siloPct");
let siloCap   = document.getElementById("siloCap");
let siloArm   = document.getElementById("siloArm");
let siloValor = document.getElementById("siloValor");


function atualizarSilo() {
  let posicao = select.value;

  let nome = nomes[posicao];
  let capacidade = capacidades[posicao];
  let armazenado = armazenados[posicao];

  let porcentagem = (armazenado / capacidade) * 100;
  let kg    = armazenado * 1000;
  let sacas = kg / pesoSaca[posicao];
  let valor = sacas * precoSaca[posicao];

  let cor = "";
  let status = "";

  if (porcentagem >= 90) {
    cor = "#B83A2E";      
    status = "Crítico";
  } else if (porcentagem >= 80) {
    cor = "#D9A02B";      
    status = "Atenção";
  } else {
    cor = "#6B8F71";      
    status = "Operacional";
  }

  siloNome.innerHTML   = nome;
  siloStatus.innerHTML = status;
  siloPct.innerHTML    = porcentagem.toFixed(0) + "%";
  siloCap.innerHTML    = capacidade + " t";
  siloArm.innerHTML    = armazenado + " t";
  siloValor.innerHTML  = "R$ " + valor.toFixed(2);

  siloNivel.style.height = porcentagem + "%";
  siloNivel.style.backgroundColor = cor;
}

select.addEventListener("change", atualizarSilo);

atualizarSilo();