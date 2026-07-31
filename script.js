document.addEventListener('DOMContentLoaded', () => {
  // Elementos da área de Upload
  const dropZone = document.querySelector('.upload-zone');
  const fileInput = document.getElementById('file-input');

  if (dropZone && fileInput) {
    // 1. Efeitos visuais ao arrastar arquivos sobre a área
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = 'var(--primary)';
        dropZone.style.background = '#eff6ff';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = '#cbd5e1';
        dropZone.style.background = '#f8fafc';
      }, false);
    });

    // 2. Ação ao soltar o arquivo (Drop)
    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;

      if (files.length > 0) {
        handleFiles(files[0]);
      }
    });

    // 3. Ação ao selecionar arquivo via botão
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFiles(e.target.files[0]);
      }
    });
  }

  // Função para processar o arquivo enviado
  function handleFiles(file) {
    const allowedExtensions = ['csv', 'xlsx', 'pdf'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      alert('⚠️ Formato não suportado. Por favor, envie um arquivo .CSV, .XLSX ou .PDF.');
      return;
    }

    // Feedback visual de carregamento
    const uploadIcon = dropZone.querySelector('.upload-icon-wrapper');
    const title = dropZone.querySelector('h4');
    const subtitle = dropZone.querySelector('p');

    uploadIcon.innerHTML = `<i class="ph ph-spinner spinner" style="animation: spin 1s linear infinite;"></i>`;
    title.innerText = `Lendo o arquivo: ${file.name}`;
    subtitle.innerText = `Processando registros e importando vendas para o sistema...`;

    // Simulação do tempo de processamento da importação
    setTimeout(() => {
      uploadIcon.innerHTML = `<i class="ph ph-check-circle" style="color: #10b981;"></i>`;
      title.innerText = `Importação concluída com sucesso!`;
      subtitle.innerText = `O arquivo ${file.name} foi processado e adicionado ao banco de dados do CRM.`;

      // Notificação
      alert(`✅ Sucesso! O arquivo "${file.name}" foi importado para o CRM.`);
    }, 2500);
  }
});

// Adiciona animação CSS para o ícone de carregamento via JS
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
