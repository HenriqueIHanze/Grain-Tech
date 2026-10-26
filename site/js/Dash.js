// Variavel para todos os graficos
const labels = ['20/10', '21/10', '22/10', '23/10', '24/10', '25/10', '26/10'];

// Formatador para visualização pt-br
formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
// Grafico Linha para porcentagem dos silos
const ctx_evolucao = document.getElementById('Evolucao');
const LIMITE_CRITICO = 90;
let silo_1 = [20, 35, 40, 47, 50, 70, 73];
let silo_2 = [15, 30, 45, 55, 68, 80, 93];
let silo_3 = [7, 14, 21, 28, 35, 42, 47];
new Chart(ctx_evolucao, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Silo 1',
      data: silo_1,
      borderWidth: 1,
      borderColor: '#D9A02B',
      backgroundColor: '#D9A02B'
    },
    {
      label: 'Silo 2',
      data: silo_2,
      borderWidth: 1,
      borderColor: '#6B8F71',
      backgroundColor: '#6B8F71'
    },
    {
      label: 'Silo 3',
      data: silo_3,
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
    scales: {
      x: {
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
      x: {
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
let nomes = ["Silo 1 - Soja", "Silo 2 - Milho", "Silo 3 - Arroz"];
let capacidades = [2000, 1500, 1000];
let capacidade_total = 0;
let armazenados = [1450, 1390, 470];
let armazenado_total = 0;
let precoSaca = [160.14, 70.93, 79.07];
let pesoSaca = [60, 60, 50];
let valor_Total = 0;
let media_silos_UltimaLeitura = (silo_1[silo_1.length - 1] + silo_2[silo_2.length - 1] + silo_3[silo_3.length - 1]) / 3;
let media_silos_Leitura_SemanaPassada = (silo_1[0] + silo_2[0] + silo_3[0]) / 3;

for (let contador = 0; contador < pesoSaca.length; contador++) {
  let kg = armazenados[contador] * 1000;
  valor_Total += (kg / pesoSaca[contador]) * precoSaca[contador];
}

for (let contador = 0; contador < capacidades.length; contador++) {
  capacidade_total += capacidades[contador];
}

for (let contador = 0; contador < armazenados.length; contador++) {
  armazenado_total += armazenados[contador];
}

let select = document.getElementById("Silos_SiloIndividual");
let siloNivel = document.getElementById("siloNivel");
let siloNome = document.getElementById("siloNome");
let siloStatus = document.getElementById("siloStatus");
let siloPct = document.getElementById("siloPct");
let siloCap = document.getElementById("siloCap");
let siloArm = document.getElementById("siloArm");
let siloValor = document.getElementById("siloValor");


function atualizarSilo() {
  let posicao = select.value;

  let nome = nomes[posicao];
  let capacidade = capacidades[posicao];
  let armazenado = armazenados[posicao];

  let porcentagem = (armazenado / capacidade) * 100;
  let porcentagemTotal = (armazenado_total / capacidade_total) * 100
  let kg = armazenado * 1000;
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

  MediaAtual.innerHTML = media_silos_UltimaLeitura + '%';
  diferenca_leituras.innerHTML = media_silos_UltimaLeitura - media_silos_Leitura_SemanaPassada;
  leitura_passada.innerHTML = media_silos_Leitura_SemanaPassada
  ValorTotal.innerHTML = formatador.format(valor_Total);
  ArmazenadoT.innerHTML = armazenado_total;
  CapacidadeT.innerHTML = capacidade_total;
  CapacidadeT.innerHTML += ` (${porcentagemTotal.toFixed(0)}% oculpado)`;
  siloNome.innerHTML = nome;
  siloStatus.innerHTML = status;
  siloPct.innerHTML = porcentagem.toFixed(0) + "%";
  siloCap.innerHTML = capacidade + " t";
  siloArm.innerHTML = armazenado + " t";
  siloValor.innerHTML = formatador.format(valor);

  siloNivel.style.height = porcentagem + "%";
  siloNivel.style.backgroundColor = cor;
}

select.addEventListener("change", atualizarSilo);

atualizarSilo();