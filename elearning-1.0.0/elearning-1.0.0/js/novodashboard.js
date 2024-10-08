// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 18, 6, 14, 20, 31],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#9799ab'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  },
  yaxis: {
    title: {
      text: 'Medições',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// Dados fictícios para os anos
const data = {
  '2005': [12, 24, 36, 48, 60, 72, 84, 36, 48, 60, 72, 84],
  '2006': [15, 30, 45, 60, 75, 90, 100, 36, 48, 60, 72, 84],
  '2007': [10, 20, 30, 40, 50, 60, 70, 36, 48, 60, 72, 84],
  '2008': [20, 40, 60, 80, 100, 90, 70, 36, 48, 60, 72, 84],
  '2009': [25, 35, 45, 55, 65, 75, 85, 36, 48, 60, 72, 84],
  '2010': [5, 15, 25, 35, 45, 55, 65, 36, 48, 60, 72, 84],
  '2011': [30, 40, 50, 60, 70, 80, 90, 36, 48, 60, 72, 84],
  '2012': [12, 24, 18, 36, 48, 60, 72, 36, 48, 60, 72, 84],
  '2013': [22, 33, 44, 55, 66, 77, 88, 36, 48, 60, 72, 84],
  '2014': [50, 40, 30, 20, 10, 20, 30, 36, 48, 60, 72, 84],
  '2015': [60, 70, 80, 90, 100, 90, 80, 36, 48, 60, 72, 84],
  '2016': [40, 50, 60, 70, 80, 90, 100, 36, 48, 60, 72, 84],
  '2017': [35, 45, 55, 65, 75, 85, 95, 36, 48, 60, 72, 84],
  '2018': [20, 40, 30, 50, 40, 60, 70, 36, 48, 60, 72, 84],
  '2019': [25, 50, 75, 50, 25, 50, 75, 36, 48, 60, 72, 84],
  '2020': [10, 30, 50, 70, 90, 70, 50, 36, 48, 60, 72, 84],
  '2021': [15, 35, 55, 75, 95, 80, 65, 36, 48, 60, 72, 84],
  '2022': [70, 60, 50, 40, 30, 20, 10, 36, 48, 60, 72, 84],
  '2023': [181, 218, 267, 284, 282, 247, 250, 385, 383, 351, 399, 220], 
  '2024': [25, 40, 55, 70, 85, 100, 90, 36, 48, 60, 72, 84],
};

// Lista de meses
const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

// Função para preencher os selects de ano
function populateYearSelects() {
  const yearSelect1 = document.getElementById('year-select-1');
  const yearSelect2 = document.getElementById('year-select-2');
  const currentYear = new Date().getFullYear();

  for (let year = 2005; year <= currentYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect1.appendChild(option);
  }

  for (let year = currentYear; year <= 2024; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect2.appendChild(option);
  }
}

// Função para atualizar o gráfico com base nos anos selecionados
function updateChart() {
  const selectedYear1 = document.getElementById('year-select-1').value;
  const selectedYear2 = document.getElementById('year-select-2').value;

  // Preparar os dados para o gráfico
  const seriesData = [
    {
      name: selectedYear1, // Atualiza o nome com o ano selecionado
      data: data[selectedYear1] || []
    },
    {
      name: selectedYear2, // Atualiza o nome com o ano selecionado
      data: data[selectedYear2] || []
    }
  ];

  // Atualizar o gráfico de área
  areaChart.updateOptions({
    series: seriesData,
    xaxis: {
      categories: meses // Usar a lista de meses fixa
    },
    yaxis: [
      {
        title: {
          text: selectedYear1, // Atualiza o título do eixo Y para o ano 1
        },
      },
      {
        opposite: true,
        title: {
          text: selectedYear2, // Atualiza o título do eixo Y para o ano 2
        },
      },
    ],
  });
}

// Configuração do gráfico de área
const areaChartOptions = {
  series: [
    {
      name: 'Ano 1',
      data: data['2023'] || [],
    },
    {
      name: 'Ano 2',
      data: data['2024'] || [],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: meses,
  },
  yaxis: [
    {
      title: {
        text: 'Ano 1', // Título padrão que será atualizado
      },
    },
    {
      opposite: true,
      title: {
        text: 'Ano 2', // Título padrão que será atualizado
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

// Inicialize o gráfico de área
const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Adicionar eventos ao select
document.getElementById('year-select-1').addEventListener('change', updateChart);
document.getElementById('year-select-2').addEventListener('change', updateChart);

// Chamar a função para preencher os selects ao carregar a página
populateYearSelects();


// Configuração do gráfico de volume
const volumeChartOptions = {
  series: [
    {
      name: 'M³',
      data: [120, 150, 180, 220, 170, 200, 250, 300, 280, 320, 310, 290, 220, 170, 200, 250, 300, 280, 320, 310, 290], // Exemplo de dados
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#4085BE'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [
      '01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', 
      '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', 
      '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan', '19 Jan', '20 Jan', '21 Jan'
    ],
    title: {
      text: 'Data de Coleta',
    },
  },
  yaxis: {
    title: {
      text: 'M³',
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

// Renderizar o gráfico de volume
const volumeChart = new ApexCharts(
  document.querySelector('#volume-chart'),
  volumeChartOptions
);
volumeChart.render();


// Função para filtrar os dados da lista
function filterData() {
  const query = document.querySelector('.search-input').value.toLowerCase();
  const items = document.querySelectorAll('#data-list li');
  
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
  
  // Mostrar a lista se houver resultados
  document.getElementById('data-list').style.display = query ? 'block' : 'none';
}

// Função para atualizar o título
function updateTitle(newTitle) {
  document.querySelector('.main-title p').textContent = newTitle;
}

// Adicionar eventos ao campo de pesquisa
document.querySelector('.search-input').addEventListener('input', filterData);

// Adicionar evento ao clique na lista de dados
document.querySelectorAll('#data-list li').forEach(item => {
  item.addEventListener('click', function() {
    updateTitle(this.textContent);
    document.querySelector('.search-input').value = ''; // Limpar campo de pesquisa
    document.getElementById('data-list').style.display = 'none'; // Ocultar lista
  });
});

