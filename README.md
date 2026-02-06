# 🎵 Zingen – Landing Page de Aplicativo de Karaokê

---

## 📌 Objetivo

Desenvolver uma página de apresentação para um aplicativo fictício de karaokê contendo:

- Seção hero
- Apresentação do produto
- Funcionalidades
- Planos e preços
- Download
- Footer estruturado

Aplicando boas práticas de layout responsivo e organização de código.

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- Mobile-First
- CSS Grid
- Flexbox
- Variáveis CSS (Design Tokens)
- Media Queries modernas (`width >= 80em`)
- Modularização de CSS
- Google Fonts (Inter)
- Font Awesome

---

## 🧠 Arquitetura de Estilos

O projeto foi estruturado em camadas:

### global.css

- Reset moderno
- Tokens de design (cores, tipografia, espaçamentos)
- Configurações base e responsividade global

### utility.css

- Helpers reutilizáveis (flex, grid, gaps)
- Container adaptável
- Classes utilitárias para espaçamento

### buttons.css

- Sistema de botões reutilizável
- Estados de hover com gradiente
- Variante com `aria-label` usando pseudo-elementos

### features.css / pricing.css / download.css

- Layouts complexos com Grid
- Componentização visual
- Ajustes específicos para desktop

---

## 📱 Responsividade

O projeto foi construído com abordagem **mobile-first**:

- Layout inicial pensado para dispositivos móveis
- Media query principal em `80em`
- Reestruturação completa de grids no desktop
- Controle de elementos visíveis via `.desktop-only`

---

## 🎯 Conceitos Aplicados

- Design System básico com variáveis CSS
- Componentização visual
- Organização modular por responsabilidade
- Layout avançado com CSS Grid
- Pseudo-elementos para efeitos visuais
- Gradientes aplicados via background-clip
- Controle de overflow e layout adaptativo
