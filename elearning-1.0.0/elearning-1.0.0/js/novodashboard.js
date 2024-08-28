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

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: '2022',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: '2023',
      data: [11, 32, 45, 32, 34, 52, 41],
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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: '2022',
      },
    },
    {
      opposite: true,
      title: {
        text: '2023',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};


const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

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

// Configuração do novo gráfico
const volumeChartOptions = {
  series: [
    {
      name: 'M³',
      data: [120, 150, 180, 220, 170, 200, 250, 300, 280, 320, 310, 290,220, 170, 200, 250, 300, 280, 320, 310, 290], // Exemplo de dados
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [
      '01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', 
      '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'
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

// Renderizar o gráfico
const volumeChart = new ApexCharts(
  document.querySelector('#volume-chart'),
  volumeChartOptions
);
volumeChart.render();