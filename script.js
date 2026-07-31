document.addEventListener('DOMContentLoaded', () => {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');

  if (dropZone && fileInput) {
    // Efeitos ao arrastar arquivos
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

    // Ação de Soltar (Drop)
    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFiles(files[0]);
      }
    });

    // Ação do Botão Selecionar
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFiles(e.target.files[0]);
      }
    });
  }

  function handleFiles(file) {
    const allowedExtensions = ['csv', 'xlsx', 'pdf'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      alert('⚠️ Formato não suportado! Envie um arquivo .CSV, .XLSX ou .PDF.');
      return;
    }

    const uploadIcon = dropZone.querySelector('.upload-icon-wrapper');
    const title = dropZone.querySelector('h4');
    const subtitle = dropZone.querySelector('p');

    // Estado de Carregamento
    uploadIcon.innerHTML = `<i class="ph ph-spinner spinner" style="animation: spin 1s linear infinite;"></i>`;
    title.innerText = `Processando: ${file.name}`;
    subtitle.innerText = `Lendo dados e importando vendas para o banco de dados...`;

    // Conclusão
    setTimeout(() => {
      uploadIcon.innerHTML = `<i class="ph ph-check-circle" style="color: #10b981;"></i>`;
      title.innerText = `Importação concluída com sucesso!`;
      subtitle.innerText = `O arquivo ${file.name} foi adicionado ao CRM.`;
      
      alert(`✅ O arquivo "${file.name}" foi processado e importado com sucesso!`);
    }, 2000);
  }
});

// Estilo de animação para o ícone giratório de carregamento
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
