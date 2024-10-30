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

/// Função para filtrar os dados da lista// Função para lidar com a seleção de um item
function atualizarUnidade(unidade) {
  // Atualizar o campo de busca com a unidade selecionada
  const searchInput = document.querySelector('.search-input');
  searchInput.value = unidade;

  // Atualizar o título se necessário
  updateTitle(unidade);

  // Ocultar a lista de unidades
  document.getElementById('data-list').style.display = 'none';
}


// Para garantir que a lista é atualizada quando um item é selecionado
function filterData() {
  const query = document.querySelector('.search-input').value.toLowerCase();
  const items = document.querySelectorAll('#data-list li');
  
  let hasResults = false; // Para verificar se há resultados visíveis

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = ''; // Mostrar item
      hasResults = true; // Se há pelo menos um item visível
    } else {
      item.style.display = 'none'; // Ocultar item
    }
  });

  // Mostrar a lista se houver resultados
  document.getElementById('data-list').style.display = hasResults ? 'block' : 'none';
}


// Selecionar o botão de salvar
const saveButton = document.getElementById('save-btn');

// Campos obrigatórios
const requiredFields = [
  document.querySelector('input[name="unidade"]'),  // Substituir pelo seletor correto para "Unidade"
  document.querySelector('input[name="data-coleta"]'),  // Substituir pelo seletor correto para "Data da Coleta"
  document.querySelector('input[name="medidor"]'),  // Substituir pelo seletor correto para "Medidor"
  document.querySelector('input[name="hora-coleta"]'),  // Substituir pelo seletor correto para "Horário da Coleta"
  document.querySelector('input[name="resumo1"]'),  // Substituir pelo seletor correto para o primeiro campo do segundo container
  document.querySelector('input[name="resumo2"]')   // Substituir pelo seletor correto para o segundo campo do segundo container
];

// Função para verificar se todos os campos estão preenchidos
function checkFields() {
  let allFilled = true;

  requiredFields.forEach(field => {
    if (!field || field.value.trim() === '') {
      allFilled = false;
    }
  });

  // Habilitar/desabilitar o botão de salvar
  saveButton.disabled = !allFilled;
}

// Adicionar eventos de input a todos os campos obrigatórios
requiredFields.forEach(field => {
  if (field) {
    field.addEventListener('input', checkFields);
  }
});

// Função para o botão de cancelar (opcional, pode adicionar funcionalidade conforme a necessidade)
document.getElementById('cancel-btn').addEventListener('click', function() {
  requiredFields.forEach(field => {
    if (field) {
      field.value = ''; // Limpa o campo
    }
  });
  saveButton.disabled = true; // Desabilita o botão de salvar
  console.log('Cancelado');
});

function checkFields() {
  let allFilled = true;

  requiredFields.forEach(field => {
    const errorMsg = field.nextElementSibling; // Supondo que tenha um elemento para mensagem
    if (!field || field.value.trim() === '') {
      allFilled = false;
      errorMsg.style.display = 'block'; // Exibir mensagem de erro
    } else {
      errorMsg.style.display = 'none'; // Ocultar mensagem de erro
    }
  });

  saveButton.disabled = !allFilled;
}