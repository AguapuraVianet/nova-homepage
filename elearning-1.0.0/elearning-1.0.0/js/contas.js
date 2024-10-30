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

function calcularValores() {
  const leituraAnterior = parseFloat(document.getElementById('leitura-anterior').value) || 0;
  const leituraAtual = parseFloat(document.getElementById('leitura-atual').value) || 0;
  const valorConta = parseFloat(document.getElementById('valor-conta').value.replace('R$', '').replace(',', '.')) || 0;
  const descontos = parseFloat(document.getElementById('descontos').value.replace('R$', '').replace(',', '.')) || 0;
  const acrescimos = parseFloat(document.getElementById('acrescimos').value.replace('R$', '').replace(',', '.')) || 0;

  // Calcular a diferença de leitura
  const diferenca = leituraAtual - leituraAnterior;
  document.getElementById('diferenca').textContent = `${diferenca} m³`;

  // Calcular o valor de esgoto
  const valorEsgoto = valorConta * 0.8;
  document.getElementById('valor-esgoto').textContent = `R$ ${valorEsgoto.toFixed(2).replace('.', ',')}`;

  // Calcular o valor total
  const valorTotal = valorConta + valorEsgoto + acrescimos - descontos;
  document.getElementById('valor-total').textContent = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}

// Adiciona eventos para recalcular quando os valores mudarem
document.getElementById('leitura-anterior').addEventListener('input', calcularValores);
document.getElementById('leitura-atual').addEventListener('input', calcularValores);
document.getElementById('valor-conta').addEventListener('input', calcularValores);
document.getElementById('descontos').addEventListener('input', calcularValores);
document.getElementById('acrescimos').addEventListener('input', calcularValores);

// Função para salvar o registro (lógica a ser implementada)
function salvarRegistro() {
  // Lógica para salvar o registro
  alert('Registro salvo com sucesso!');
}

// Função para cancelar (lógica a ser implementada)
function cancelarRegistro() {
  // Lógica para cancelar o registro
  alert('Registro cancelado!');
}