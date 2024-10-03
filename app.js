function pesquisar() {
    
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa')
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = `<p class="mensagem-erro">Nada foi encontrado. Você precisa digitar o nome de um personagem!</p>`
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";


    // Itera sobre cada dados da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        // Se titulo ou descrição includes campoPesquisa
        if (titulo.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `<div class="container">
            <img class="logo" src="${dado.logo}" alt="Logo vagalumes">
            <img class="personagem" src="${dado.imagem}" alt="Ellie">
            <h2 class="titulo">
                <a href=${dado.link} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="texto">${dado.descricao}</p>
        </div>`;
        }
       
    }
    
    if (!resultados) {
       resultados = `<p class="mensagem-erro">Nada foi encontrado</p>`
    }

    section.innerHTML = resultados 
}
