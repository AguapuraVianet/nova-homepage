// js/artigos.js
const articles = [
    {
        title: "I-250 - PADR&Otilde;ES DE CONSUMO DE &Aacute;GUA E ENERGIA EL&Eacute;TRICA EM HABITA&Ccedil;&Otilde;ES DE INTERESSE SOCIAL DE SALVADOR, BAHIA",
        author: "Ana Paula Arruda de Almeida Garcia",
        date: "20 de Mar&ccedil;o de 2024",
        semester: "2024.2",
        pdf: "Documentos/Artigos/1.pdf"
    },
    {
        title: "O USO RACIONAL DA &Aacute;GUA EM INSTITUI&Ccedil;&Otilde;ES P&Uacute;BLICAS: A EXPERI&Ecirc;NCIA DO HEMOCENTRO COORDENADOR DE PALMAS-TO",
        author: "Marildo de Sousa Ribeiro",
        date: "22 de Novembro de 2015",
        semester: "2015.2",
        pdf: "Documentos/Artigos/ARTIGO - MARILDO DE SOUZA  - O USO RACIONAL DA ÁGUA EM INSTITUIÇÕES PÚBLICAS_ A EXPERIÊNCIA DO HEMOCENTRO COORDENADOR DE PALMAS-TO.pdf"
    },
    {
        title: "MONITORAMENTO DO CONSUMO DE &Aacute;GUA EM PR&Eacute;DIOS UNIVERSIT&Aacute;RIOS: METODOLOGIA E RESULTADOS",
        author: "Sandira L&iacute;via Moraes FONSECA, Luciano Matos QUEIROZ, Maria do Socorro GON&Ccedil;ALVES, Asher KIPERSTOK   ",
        date: "22 de Julho de 2024",
        semester: "2024.2",
        pdf: "Documentos/Artigos/Artigo Sandira - Abril2010-COBESA.pdf"
    },
    {
        title: "POSSIBILIDADES DO USO DE &Aacute;GUA DE CHUVA EM PR&Eacute;DIO P&Uacute;BLICO DO ESTADO DA BAHIA",
        author: "Antonio Santos S&aacute;nchez, Vicky Ramon Britto, Samara Fernanda da Silva, Thales Alves Cardoso, Asher Kiperstok",
        date: "05 de Novembro de 2023",
        semester: "2023.2",
        pdf: "Documentos/Artigos/ARTIGO THALES.doc.pdf"
    },
    {
        title: "I-046 - ESTUDO DOS EQUIPAMENTOS CONSUMIDORES DE &Aacute;GUA &ndash; DESTILADORES",
        author: "Alessandra Keiko Nakagawa, Asher Kiperstok, Karla Patricia Oliveira-Esquerre",
        date: "12 de Janeiro de 2023",
        semester: "2023.1",
        pdf: "Documentos/Artigos/Artigo_alessandra keiko_ESTUDO DOS EQUIPAMENTOS CONSUMIDORES DE ÁGUA –  DESTILADORES.pdf"
    },
    {
        title: "VI-094 &ndash; METODOLOGIA PARA OBTEN&Ccedil;&Atilde;O DA POPULA&Ccedil;&Atilde;O CONSUMIDORA DE &Aacute;GUA EM UMA UNIVERSIDADE &ndash; POPULA&Ccedil;&Atilde;O EQUIVALENTE",
        author: "Alessandra Keiko Nakagawa, Asher Kiperstok, Karla Patricia Oliveira-Esquerre",
        date: "12 de Janeiro de 2023",
        semester: "2023.1",
        pdf: "Documentos/Artigos/Artigo_Alessandra keiko_METODOLOGIA PARA OBTENÇÃO DA POPULAÇÃO CONSUMIDORA DE ÁGUA EM UMA UNIVERSIDADE –  POPULAÇÃO EQUIVALENTE.pdf"
    },
    {
        title: "CONSUMO DOMICILIAR E USO RACIONAL DA &Aacute;GUA EM &Aacute;REAS DE BAIXA RENDA: PESQUISA DE OPINI&Atilde;O",
        author: "Dijara Concei&ccedil;&atilde;o, Asher Kiperstok, Adriana Machado, Mirian Santos, Ana Garcia ",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo_Ana Garcia_CONSUMO DOMICILIAR E USO RACIONAL DA ÁGUA EM ÁREAS DE BAIXA  RENDA_ PESQUISA DE OPINIÃO.pdf"
    },
    {
        title: "I-099 &ndash; USO RACIONAL DA &Aacute;GUA EM SANIT&Aacute;RIOS P&Uacute;BLICOS",
        author: "Dijara Concei&ccedil;&atilde;o, Asher Kiperstok, Adriana Machado, Mirian Santos, Ana Garcia ",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/Artigo_Asher Kiperstok_USO RACIONAL DA ÁGUA EM SANITÁRIOS PÚBLICOS(1).pdf"
    },
    {
        title: "METODOLOGIA DE MEDI&Ccedil;&Atilde;O DE VAZ&Atilde;O EM BACIAS SANIT&Aacute;RIAS",
        author: "Diego ",
        date: "08 de Julho de 2012",
        semester: "2012.2",
        pdf: "Documentos/Artigos/Artigo_Diego_METODOLOGIA DE MEDIÇÃO DE VAZÃO EM BACIAS SANITÁRIAS.pdf"
    },
    {
        title: "I-100 - CONSUMO DE &Aacute;GUA EM RESID&Ecirc;NCIAS DE BAIXA RENDA - ESTUDO DE CASO",
        author: "Eduardo Cohim, Asher Kiperstok, Ana Garcia, Marion Cunha Dias ",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/Artigo_Eduardo Cohim_CONSUMO DE ÁGUA EM RESIDÊNCIAS DE BAIXA RENDA -  ESTUDO DE CASO.pdf"
    },
    {
        title: "SIG COMO FERRAMENTA DE APOIO &Agrave; GEST&Atilde;O DO USO INSDUSTRIAL DA &Aacute;GUA E GERA&Ccedil;&Atilde;O DE EFLUNENTES",
        author: "Elicelma CARVALHO, Asher Kiperstok, Ricardo Ara&uacute;jo KALID, Karla Patricia ESQUERRE-OLIVEIRA, M&aacute;rio Cezar Oliva de MATTOS ",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/Artigo_Elicelma carvalho_SIG COMO FERRAMENTA DE APOIO À GESTÃO DO USO INSDUSTRIAL DA ÁGUA  E GERAÇÃO DE EFLUNENTES.pdf"
    },
    {
        title: "PROPOSI&Ccedil;&Atilde;O DE METODOLOGIA DE CARATERIZA&Ccedil;&Atilde;O DO CONSUMO INTRADOMICILIAR DE &Aacute;GUA POR EQUIPAMENTO",
        author: "Gabriella Laura P.Botelho, Asher Kiperstok, Vivian Carla Alves, Ana Paula Garcia, Fred Augusto Anuncia&ccedil;&atilde;o, Karla Oliveira Esquerre",
        date: "08 de Julho de 2012",
        semester: "2012.2",
        pdf: "Documentos/Artigos/ARTIGO_gabriella Laura_USO RACIONAL DA ÁGUA EM SANITÁRIOS PÚBLICOS.pdf"
    },
    {
        title: "Metodologia TECLIM para uso racionalde &aacute;gua na ind&uacute;stria: o banco de ideias no contexto da metodologia front‑end loading",
        author: "Geiza Lima de Oliveira, Asher Kiperstok, Ricardo de Ara&uacute;jo Kalid, Karla Patr&iacute;cia Santos Oliveira Rodr&iacute;guez Esquerre, Emerson Andrade Sales",
        date: "00 de Dezembro de 2016",
        semester: "2012.2",
        pdf: "Documentos/Artigos/Artigo_Geiza Lima_Metodologia TECLIM para uso racional de água na indústria_ o banco de ideias no contexto da metodologiapdf.pdf"
    },
    {
        title: "INDICADORES DE DESEMPENHO OPERACIONAL: APOIO &Agrave; GEST&Atilde;OAMBIENTAL DE UMA IND&Uacute;STRIA PETROQU&Iacute;MICA",
        author: "Samara Andrade, Asher Kiperstok, Lara Shelene da Silva Teixeira, Emerson Andrade Sales, Karla Patr&iacute;cia Santos Oliveira Rodriguez Esquerre",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/Artigo_Karla patricia_INDICADORES DE DESEMPENHO OPERACIONAL_ APOIO À GESTÃO  AMBIENTAL DE UMA INDÚSTRIA PETROQUÍMICA.pdf"
    },
    {
        title: "A INFLU&Ecirc;NCIA DO DESIGN DOS SANIT&Aacute;RIOS P&Uacute;BLICOS NO COMPORTAMENTO DOS USU&Aacute;RIOS",
        author: "Kelly Fontoura, Asher Kiperstok, Marion Cunha Dias, Eduardo Cohim",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/Artigo_Kelly fontoura_A INFLUÊNCIA DO DESIGN DOS SANITÁRIOS PÚBLICOS NO  COMPORTAMENTO DOS USUÁRIOS.pdf"
    },
    {
        title: "CARACTERIZA&Ccedil;&Atilde;O PRELIMINAR DE CONSUMO DE &Aacute;GUA EM PR&Eacute;DIOS P&Uacute;BLICOS ADMINISTRATIVOS",
        author: "Let&iacute;cia Moura de C. Santana, Asher Kiperstok",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo_Leticia Moura_CARACTERIZAÇÃO PRELIMINAR DE CONSUMO DE ÁGUA EM PRÉDIOS  PÚBLICOS ADMINISTRATIVOS.pdf"
    },
    {
        title: "O USO RACIONAL DA &Aacute;GUA EM AEROPORTOS &ndash; O ESTUDO DE CASO NOS SANIT&Aacute;RIOS DO AEROPORTO INTERNACIONAL DE SALVADOR/BA.",
        author: "Maria Tha&iacute;s Menezes Freire, Asher Kiperstok, Ricardo de Ara&uacute;jo Kalid, George Juliano Santos de Amorim",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo_maria thais_O USO RACIONAL DA ÁGUA EM AEROPORTOS – O ESTUDO DE CASO NOS SANITÁRIOS DO AEROPORTO INTERNACIONAL DE SALVADOR_BA..pdf"
    },
    {
        title: "AN&Aacute;LISE DO PERFIL DE ABASTECIMENTO DE &Aacute;GUA EM EDIFICA&Ccedil;&Otilde;ES ESCOLARES P&Uacute;BLICAS",
        author: "Orestes M. Gon&ccedil;alves, Marina S. de O. Ilha, Luciana P. Pedroso, Eliza F. Montali, Fernando Henrique Gasparini",
        date: "23 de Agosto de 2006",
        semester: "2006.1",
        pdf: "Documentos/Artigos/Artigo_Orestes Goncalves_ANÁLISE DO PERFIL DE ABASTECIMENTO DE ÁGUA EM  EDIFICAÇÕES ESCOLARES PÚBLICAS.pdf"
    },
    {
        title: "I-086 &ndash; PROGRAMA DE RACIONALIZA&Ccedil;&Atilde;O DO CONSUMO DE &Aacute;GUA EMPR&Eacute;DIOS P&Uacute;BLICOS DO ESTADO DA BAHIA",
        author: "Samara Fernanda da Silva, Vicky Britto, Carolina Rodeiro, Asher Kiperstok",
        date: "23 de Novembro de 2014",
        semester: "2014.2",
        pdf: "Documentos/Artigos/Artigo_samara fernanda_PROGRAMA DE RACIONALIZAÇÃO DO CONSUMO DE ÁGUA EM  PRÉDIOS PÚBLICOS DO ESTADO DA BAHIA.pdf"
    },
    {
        title: "AVALIA&Ccedil;&Atilde;O DO POTENCIAL DE RE&Uacute;SO DE &Aacute;GUA EM EQUIPAMENTO DE AN&Aacute;LISES CL&Iacute;NICAS",
        author: "Solange Nunes, Marina Ilha, Luis Guilherme B. Celso, Aldo Roggers Jr",
        date: "23 de Agosto de 2006",
        semester: "2006.1",
        pdf: "Documentos/Artigos/Artigo_Solange nunes_AVALIAÇÃO DO POTENCIAL DE REÚSO DE ÁGUA EM EQUIPAMENTO DE ANÁLISES CLÍNICAS.pdf"
    },
    {
        title: "A INFLU&Ecirc;NCIA DO DESIGN DOS SANIT&Aacute;RIOS P&Uacute;BLICOS NO COMPORTAMENTO DOS USU&Aacute;RIOS",
        author: "Kelly Fontoura, Marion Cunha Dias, Asher Kiperstok, Aldo Roggers Jr",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/Artigo-A influencia do design dos sanitarios publicos.pdf"
    },
    {
        title: "ALTERNATIVAS PARA A REDU&Ccedil;&Atilde;O DE CONSUMO DE &Aacute;GUA EM SANIT&Aacute;RIOS FEMININOS DE PR&Eacute;DIOS P&Uacute;BLICOS.",
        author: "Luiza de Andrade Berndt, Pricila Cal Oliveira, Asher Kiperstok, Vivien Luciane Viaro",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo-Alternativa Redução Consumo-Predios Públicos-I COBESA-2010-ok.pdf"
    },
    {
        title: "CARACTERIZA&Ccedil;&Atilde;O E PERFIL DE CONSUMO DE &Aacute;GUA DE UM SANIT&Aacute;RIO MASCULINO DA EPUFBA",
        author: "Adriana Santos Machado, Dijara Maria S. Concei&ccedil;&atilde;o, Asher Kiperstok, Vivien Luciane Viaro",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo-Caracterização e perfil consumo de Sanit Masculino-I COBESA-2010-ok.pdf"
    },
    {
        title: "CARACTERIZA&Ccedil;&Atilde;O PRELIMINAR DE CONSUMO DE &Aacute;GUA EM PR&Eacute;DIOS P&Uacute;BLICOS ADMINISTRATIVOS",
        author: "Let&iacute;cia Moura de C. Santana, Asher Kiperstok",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo-Caracterização Preliminar de Consumo Agua-I COBESA-2010-ok.pdf"
    },
    {
        title: "Water conservation as a tool to support sustainable practices in a Brazilian public university",
        author: "Maerbal Marinho, Maria do Socorro Gon&ccedil;alves, Asher Kiperstok",
        date: "15 de Maio de 2012",
        semester: "2012.1",
        pdf: "Documentos/Artigos/Artigo-Maerbal-Maria-Asher-2013.pdf"
    },
    {
        title: "MONITORAMENTO DO CONSUMO DE &Aacute;GUA EM PR&Eacute;DIOS UNIVERSIT&Aacute;RIOS: METODOLOGIA E RESULTADOS",
        author: "Sandira L&iacute;via Moraes FONSECA, Maria do Socorro Gon&ccedil;alves, Asher Kiperstok, Luciano Matos QUEIROZ ",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo-Monitoramento do Consumo-Artigo-Abril2010-COBESA-ok.pdf"
    },
    {
        title: "Rational Consumption of Water in Administrative Public Buildings: The Experience of the Bahia Administrative Center, Brazil",
        author: "Samara Fernanda da Silva, Vicky Britto, Asher Kiperstok, Camila Azevedo",
        date: "25 de Agosto de 2014",
        semester: "2014.2",
        pdf: "Documentos/Artigos/Artigo-Rational Consumption of Water in Administrative Public_Samara 2014-ok.pdf"
    },
    {
        title: "O USO RACIONAL DA &Aacute;GUA EM AEROPORTOS &ndash; O ESTUDO DE CASO NOS SANIT&Aacute;RIOS DO AEROPORTO INTERNACIONAL DE SALVADOR/BA.",
        author: "Maria Tha&iacute;s Menezes Freire, Ricardo de Ara&uacute;jo Kalid, Asher Kiperstok, George Juliano Santos de Amorim",
        date: "11 de Julho de 2010",
        semester: "2010.2",
        pdf: "Documentos/Artigos/Artigo-Uso tacional da Água em Aeroportos-I COBESA-2010-ok.pdf"
    },
    {
        title: "VI-025 &ndash; PROGRAMA DE USO RACIONAL DA &Aacute;GUA EM UMA UNIVERSIDADE: METODOLOGIA E RESULTADOS",
        author: "Alessandra Keiko Nakagawa, Karla Patricia Oliveira-Esquerre, Asher Kiperstok, Allan dos Santos Quadros",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/PROGRAMA DE USO RACIONAL DARTIGO - KEIKO - A ÁGUA EM UMA UNIVERSIDADE_ METODOLOGIA E RESULTADOS.pdf"
    },
    {
        title: "PROPOSI&Ccedil;&Atilde;O DE METODOLOGIA DE CARATERIZA&Ccedil;&Atilde;O DO CONSUMO INTRADOMICILIAR DE &Aacute;GUA POR EQUIPAMENTO ",
        author: "Gabriella Laura P.Botelho, Vivian Carla Alves, Asher Kiperstok, Ana Paula Garcia, Fred Augusto Anuncia&ccedil;&atilde;o Silva, Karla Oliveira Esquerre",
        date: "20 de Setembro de 2009",
        semester: "2009.2",
        pdf: "Documentos/Artigos/PROPOSIÇÃO DE METODOLOGIA DE CARATERIZAÇÃO DO CONSUMO INTRADArtigo - OMICILIAR DE ÁGUA POR EQUIPAMENTO.pdf"
    },
    {
        title: "Id&eacute;ias Inovadoras em Gest&atilde;o Universit&aacute;ria",
        author: "_",
        date: "00 de Outubro de 2011",
        semester: "2011.2",
        pdf: "Documentos/Artigos/RELATÓRIO  - Ideias inovadoras_Gestão universitária-Aguapura.pdf"
    },
    {
        title: "GEST&Atilde;O AMBIENTAL NA UFBA SOB A PERSPECTIVA DOS EIXOS TEM&Aacute;TICOS DA A3P",
        author: "ANDR&Eacute;IA L&Eacute; DIAS",
        date: "_",
        semester: "2014.2",
        pdf: "Documentos/Dissertações/DISSERTAÇÃO - ANDREIA LÉ DIAS - GESTÃO AMBIENTAL NA UFBA SOB A PERSPECTIVA DOS EIXOS TEMÁTICOS  DA A3P.pdf"
    },
    {
        title: "Water conservation as a tool to support sustainable practices in a Brazilian publicuniversity",
        author: "Maerbal Marinho, Maria do Socorro Gon&ccedil;alves, Asher Kiperstok",
        date: "15 de Maio 2012",
        semester: "2012.1",
        pdf: "Documentos/Dissertações/TESE - Maerbal_Journal Clean Production 07_2013.pdf"
    },
    {
        title: "MONITORAMENTO DO CONSUMO DE &Aacute;GUA EM PR&Eacute;DIOS UNIVERSIT&Aacute;RIOS: METODOLOGIA E RESULTADOS",
        author: "Sandira L&iacute;via Moraes FONSECA, Luciano Matos QUEIROZ, Maria do Socorro Gon&ccedil;alves, Asher Kiperstok",
        date: "11 de Julho 2012",
        semester: "2010.2",
        pdf: "Documentos/Resumos/RESUMO - SANDIRA - MONITORAMENTO DO CONSUMO DE ÁGUA EM PRÉDIOS UNIVERSITÁRIOS_  METODOLOGIA E RESULTADOS.pdf"
    },
    {
        title: "TECBAHIA - REVISTA BAIANA DE TECNOLOGIA",
        author: "Diversos",
        date: "00 de Janeiro 2008",
        semester: "2008.1",
        pdf: "Documentos/Revistas/Pólo Industrial de Camaçari - 30 Anos - TECBAHIA Digital v 23 n 1-3 2008.pdf"
    },
    {
        title: "Sustentabilidade Ambiental: Produ&ccedil;&atilde;o e Consumo",
        author: "Asher Kiperstok",
        date: "00 de Janeiro 2006",
        semester: "2006.1",
        pdf: "Documentos/Revistas/Revista Ciencias Exatas.pdf"
    },
    {
        title: "A gest&atilde;o de oferta e demanda para pensar o futuro energ&eacute;tico brasileiro",
        author: "Asher Kiperstok",
        date: "00 de Setembro 2013",
        semester: "2013.2",
        pdf: "Documentos/Revistas/Revista_asher_A gestão de oferta e demanda para pensar o futuro energético brasileiro.pdf"
    },
    {
        title: "BAHIA AN&Aacute;LISE & DADOS",
        author: "Diversos",
        date: "00 de Abril 2011",
        semester: "2011.1",
        pdf: "Documentos/Revistas/Revista_Asher_AnaGarcia_Bahia_Analise_e_Dados-MudancasClimatica_AbastecimentoAgua.pdf"
    },
    {
        title: "ENTREVISTA ASHER KIPERSTOK",
        author: "Asher Kiperstok",
        date: "13 de Mar&ccedil;o 2011",
        semester: "2011.1",
        pdf: "Documentos/Revistas/Revista_Muito.pdf"
    },
];
    // ... seu array de artigos completo

