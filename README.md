# 🌾 Simulador Financeiro - Grain Tech

Este repositório contém o **Simulador Grain Tech**, uma interface web desenvolvida em HTML e JavaScript puro (Vanilla JS) para auxiliar produtores rurais a tomarem decisões financeiras estratégicas. A aplicação compara de forma interativa os custos de armazenagem prolongada contra os prejuízos de uma venda forçada em momentos de alta oferta.

---

## 🚀 Principais Funcionalidades

*   **Análise de Viabilidade:** Compara matematicamente o custo de manter o grão armazenado versus o deságio imediato praticado pelo mercado.
*   **Conversão Inteligente:** Adapta automaticamente a conversão de toneladas para sacas baseando-se no grão selecionado (60kg para Soja e Milho; 50kg para Arroz).
*   **Projeção de Faturamento:** Calcula o valor bruto potencial da safra caso o silo selecionado seja preenchido em sua capacidade máxima.
*   **Feedback Estratégico:** Fornece mensagens dinâmicas recomendando o armazenamento, alertando sobre custos extras ou apontando o ponto de equilíbrio financeiro.

---

## 🧮 Base de Cálculo e Preços

O simulador utiliza os seguintes valores pré-configurados no script para realizar as projeções financeiras:

| Variável de Mercado | Valor Padrão (R$) |
| :--- | :--- |
| **Custo de Armazenagem** | 3,25 por saca ao mês |
| **Prejuízo (Venda Forçada)** | 20,00 por saca |
| **Preço Base - Soja** | 160,14 a saca |
| **Preço Base - Arroz** | 79,07 a saca |
| **Preço Base - Milho** | 70,93 a saca |

---

## 💻 Como Executar o Projeto

*   Faça o download ou clone os arquivos deste repositório para o seu computador local.
*   Certifique-se de que o arquivo de estilização `style.css` referenciado no cabeçalho esteja salvo na mesma pasta do código HTML.
*   Abra o arquivo HTML utilizando qualquer navegador web moderno (Chrome, Edge, Firefox, Safari).
*   Selecione os parâmetros desejados na tela e clique nos botões de simulação para testar a lógica da aplicação.
