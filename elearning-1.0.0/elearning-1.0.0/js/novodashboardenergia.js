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
  '2005': [12, 24, 36, 48, 60, 72, 84],
  '2006': [15, 30, 45, 60, 75, 90, 100],
  '2007': [10, 20, 30, 40, 50, 60, 70],
  '2008': [20, 40, 60, 80, 100, 90, 70],
  '2009': [25, 35, 45, 55, 65, 75, 85],
  '2010': [5, 15, 25, 35, 45, 55, 65],
  '2011': [30, 40, 50, 60, 70, 80, 90],
  '2012': [12, 24, 18, 36, 48, 60, 72],
  '2013': [22, 33, 44, 55, 66, 77, 88],
  '2014': [50, 40, 30, 20, 10, 20, 30],
  '2015': [60, 70, 80, 90, 100, 90, 80],
  '2016': [40, 50, 60, 70, 80, 90, 100],
  '2017': [35, 45, 55, 65, 75, 85, 95],
  '2018': [20, 40, 30, 50, 40, 60, 70],
  '2019': [25, 50, 75, 50, 25, 50, 75],
  '2020': [10, 30, 50, 70, 90, 70, 50],
  '2021': [15, 35, 55, 75, 95, 80, 65],
  '2022': [70, 60, 50, 40, 30, 20, 10],
  '2023': [80, 70, 60, 50, 40, 30, 20],
  '2024': [25, 40, 55, 70, 85, 100, 90],
};

// Função para atualizar o gráfico com base nos anos selecionados
function updateChart() {
  const selectedYear1 = document.getElementById('year-select-1').value;
  const selectedYear2 = document.getElementById('year-select-2').value;

  // Preparar os dados para o gráfico
  const seriesData = [
    {
      name: 'Ano 1',
      data: data[selectedYear1] || []
    },
    {
      name: 'Ano 2',
      data: data[selectedYear2] || []
    }
  ];
  
  // Definir labels baseados no primeiro ano selecionado, se disponível
  const labels = data[selectedYear1] ? data[selectedYear1].map((_, index) => `Data ${index + 1}`) : [];

  // Atualizar o gráfico de área
  areaChart.updateOptions({
    series: seriesData,
    xaxis: {
      categories: labels
    }
  });
}

// Configuração do gráfico de área
const areaChartOptions = {
  series: [
    {
      name: 'Ano 1',
      data: data['2022'] || [],
    },
    {
      name: 'Ano 2',
      data: data['2023'] || [],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#7f400b', '#ed921b'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: data['2022'] ? data['2022'].map((_, index) => `Data ${index + 1}`) : [],
  },
  yaxis: [
    {
      title: {
        text: 'Ano 1',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Ano 2',
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

// Adicionar evento ao select para a primeira linha
document.getElementById('year-select-1').addEventListener('change', updateChart);

// Adicionar evento ao select para a segunda linha
document.getElementById('year-select-2').addEventListener('change', updateChart);


// Inicializar o gráfico de volume de energia
const volumeenChartOptions = {
  series: [
    {
      name: 'KW³',
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
  colors: ['#faa44b'],
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
      text: 'KW³',
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

// Renderizar o gráfico de volume
const volumeenChart = new ApexCharts(
  document.querySelector('#volumeen-chart'),
  volumeenChartOptions
);
volumeenChart.render();

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