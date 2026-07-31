// Base de dados CRM
const clientsData = [
    { id: 1, name: "DANIELA BARBOSA DA SILVA MODESTO", purchases: [{ date: "08/07/2025", items: ["NOTEBOOK LENOVO AMD R3-7320U", "CAPA NOTEBOOK 15"], total: 2859.99 }] },
    { id: 2, name: "MAURICIO JOSE BARBOSA DA SILVA", purchases: [{ date: "10/07/2025", items: ["CAIXA SOM JBL PARTY BOX CLUB 120"], total: 2450.00 }, { date: "12/12/2025", items: ["CAIXA DE SOM JBL CLIP 5 AZUL"], total: 419.99 }] },
    { id: 3, name: "HUGO ANTONIO DA SILVA", purchases: [{ date: "15/07/2025", items: ["CELULAR REALME NOTE 60X", "PELICULA DE VIDRO", "CHIP TIM"], total: 984.98 }] },
    { id: 4, name: "SONIA SOARES BRANDAO", purchases: [{ date: "17/07/2025", items: ["FONTE DE ALIMENTACAO PC DUEX 500W"], total: 350.00 }] },
    { id: 5, name: "BRUNA PESSOA", purchases: [{ date: "19/07/2025", items: ["CELULAR REALME C75X", "FONE TIPO C KAIDI"], total: 1759.99 }] },
    { id: 6, name: "NILSON FELIPE GOMES DE MOURA CUNHA", purchases: [{ date: "19/07/2025", items: ["GAME STICK RETRO X3 PRO", "PILHA AAA RECARREGAVEL"], total: 399.99 }] },
    { id: 7, name: "JOSÉ CARLOS LOPES", purchases: [{ date: "22/07/2025", items: ["NINTENDO SWITCH V2", "CASE SWITCH V2", "PELICULA DE VIDRO SWITCH"], total: 2849.97 }] },
    { id: 8, name: "DAFINY XAVIER", purchases: [{ date: "07/08/2025", items: ["SUPER SMASH BROS ULTIMATE-SWITCH"], total: 400.00 }] },
    { id: 9, name: "DJANIRA PEREIRA DOS ANJOS", purchases: [{ date: "15/08/2025", items: ["CELULAR REALME NOTE 60X VERDE"], total: 900.00 }] },
    { id: 10, name: "PAULO ROBERTO DA SILVA", purchases: [{ date: "16/08/2025", items: ["FILTRO DE LINHA (REGUA)"], total: 149.99 }] },
    { id: 11, name: "FABIANA DA SILVA HOLANDA", purchases: [{ date: "19/08/2025", items: ["CONTROLE PS4 PRETO", "HOGWARTS LEGACY-PS4"], total: 649.98 }] },
    { id: 12, name: "KAWACHI CESAR SABINO DE OLIVEIRA", purchases: [{ date: "29/08/2025", items: ["PLAYSTATION 4 SLIM 1TB", "FILTRO DE LINHA", "CONTROLE PS4", "GOD OF WAR 4"], total: 3239.92 }] },
    { id: 13, name: "ILZE DE LIMA SANTIAGO", purchases: [{ date: "01/09/2025", items: ["TABLET SAMSUNG A9 4GB+64GB"], total: 1300.00 }] },
    { id: 14, name: "CONGREGACAO DAS IRMAS CARMELITAS", purchases: [{ date: "02/09/2025", items: ["TELEFONE SEM FIO INTELBRAS TS2510", "FRETE"], total: 199.99 }] },
    { id: 15, name: "JOSE MARCULINO FILHO", purchases: [{ date: "03/09/2025", items: ["CELULAR POSITIVO P41 4G"], total: 300.00 }] },
    { id: 16, name: "JOSE ANTONIO LUCENA DOS SANTOS", purchases: [{ date: "03/09/2025", items: ["CELULAR REALME C61", "PELICULA DE VIDRO", "CELULAR POSITIVO P41", "BONECO MARIO"], total: 2429.95 }] },
    { id: 17, name: "ARNAUD NEUVESSELLE-MUGNIER", purchases: [{ date: "03/09/2025", items: ["CONTROLE PS4 PRETO"], total: 369.99 }] },
    { id: 18, name: "FERNANDO HERCULANO BARBOSA FILHO", purchases: [{ date: "13/09/2025", items: ["CAIXA DE SOM JBL FLIP 6", "FONE BLUETOOTH KAIDI"], total: 1079.99 }] },
    { id: 19, name: "VALTER DIEGO", purchases: [{ date: "22/09/2025", items: ["IPHONE 13 128GB PRETO"], total: 3700.00 }] },
    { id: 20, name: "THIAGO FERNANDO SANTOS GOMES", purchases: [{ date: "22/09/2025", items: ["MOUSE S/FIO OEX MS603"], total: 99.99 }] },
    { id: 21, name: "MARIA DAS DORES BEZERRA DE LIMA", purchases: [{ date: "23/09/2025", items: ["CAIXA DE SOM JBL BOOMBOX 3 WI-FI"], total: 3000.00 }] },
    { id: 22, name: "AVULSO", purchases: [{ date: "25/09/2025", items: ["CONVERSOR DIGITAL AQUARIO"], total: 139.99 }] },
    { id: 23, name: "EDUARDO ALVES DE LUNA JUNIOR", purchases: [{ date: "30/09/2025", items: ["GTA 5-PS4"], total: 229.99 }] },
    { id: 24, name: "AYRON RICARDO BARBOSA", purchases: [{ date: "14/10/2025", items: ["CELULAR REALME C61 VERDE"], total: 1500.00 }] },
    { id: 25, name: "LEANDRO DE ALMEIDA", purchases: [{ date: "16/10/2025", items: ["CONTROLE SERIES S/X PULSE RED"], total: 600.00 }] },
    { id: 26, name: "WEDJA OLIVEIRA DA SILVA", purchases: [{ date: "16/10/2025", items: ["CELULAR POSITIVO P41 4G"], total: 340.00 }] },
    { id: 27, name: "LUCAS SOARES RANGEL", purchases: [{ date: "17/10/2025", items: ["FONE BLUETOOTH KAIDI KD-790"], total: 149.99 }] },
    { id: 28, name: "VALERIA ANDRADE DA SILVA", purchases: [{ date: "18/10/2025", items: ["CELULAR POSITIVO P41 4G"], total: 360.00 }] },
    { id: 29, name: "CARLOS EDUARDO SILVA DE ALMEIDA SOUSA", purchases: [{ date: "31/10/2025", items: ["MEMORIA RAM DDR3 8GB KINGSTON"], total: 449.98 }] },
    { id: 30, name: "NEMESIO VALDEVINO DA SILVA", purchases: [{ date: "07/11/2025", items: ["CELULAR POSITIVO P41 4G"], total: 299.99 }] },
    { id: 31, name: "ANNY KAROLINY", purchases: [{ date: "03/12/2025", items: ["HOVERBOARD SKATE ELETRICO ROXO"], total: 1300.00 }, { date: "03/12/2025", items: ["GARANTIA ESTENDIDA NOVO +1 ANO"], total: 300.00 }] },
    { id: 32, name: "ANTONIO JOSE AZEVEDO DA SILVA", purchases: [{ date: "03/12/2025", items: ["HD EXTERNO 4TB SEAGATE"], total: 949.99 }] },
    { id: 33, name: "GABRIEL GOMES NASCIMENTO", purchases: [{ date: "03/12/2025", items: ["GRIP SIMPLES", "CONTROLE SERIES S/X PRETO"], total: 579.99 }] },
    { id: 34, name: "PRISCILA RHEITTMAN", purchases: [{ date: "03/12/2025", items: ["FONE BLUETOOTH JBL T520BT BRANCO"], total: 320.00 }] },
    { id: 35, name: "MIRTES ELIZABETE MENDES DE SOUZA", purchases: [{ date: "04/12/2025", items: ["CELULAR POSITIVO P41 4G"], total: 280.00 }] },
    { id: 36, name: "SEBASTIÃO GOMES DA SILVA", purchases: [{ date: "09/12/2025", items: ["CELULAR POSITIVO P41 4G", "CHIP VIVO"], total: 294.99 }] },
    { id: 37, name: "PRISCILA MARIA DUTRA DE ALCANTARA", purchases: [{ date: "15/12/2025", items: ["TABLET SAMSUNG A9 PLUS", "CAPA TABLET A9 PLUS"], total: 1890.48 }] },
    { id: 38, name: "HUANDSON GUSTAVO LIMA DE ARAUJO", purchases: [{ date: "15/12/2025", items: ["CABO USB PS4 SIMILAR"], total: 79.99 }] },
    { id: 39, name: "JUSCELINO RODRIGUES SILVA", purchases: [{ date: "15/12/2025", items: ["CONTROLE SERIES S/X BRANCO"], total: 499.99 }] },
    { id: 40, name: "MISAEL MEDEIROS", purchases: [{ date: "15/12/2025", items: ["NINTENDO SWITCH V1 DESTRAVADO", "PELICULA SWITCH"], total: 1599.98 }] },
    { id: 41, name: "THIAGO BARBOSA DA COSTA", purchases: [{ date: "15/12/2025", items: ["PC HOME I3-4 240GB SSD", "MONITOR BPC 19", "MOUSE", "TECLADO"], total: 1799.97 }] },
    { id: 42, name: "JOAO VICTOR SANTANA LIMA", purchases: [{ date: "15/12/2025", items: ["NINTENDO SWITCH OLED 64GB BRANCO"], total: 2800.00 }] },
    { id: 43, name: "ANA CARLA SANTANA MACIEL", purchases: [{ date: "17/12/2025", items: ["RED DEAD REDEMPTION 2-PS4", "FONE GAMER OEX HS-200"], total: 349.98 }] },
    { id: 44, name: "ANA ODETE DE MELO", purchases: [{ date: "18/12/2025", items: ["CARTAS POKEMON", "MICRO SD 64GB"], total: 109.98 }] },
    { id: 45, name: "REINALDO MOREIRA NUNES", purchases: [{ date: "20/12/2025", items: ["CONTROLE PS5", "FC26-PS5", "GRIP PERSONALIZADO"], total: 1019.97 }] },
    { id: 46, name: "FABIO LUCIANO DA SILVA", purchases: [{ date: "20/12/2025", items: ["CELULAR REALME C63", "PELICULA DE VIDRO"], total: 1439.98 }] },
    { id: 47, name: "JESSICA GALVÃO", purchases: [{ date: "20/12/2025", items: ["PC GAMER CORE I5", "MONITOR BPC 19", "FONE GAMER", "COMBO TECLADO/MOUSE"], total: 4059.96 }] },
    { id: 48, name: "FELIPE BERNARDO DA SILVA EVANGELISTA", purchases: [{ date: "20/12/2025", items: ["REPETIDOR SINAL WI-FI TP-LINK"], total: 210.00 }] }
];