let selectedButton = null;


function filterArticles(semester) {
    // Encontra o botão correspondente ao semestre
    const buttons = document.querySelectorAll('.date-filter .btn-link');
    const button = Array.from(buttons).find(btn => btn.textContent === semester);
    
    if (!button) return; // Proteção caso não encontre o botão
    
    if (selectedButton === button) {
        // Se clicar no mesmo botão, remove a seleção
        button.classList.remove('btn-selected');
        selectedButton = null;
        displayArticles(articles);
    } else {
        // Remove seleção anterior e seleciona o novo
        if (selectedButton) selectedButton.classList.remove('btn-selected');
        button.classList.add('btn-selected');
        selectedButton = button;
        
        // Filtra os artigos
        const filteredArticles = articles.filter(article => article.semester === semester);
        displayArticles(filteredArticles);
    }
}

function displayArticles(articlesToDisplay) {
    const articleListContainer = document.getElementById("articleListContainer");
    articleListContainer.innerHTML = "";
    
    if (articlesToDisplay.length === 0) {
        articleListContainer.innerHTML = '<div class="text-center py-5"><p>Nenhum artigo encontrado</p></div>';
        return;
    }
    
    articlesToDisplay.forEach(article => {
        const articleItem = document.createElement("div");
        articleItem.classList.add("article-item");

        const pdfAvailable = article.pdf && !article.pdf.includes('undefined');
        
        articleItem.innerHTML = `
            <h5>${article.title}</h5>
            <p class="article-author">${article.author || "Autor Desconhecido"}</p>
            <p class="article-date">${article.date}</p>
            ${pdfAvailable ? `
            <div class="d-flex justify-content-between align-items-center mt-2">
                <a href="${article.pdf}" class="btn btn-sm btn-primary" download>
                    <i class="fa fa-download"></i> Baixar PDF
                </a>
                <a href="${article.pdf}" class="btn btn-sm btn-outline-primary" target="_blank">
                    <i class="fa fa-eye"></i> Visualizar
                </a>
            </div>
            ` : '<p class="text-muted">PDF não disponível no momento</p>'}
        `;
        
        articleListContainer.appendChild(articleItem);
    });
}

function searchArticles() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm) ||
        (article.author && article.author.toLowerCase().includes(searchTerm))
    );
    displayArticles(filteredArticles);
}

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listeners
    document.getElementById("searchButton").addEventListener("click", searchArticles);
    document.getElementById("searchInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") searchArticles();
    });
    
    // Inicializar a lista de artigos
    displayArticles(articles);
});