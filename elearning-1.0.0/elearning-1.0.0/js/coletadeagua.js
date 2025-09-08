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
  document.querySelector('textarea[name="resumo1"]'),  // Alterado para textarea
  document.querySelector('textarea[name="resumo2"]')   // Alterado para textarea
];

// Função para limitar caracteres nos campos de resumo
function limitarCaracteres() {
  const resumo1 = document.getElementById('resumo1');
  const resumo2 = document.getElementById('resumo2');
  
  // Limitar Resumo1 a 4 caracteres
  if (resumo1) {
    resumo1.addEventListener('input', function() {
      if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
      }
    });
    
    resumo1.addEventListener('paste', function(e) {
      e.preventDefault();
      const pastedText = (e.clipboardData || window.clipboardData).getData('text');
      this.value = pastedText.slice(0, 4);
    });
  }
  
  // Limitar Resumo2 a 2 caracteres
  if (resumo2) {
    resumo2.addEventListener('input', function() {
      if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
      }
    });
    
    resumo2.addEventListener('paste', function(e) {
      e.preventDefault();
      const pastedText = (e.clipboardData || window.clipboardData).getData('text');
      this.value = pastedText.slice(0, 2);
    });
  }
}

// Função para o botão de cancelar
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
    const errorMsg = field.nextElementSibling;
    if (!field || field.value.trim() === '') {
      allFilled = false;
      if (errorMsg && errorMsg.classList.contains('error-msg')) {
        errorMsg.style.display = 'block';
      }
    } else if (errorMsg && errorMsg.classList.contains('error-msg')) {
      errorMsg.style.display = 'none';
    }
  });

  saveButton.disabled = !allFilled;
  return allFilled;
}

document.addEventListener('DOMContentLoaded', function () {
  limitarCaracteres();
  checkFields(); // Para o botão já iniciar no estado correto

  // Setar mês atual no dropdown
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentValue = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;

  const select = document.getElementById('month-year');
  const optionToSelect = select?.querySelector(`option[value="${currentValue}"]`);
  if (optionToSelect) optionToSelect.selected = true;

  // Evento de mudança
  select?.addEventListener('change', function () {
    console.log('Período selecionado:', this.value);
  });

  // Adiciona listeners para verificar os campos
  requiredFields.forEach(field => {
    if (field) field.addEventListener('input', checkFields);
  });
});

function mostrarMensagemSucesso() {
  const div = document.createElement('div');
  div.textContent = 'Dados salvos com sucesso!';
  div.style.position = 'fixed';
  div.style.bottom = '20px';
  div.style.right = '20px';
  div.style.padding = '10px 20px';
  div.style.backgroundColor = '#3575DD';
  div.style.color = '#fff';
  div.style.borderRadius = '5px';
  div.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 3000);
}

resumo1.addEventListener('paste', e => e.preventDefault());
resumo2.addEventListener('paste', e => e.preventDefault());

document.getElementById('numero_medidor').addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
});