let selectedClient = null;
let productsChartInstance = null;
let revenueChartInstance = null;

// SWITCH DE ABAS
function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');

    if (tabId === 'analyticsTab') {
        renderCharts();
    }
}

// RENDERIZAR CARDS DE CLIENTES
function renderClients(data) {
    const list = document.getElementById('clientList');
    list.innerHTML = '';

    let grandTotal = 0;

    data.forEach(client => {
        const clientTotal = client.purchases.reduce((acc, p) => acc + p.total, 0);
        grandTotal += clientTotal;

        const card = document.createElement('div');
        card.className = 'client-card';
        
        let purchasesHtml = client.purchases.map(p => `
            <div class="purchase-item">
                <span class="purchase-date">📅 ${p.date} - <strong>R$ ${p.total.toFixed(2)}</strong></span>
                <div class="product-list">• ${p.items.join(', ')}</div>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="client-header">
                <div class="client-name">${client.name}</div>
                <div class="total-spent">R$ ${clientTotal.toFixed(2)}</div>
            </div>
            <div class="purchase-history">
                ${purchasesHtml}
            </div>
            <button class="btn-contact" onclick="openContactModal(${client.id})">
                💬 Contatar no WhatsApp
            </button>
        `;
        list.appendChild(card);
    });

    // Atualiza KPIs Rápidos
    document.getElementById('totalClients').innerText = data.length;
    document.getElementById('totalRevenue').innerText = `R$ ${grandTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    const avg = data.length > 0 ? grandTotal / data.length : 0;
    document.getElementById('avgTicket').innerText = `R$ ${avg.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

// FILTRAGEM E ORDENAÇÃO
function applyFilters() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const sortValue = document.getElementById('sortSelect').value;

    let filtered = clientsData.filter(client => {
        const matchName = client.name.toLowerCase().includes(term);
        const matchProduct = client.purchases.some(p => 
            p.items.some(item => item.toLowerCase().includes(term)) || p.date.includes(term)
        );
        return matchName || matchProduct;
    });

    // Ordenação
    filtered.sort((a, b) => {
        const totalA = a.purchases.reduce((acc, p) => acc + p.total, 0);
        const totalB = b.purchases.reduce((acc, p) => acc + p.total, 0);

        if (sortValue === 'valueDesc') return totalB - totalA;
        if (sortValue === 'valueAsc') return totalA - totalB;
        if (sortValue === 'nameAsc') return a.name.localeCompare(b.name);
        if (sortValue === 'oldest') return a.id - b.id;
        return b.id - a.id; // recent
    });

    renderClients(filtered);
}

// EXPORTAR DADOS PARA CSV
function exportToCSV() {
    let csv = "ID,Nome,Data,Produtos,Total(R$)\n";

    clientsData.forEach(c => {
        c.purchases.forEach(p => {
            const itemsStr = `"${p.items.join(' + ')}"`;
            csv += `${c.id},"${c.name}",${p.date},${itemsStr},${p.total.toFixed(2)}\n`;
        });
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "relatorio_crm_clientes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// MODAL WHATSAPP
function openContactModal(clientId) {
    selectedClient = clientsData.find(c => c.id === clientId);
    document.getElementById('modalClientName').innerText = selectedClient.name;
    document.getElementById('phoneNumber').value = '';
    updateMessageText();
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function updateMessageText() {
    if (!selectedClient) return;
    
    const templateType = document.getElementById('messageTemplate').value;
    const lastPurchase = selectedClient.purchases[selectedClient.purchases.length - 1];
    const productList = lastPurchase.items.join(', ');
    
    let msg = "";

    if (templateType === 'posvenda') {
        msg = `Olá ${selectedClient.name}, tudo bem? Espero que esteja gostando do seu ${productList}! Passando para saber se precisa de algum suporte ou acessório complementar.`;
    } else if (templateType === 'oferta') {
        msg = `Olá ${selectedClient.name}! Notamos que você comprou ${productList} conosco recentemente. Chegaram novidades exclusivas em nossa loja com desconto especial para você!`;
    } else if (templateType === 'agradecimento') {
        msg = `Olá ${selectedClient.name}, muito obrigado por ser nosso cliente! Agradecemos a confiança na compra do seu ${productList}. Conte sempre conosco!`;
    } else if (templateType === 'aniversario') {
        msg = `Olá ${selectedClient.name}! Preparamos um presente especial para você este mês na nossa loja. Venha conferir!`;
    }

    document.getElementById('customMessage').value = msg;
}

function sendWhatsApp() {
    let phone = document.getElementById('phoneNumber').value.replace(/\D/g, '');
    const message = encodeURIComponent(document.getElementById('customMessage').value);

    if (!phone) {
        window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
    } else {
        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
    }
}

// CHARTS & ANALYTICS (INFOGRÁFICO)
function renderCharts() {
    const categoryCount = {
        'Celulares & Smartphones': 0,
        'Consolas & Games': 0,
        'Áudio & Caixas JBL': 0,
        'Informática & Acessórios': 0
    };

    let maxPurchase = 0;
    let totalPurchasesCount = 0;

    const monthlyRevenue = {
        'Jul/25': 0,
        'Ago/25': 0,
        'Set/25': 0,
        'Out/25': 0,
        'Nov/25': 0,
        'Dez/25': 0
    };

    clientsData.forEach(c => {
        c.purchases.forEach(p => {
            totalPurchasesCount++;
            if (p.total > maxPurchase) maxPurchase = p.total;

            const month = p.date.split('/')[1];
            if (month === '07') monthlyRevenue['Jul/25'] += p.total;
            if (month === '08') monthlyRevenue['Ago/25'] += p.total;
            if (month === '09') monthlyRevenue['Set/25'] += p.total;
            if (month === '10') monthlyRevenue['Out/25'] += p.total;
            if (month === '11') monthlyRevenue['Nov/25'] += p.total;
            if (month === '12') monthlyRevenue['Dez/25'] += p.total;

            p.items.forEach(item => {
                const upper = item.toUpperCase();
                if (upper.includes('CELULAR') || upper.includes('REALME') || upper.includes('IPHONE') || upper.includes('POSITIVO')) {
                    categoryCount['Celulares & Smartphones']++;
                } else if (upper.includes('SWITCH') || upper.includes('PLAYSTATION') || upper.includes('PS4') || upper.includes('GAME') || upper.includes('CONTROLE')) {
                    categoryCount['Consolas & Games']++;
                } else if (upper.includes('JBL') || upper.includes('CAIXA') || upper.includes('FONE')) {
                    categoryCount['Áudio & Caixas JBL']++;
                } else {
                    categoryCount['Informática & Acessórios']++;
                }
            });
        });
    });

    document.getElementById('totalPurchasesCount').innerText = totalPurchasesCount;
    document.getElementById('maxPurchaseVal').innerText = `R$ ${maxPurchase.toFixed(2)}`;

    // Chart 1: Categorias (Doughnut)
    const ctx1 = document.getElementById('productsChart').getContext('2d');
    if (productsChartInstance) productsChartInstance.destroy();

    productsChartInstance = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryCount),
            datasets: [{
                data: Object.values(categoryCount),
                backgroundColor: ['#0284c7', '#10b981', '#f59e0b', '#8b5cf6']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Chart 2: Evolução Faturamento (Bar)
    const ctx2 = document.getElementById('revenueChart').getContext('2d');
    if (revenueChartInstance) revenueChartInstance.destroy();

    revenueChartInstance = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: Object.keys(monthlyRevenue),
            datasets: [{
                label: 'Faturamento (R$)',
                data: Object.values(monthlyRevenue),
                backgroundColor: '#0284c7',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Inicialização
applyFilters();
