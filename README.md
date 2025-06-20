# paduch.dev

Este repositório reúne o código fonte do meu portfólio pessoal. A aplicação foi construída em **React** com **TypeScript**, utilizando **Vite** para o build e **Tailwind CSS** para a interface visual.

## Visão Geral

O site apresenta minhas principais habilidades, projetos e depoimentos de clientes. Também conta com uma página dedicada ao currículo, que pode ser exportado em PDF nos idiomas português e inglês.

As seções são acessadas pelo menu de navegação:

- **Hero** – resumo das áreas de atuação e link para o currículo.
- **Sobre** – informações gerais e lista de skills agrupadas.
- **Projetos** – trabalhos relevantes com descrição e tecnologias utilizadas.
- **Depoimentos** – feedback de clientes.
- **Contato** – formulário para envio de mensagens.
- **Currículo** – rota `/cv` com versão em tela e `/cv-pdf` ou `/cv-pdf-en` para impressão.

Todo o conteúdo dessas seções está em `src/data` e pode ser facilmente alterado.

## Tecnologias e Bibliotecas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desenvolvimento e build
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [React Router](https://reactrouter.com/) para as rotas
- [Framer Motion](https://www.framer.com/motion/) para animações
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js/) para geração do PDF do currículo
- [Lucide](https://lucide.dev/) para ícones

## Estrutura de Pastas

```text
src/
├── components/   # componentes React reutilizáveis
├── data/         # projetos, skills, depoimentos e CV
├── images/       # imagens usadas no site
├── types/        # definições TypeScript
├── i18n.tsx      # contexto de internacionalização (pt/en)
├── index.css     # estilos globais
├── main.tsx      # ponto de entrada
└── App.tsx       # layout principal
```

## Instalação e Uso

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o modo de desenvolvimento:
   ```bash
   npm run dev
   ```

### Scripts Disponíveis

- `npm run build` – gera o bundle de produção em `dist/`.
- `npm run preview` – serve o bundle gerado localmente.
- `npm run lint` – executa o ESLint para verificar problemas.

## Personalização

- Ajuste cores e temas em `tailwind.config.js`.
- Modifique textos e listas em `src/data`.
- A troca de idioma é controlada pelo `LangProvider` em `src/i18n.tsx`.

## Contribuição

Este projeto é parte do meu portfólio e não recebe contribuições externas. Fique à vontade para estudar o código e utilizar o que for útil em seus próprios projetos.

---

Feito com ❤️, código e muito café.
