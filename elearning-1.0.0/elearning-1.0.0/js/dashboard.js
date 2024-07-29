// sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    if (sidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
  if (!sidebarOpen) {
      sidebar.classList.add("sidebar-responsive");
      sidebarOpen = true;
  } else {
      closeSidebar(); // Chama a função para fechar o sidebar se estiver aberto
  }
}

function closeSidebar() {
  if (sidebarOpen) {
      sidebar.classList.remove("sidebar-responsive");
      sidebarOpen = false;
  }
}

// ---------- Charts ---------

// BAR CHART
var barChartOptions = {
    series: [{
        data: [30, 26, 17, 10, 28],
        name: "Medições x Mês",
    }],
    chart: {
        type: 'bar',
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#00999A",
        "#FAA44B",
        "#00CC00",
        "#F7F701",
        "#583cb3",
    ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
        liner: {
            show: true,
        },
    },
    xaxis: {
        liner: {
            show: true,
        },
    },    
  },
  legend: {
    labels: {
        colors: "#29292c",
    },
    show: true,
    posiion: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    title: {
        style: {
            color: "#29292c",
        },
    },
    axisBorder: {
        show: true,
        color: "#55596e",
    },
    labels: {
        style: {
            colors: "#29292c",
        },
    },
  },
  yaxis: {
    title: {
        text: "Medições",
        style: {
            color: "#29292c",
        },
    },
    axisBorder: {
        show: true,
        color: "#55596e",
    },
    axisTicks: {
        color: "#55596e",
        show: true,
    },
    labels: {
        style: {
            colors: "#29292c",
        },
    },
  },
};


  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();



// Area chart
   
var areaChartOptions = {
  series: [{
    name: '2022',
    data: [100, 300, 300, 15, 400, 50, 41],
  }, {
    name: '2023',
    data: [70, 290, 380, 15, 120, 700, 41],
  }],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
        show: false,
    },
  },
  colors: ["#00001b", "#f0fbfc"],
  labels: ["Jan", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
        lines: {
            show: true,
        },
    },
    xaxis: {
        lines: {
            show: true,
        },
    },
  },
  legend: {
    labels: {
        colors: "#29292c",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
        color: "#55596e",
        show: true,
    },
    axisTicks: {
        color: "#55596e",
        show: true,
    },
    labels: {
        offsetY: 5,
        style: {
            colors: "#29292c",
        },
    },
  },
  yaxis:
  [
    {
        title: {
            text:"2022",
            style: {
                color: "#29292c",
            },
        },
        labels: {
            style: {
                colors: ["#29292c"],
            },
        },
    },
    {
        opposite: true,
        title: {
            text: "2023",
            style: {
                color: "#29292c",
            },
        },
        labels: {
            style: {
                colors: ["#29292c"],
            },
        },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();



