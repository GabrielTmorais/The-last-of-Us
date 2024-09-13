# The Last of Us - Pesquisa de Personagens

Este projeto é uma aplicação web simples que permite aos usuários pesquisar por personagens de "The Last of Us" utilizando JavaScript, HTML e CSS. A aplicação exibe resultados de pesquisa com base na entrada do usuário e mostra detalhes sobre cada personagem.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página web.
- **CSS**: Estilização da página para tornar a interface mais agradável (não fornecido no código, mas mencionado no HTML).
- **JavaScript**: Lógica para realizar a pesquisa e manipular o DOM.
- **Audio**: Reproduz uma faixa de áudio relacionada ao jogo quando a página é carregada.

## Estrutura do Projeto

### 1. `index.html`

Este arquivo define a estrutura da página web. Contém:
- Um campo de entrada para pesquisa.
- Um botão para acionar a função de pesquisa.
- Uma seção para exibir os resultados da pesquisa.
- Um elemento de áudio que é carregado e reproduzido automaticamente.

### 2. `app.js`

Este arquivo contém o código JavaScript para a lógica da pesquisa. Ele inclui:
- **Função `pesquisar()`**: Esta função é chamada quando o usuário clica no botão de pesquisa. Ela faz o seguinte:
  - Obtém o valor do campo de pesquisa e o transforma em minúsculas.
  - Itera sobre uma lista de dados (`dados`) e verifica se o título dos itens contém o texto da pesquisa.
  - Atualiza a seção de resultados com os itens encontrados ou uma mensagem de erro se nenhum item for encontrado.
  - Inicialmente, oculta o elemento de áudio ao carregar a página.

## Como Executar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/the-last-of-us.git
   ```

2. **Abra o Arquivo `index.html`**

   Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador.

3. **Visualize a Aplicação**

   A aplicação será carregada no navegador, permitindo que você pesquise por personagens e veja os resultados correspondentes.

## Contribuições

Se você deseja contribuir para este projeto, sinta-se à vontade para fazer um fork do repositório e enviar pull requests. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
