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

/// Função para filtrar os dados da lista
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