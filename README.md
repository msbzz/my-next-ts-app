 

# Estudo de Grupos de Rotas no Next.js

## **Visão Geral**

Este projeto, **"Grupos de Rotas Invisíveis no Next.js"**, é uma iniciativa de estudo para explorar e compreender o comportamento das "pastas invisíveis" (Grupos de Rotas) no Next.js. O objetivo principal é demonstrar como pastas como `(admin)` e `(public)` podem ser usadas para organizar rotas logicamente sem impactar a estrutura das URLs.

## **Objetivos do Projeto**

Este projeto tem como objetivo:

- Compreender como **Grupos de Rotas** podem ajudar a estruturar projetos.
- Explorar o comportamento de pastas "invisíveis" (ex.: `(admin)`, `(public)`).
- Criar layouts reutilizáveis e manter URLs limpas.
- Implementar navegação básica e estilização usando TypeScript.

## **Funcionalidades**

- **Grupos de Rotas Invisíveis**: Pastas como `(admin)` e `(public)` organizam as rotas sem aparecer nas URLs.
- **Navegação Dinâmica**: Menu de navegação para acesso a diversas rotas.
- **Layouts**: Uso de layouts para agrupar páginas relacionadas.
- **Integração com TypeScript**: Projeto totalmente implementado em TypeScript para maior segurança.
- **Estilização Responsiva**: Estilização modular com CSS isolado.

## **Estrutura de Pastas**

```plaintext
my-nextjs-project/
├── src/
│   ├── app/
│   │   ├── (admin)/
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx        # Página do Painel Admin
│   │   │   │   └── layout.tsx      # Layout do Admin
│   │   ├── (public)/
│   │   │   ├── home/
│   │   │   │   ├── page.tsx        # Página Pública Inicial
│   │   │   │   └── style.module.css # Estilo da Página Inicial
│   │   │   ├── about/
│   │   │   │   ├── page.tsx        # Página Sobre Nós
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Menu de Navegação
│   │   │   └── Navbar.module.css   # Estilo do Menu
│   │   ├── layout.tsx              # Layout Global
│   │   ├── page.tsx                # Página Raiz
│   │   └── globals.css             # Estilos Globais
├── next.config.ts                   # Configuração do Next.js
├── tsconfig.json                    # Configuração do TypeScript
└── package.json                     # Dependências do Projeto
```

## **Como Funciona**

- **Pastas Invisíveis**: 
  - `(admin)` e `(public)` são usadas para agrupar rotas logicamente.
  - Essas pastas não aparecem na estrutura das URLs.
  - Exemplo:
    - Arquivos em `src/app/(public)/home/page.tsx` são acessíveis via `/home`.
    - Arquivos em `src/app/(admin)/dashboard/page.tsx` são acessíveis via `/dashboard`.

- **Navegação**:
  - Um componente global `Navbar` fornece links para todas as rotas.
  - O menu inclui links para `/`, `/home`, `/about` e `/dashboard`.

- **Redirecionamento**:
  - A URL raiz (`/`) redireciona automaticamente para `/home` usando o recurso de redirecionamento do Next.js.

## **Como Instalar**

1. Clone este repositório:

   ```bash
   git clone https://github.com/msbzz/my-next-ts-app.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000`.

## **Rotas Disponíveis**

| URL          | Descrição                           |
|--------------|-------------------------------------|
| `/`          | Redireciona para `/home`.          |
| `/home`      | Página Inicial Pública.            |
| `/about`     | Página Sobre Nós (pública).        |
| `/dashboard` | Página do Painel Administrativo.   |

## **Tecnologias Utilizadas**

- **Next.js**: Framework para aplicações baseadas em React.
- **TypeScript**: Tipagem estática para JavaScript.
- **CSS Modules**: CSS isolado para gerenciar estilos.
- **React**: Biblioteca para construção de interfaces de usuário.

## **Notas de Aprendizado**

1. **Grupos de Rotas Invisíveis**:
   - Pastas prefixadas com `()` organizam rotas sem afetar as URLs.
   - Úteis para separação lógica, como rotas públicas e administrativas.

2. **Layouts**:
   - Fácil implementação de múltiplos layouts (global e específicos).

3. **Navegação Dinâmica**:
   - Um único componente de menu torna a navegação simples e eficiente.

## **Próximos Passos**

- Adicionar autenticação para rotas administrativas.
- Explorar layouts aninhados para estruturas mais complexas.
- Testar outros recursos avançados do Next.js, como Middleware e rotas de API.
 