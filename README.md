# paduch.dev

Este repositório contém o código fonte do meu portfólio pessoal. O site foi construído em React + TypeScript utilizando Vite para o build e Tailwind CSS para estilização.

## Sobre o Projeto

O objetivo é apresentar de forma objetiva minhas principais habilidades, projetos e depoimentos de clientes. O aplicativo é dividido em seções que podem ser acessadas através do menu de navegação:

- **Hero** – apresenta um resumo sobre minhas áreas de atuação e um link para download do CV.
- **Sobre** – traz informações gerais e uma lista de skills técnicas agrupadas por categoria.
- **Projetos** – mostra alguns trabalhos relevantes, exibindo descrição, tecnologias utilizadas e links.
- **Depoimentos** – feedback de clientes sobre as soluções entregues.
- **Contato** – informações para entrar em contato e formulário para envio de mensagens.

Os textos e listas exibidos nessas seções estão em `src/data` e podem ser facilmente alterados.

## Tecnologias Principais

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desenvolvimento e build
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [Lucide](https://lucide.dev/) para ícones

## Estrutura de Pastas

```
src/
├── components/   # componentes React reutilizáveis
├── data/         # listas de projetos, skills e depoimentos
├── types/        # definições TypeScript compartilhadas
├── index.css     # estilos globais e utilidades do Tailwind
├── main.tsx      # ponto de entrada da aplicação
└── App.tsx       # layout principal
```

## Comandos

Instale as dependências e rode o projeto em modo de desenvolvimento:

```bash
npm install
npm run dev
```

Para gerar o build de produção:

```bash
npm run build
```

Você também pode verificar o bundle gerado localmente com:

```bash
npm run preview
```

Para checar problemas de estilo ou possíveis erros de código:

```bash
npm run lint
```

## Configuração

- Os estilos personalizados estão definidos em `tailwind.config.js`.
- O comportamento do Vite está em `vite.config.ts`.
- Configurações de lint no arquivo `eslint.config.js`.

## Como Contribuir

Este repositório tem fins de portfólio e não há planos de aceitar contribuições externas. Sinta-se livre para explorar o código e utilizar trechos como referência em seus projetos.

---

Feito com ❤️, código e muito café.
