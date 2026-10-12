# 🛍️ Desafio Front-End - Econverse E-Commerce

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Desenvolvimento de uma landing page funcional e responsiva de e-commerce baseada no layout do **Desafio Front-End Econverse**, com foco na fidelidade visual ao protótipo do Figma, componentização e consumo de dados de produtos.

---

## Sumário

Interface front-end construída com React, TypeScript e Vite. O título definido em `index.html` é **Econverse**. O `package.json` ainda mantém o nome `"sass"` e a descrição padrão de um template React + Vite; por isso, esses metadados não descrevem completamente a aplicação.

## Tecnologias e versões declaradas

Versões conforme `package.json` (os prefixos `^` e `~` são mantidos como declarados):

| Tecnologia/pacote | Versão declarada |
|---|---:|
| React | `^19.2.8` |
| React DOM | `^19.2.8` |
| Vite | `^8.3.0` |
| TypeScript | `~6.0.2` |
| Sass | `^1.105.1` |
| ESLint | `^10.10.0` |
| `@vitejs/plugin-react` | `^6.1.1` |
| `typescript-eslint` | `^8.69.0` |
| `@eslint/js` | `^10.0.1` |
| `eslint-plugin-react-hooks` | `^7.1.1` |
| `eslint-plugin-react-refresh` | `^0.5.6` |
| `globals` | `^17.12.0` |
| `@types/node` | `^24.13.3` |
| `@types/react` | `^19.2.18` |
| `@types/react-dom` | `^19.2.7` |

## Requisitos

- Node.js e npm instalados.
- Acesso à internet para instalar as dependências e carregar os recursos externos referenciados em `index.html` e os produtos da API.

## 📂 Estrutura e Componentes da Página

```text
front-end/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── Logo.png
│   │   ├── black_friday.jpg
│   │   ├── favicon.jpg
│   │   └── parceiro.jpg
│   ├── components/
│   │   ├── Categorias.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Icones.tsx
│   │   ├── Marcas.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── Novidades.tsx
│   │   ├── Parceiros.tsx
│   │   ├── ProdRelacionados.tsx
│   │   └── ProdutosComTab.tsx
│   ├── services/
│   │   └── useProducts.ts
│   ├── utils/
│   │   └── formatPrice.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── index.scss
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

## Instalação e execução

Clone o repositório e entre na pasta:

```bash
https://github.com/luhdias-png/teste-front-end.git
cd front-end
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts disponíveis

Os scripts abaixo são os que constam em `package.json`:

| Comando | O que executa |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Executa `tsc -b` e, se a verificação terminar sem erro, `vite build`. |
| `npm run preview` | Inicia a pré-visualização local do build de produção do Vite. |
| `npm run lint` | Executa `eslint .`. |
| `npm run compilar` | Compila `src/index.scss` para `src/index.css` usando Sass. |
| `npm run observar` | Executa Sass em modo de observação, recompilando `src/index.css` quando `src/index.scss` muda. |

### Build de produção

```bash
npm run build
npm run preview
```

### Estilos Sass

O `package.json` define a compilação explícita de `src/index.scss` para `src/index.css`:

```bash
npm run compilar
```

Para deixar a compilação observando alterações no arquivo SCSS:

```bash
npm run observar
```

O ponto de entrada `src/main.tsx` importa `./index.css`. Portanto, o navegador recebe o CSS gerado; o arquivo SCSS é a fonte de estilos para o script Sass.

## Como os produtos são carregados

O hook `useProducts`, em `src/services/useProducts.ts`, define o tipo `Product` e é responsável por buscar os produtos da API Econverse.

**Endpoint original da API:**

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

O formato esperado da resposta é um objeto JSON com a propriedade `products`, contendo a lista de produtos. Cada produto utiliza os seguintes campos:

- `productName: string`: nome do produto.
- `photo: string`: URL da imagem do produto.
- `price: number`: preço do produto.
- `descriptionShort: string`: descrição resumida do produto.

### Requisições à API

Durante o desenvolvimento local, a aplicação utiliza o caminho `/api/produtos.json` para consultar os produtos. O proxy configurado no Vite encaminha essa requisição para o endpoint original da API Econverse.

Essa configuração evita que a aplicação precise consultar diretamente o domínio externo pelo navegador durante o desenvolvimento, ajudando a contornar possíveis restrições de CORS.

### Tratamento de erros

A aplicação verifica se a resposta HTTP foi bem-sucedida. Se a requisição falhar ou os dados não puderem ser processados corretamente, o estado de erro é ativado e a lista de produtos é limpa.

A aplicação não utiliza mais `mockProducts` como alternativa à API. Dessa forma, os produtos exibidos dependem do carregamento bem-sucedido dos dados remotos.

### Como verificar a API localmente

