# 📰 Portal de Notícias – Tech News

---

## 📌 Objetivo

Construir um portal de notícias estático aplicando:

- Estruturação semântica com HTML5
- Layout complexo utilizando CSS Grid
- Modularização de arquivos CSS
- Uso de variáveis CSS para padronização
- Utility classes para reaproveitamento de estilos
- Organização escalável de pastas

---

## 🖼 Demonstração

Portal estruturado com:

- Header com navegação primária e secundária
- Seção de notícias em destaque
- Mais lidas da semana
- Destaques de Inteligência Artificial
- Aside com conteúdo complementar e anúncios

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- CSS Grid
- Variáveis CSS (Custom Properties)
- Google Fonts (Archivo / Archivo Black)
- Font Awesome

---

## 🧠 Arquitetura de Estilos

O projeto foi organizado em camadas:

### global.css

- Reset
- Variáveis CSS
- Tipografia base
- Layout principal (`grid-template-areas`)

### header.css

- Estilização específica do cabeçalho

### sections.css

- Estilização modular das seções principais
- Uso de `grid-area`
- Aplicação de pseudo-elementos e sobreposição com gradiente

### utility.css

- Classes utilitárias reutilizáveis
- Grid helpers (`grid-flow-col`, `gap-*`)
- Tipografia escalável (`text-xl`, `text-sm`)

---

## 🎯 Pontos Técnicos Trabalhados

- CSS Grid com `grid-template-areas`
- Estrutura de layout em múltiplas colunas
- Modularização de CSS
- Uso de custom properties
- Reutilização via utility classes
- Aplicação de gradiente com pseudo-elemento
- Estrutura escalável de pastas (`src`)
