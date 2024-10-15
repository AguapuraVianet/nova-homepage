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
    const valorConta = parseFloat(document.getElementById('valor-conta').value.replace('R$ ', '').replace(',', '.')) || 0;
    const descontos = parseFloat(document.getElementById('descontos').value.replace('R$ ', '').replace(',', '.')) || 0;
    const acrescimos = parseFloat(document.getElementById('acrescimos').value.replace('R$ ', '').replace(',', '.')) || 0;

    // Calcular diferença
    const diferenca = leituraAtual - leituraAnterior;
    document.getElementById('diferenca').value = diferenca;

    // Calcular valor do esgoto
    const valorEsgoto = valorConta * 0.8;
    document.getElementById('valor-esgoto').value = valorEsgoto.toFixed(2);

    // Calcular valor total
    const valorTotal = valorConta + valorEsgoto + acrescimos - descontos;
    document.getElementById('valor-total').value = valorTotal.toFixed(2);
}

function salvarRegistro() {
    // Lógica para salvar os dados (ex.: enviar para um servidor ou armazenar localmente)
    alert('Registro salvo com sucesso!');
}

function cancelarRegistro() {
    // Limpa os campos
    document.getElementById('unidade').value = '';
    document.getElementById('mes-ano').value = '';
    document.getElementById('intervalo-leitura').value = '';
    document.getElementById('leitura-anterior').value = '';
    document.getElementById('leitura-atual').value = '';
    document.getElementById('diferenca').value = '';

    document.getElementById('valor-conta').value = '';
    document.getElementById('descontos').value = '';
    document.getElementById('acrescimos').value = '';
    document.getElementById('valor-esgoto').value = '';
    document.getElementById('valor-total').value = '';
}