Após iniciar o servidor de desenvolvimento, acesse:

`http://localhost:5173/api/produtos.json`

A resposta deve apresentar os dados retornados pela API. Caso ocorra uma falha, verifique a conectividade com o endpoint original, a configuração do proxy em `vite.config.ts` e possíveis restrições de acesso.

**Observação:** o proxy configurado no Vite é destinado ao desenvolvimento local. Ele não fica automaticamente disponível no ambiente de produção. Para publicar a aplicação, é necessário garantir que a API permita requisições da origem publicada ou disponibilizar um encaminhamento equivalente no ambiente de hospedagem.

## Organização da aplicação

Arquivos de entrada identificados:

- `index.html`: documento HTML, título `Econverse`, elemento `#root` e entrada `/src/main.tsx`. Também referencia as fontes Google Fonts Poppins e Work Sans e a folha Font Awesome 4.7.0 por CDN.
- `src/main.tsx`: importa `src/index.css`, importa `App` e monta a aplicação dentro de `React.StrictMode`.
- `src/App.tsx`: compõe as seções da página, chama `useProducts`, controla a categoria ativa, o produto selecionado, a quantidade no modal e a contagem do carrinho.
- `src/services/useProducts.ts`: tipo `Product`, busca remota e tratamento de erros.
- `src/components/`: componentes da interface.
- `src/assets/`: inclui o recurso de logo importado por `App.tsx` como `./assets/Logo.png`.
- `src/index.scss`: fonte SCSS dos estilos.
- `src/index.css`: CSS importado pela entrada da aplicação e destino da compilação Sass.
- `public/`: diretório de recursos públicos do projeto.
- `vite.config.ts`: configuração do Vite, incluindo o proxy utilizado no desenvolvimento local para encaminhar as requisições de produtos à API Econverse.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` e `eslint.config.js`: arquivos de configuração presentes na raiz.

### Componentes utilizados por `App.tsx`

- `Header`: exibe mensagens informativas de compra, logo, campo de busca, ações de cabeçalho e menu móvel; recebe `cartCount` e `logoSrc`.
- `Navbar`: seção de navegação renderizada logo após o cabeçalho.
- `Hero`: seção de destaque da página.
- `Categorias`: recebe a lista de categorias, a categoria ativa e a função para alterá-la.
- `ProdutosComTabs` (implementado em `ProdutosComTab.tsx`): mostra tabs e uma prateleira/carrossel de produtos; recebe os produtos e a função de abrir o modal. O número padrão de itens por página é quatro.
- `ProdRelacionados`: mostra outra prateleira/carrossel de produtos relacionados, com setas de navegação e ação para abrir o modal. O número padrão de itens por página é quatro.
- `Parceiros`: seção de parceiros, renderizada duas vezes por `App.tsx`.
- `Marcas`: seção de marcas.
- `Novidades`: seção de novidades.
- `Footer`: rodapé.
- `Modal`: exibe os dados do produto selecionado, permite alterar a quantidade (mínimo de um), fechar a janela e acionar a compra; recebe as funções e os valores necessários por props.
- `Icons` (importado de `Icones.tsx`): conjunto de ícones usado por componentes como `Header`, `Categorias` e as prateleiras de produtos.

`App.tsx` renderiza as seções nesta ordem: `Header`, `Navbar`, `Hero`, `Categorias`, a prateleira `ProdutosComTabs` (quando o carregamento termina sem erro), `Parceiros`, `ProdRelacionados`, novamente `Parceiros`, `Marcas`, novamente `ProdRelacionados`, `Novidades` e `Footer`. O `Modal` aparece condicionalmente quando há um produto selecionado.

## Formatação de preços

Os componentes `App.tsx`, `ProdutosComTab.tsx` e `ProdRelacionados.tsx` formatam valores com `Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })`. Não foi possível confirmar um arquivo independente `src/utils/formatPrice.ts` na versão consultada; a formatação observada está implementada diretamente nesses arquivos. Não há neste README a afirmação de que exista um utilitário separado.

## Testes

Não há script `test` declarado em `package.json`. Assim, este projeto não documenta um comando de testes automatizados. Para validar os tipos e gerar o build, use `npm run build`; para verificar as regras do ESLint, use `npm run lint`.

## Configurações

- `vite.config.ts`: configuração do Vite e do proxy utilizado no desenvolvimento local.
- `tsconfig.json`, `tsconfig.app.json` e `tsconfig.node.json`: configurações do TypeScript usadas pelo projeto; o script de build chama `tsc -b`.
- `eslint.config.js`: configuração do ESLint; o script de lint executa `eslint .`.

Para detalhes específicos de opções internas desses arquivos de configuração, consulte diretamente os arquivos versionados no repositório.

## Autor

Desenvolvido por André Lucas Dias Lima.
