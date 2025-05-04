//ATIVIDADE 2


//Lista de compras
let Lista = [
    { titulo: "Carne moída", concluida: false },
    { titulo: "Manga", concluida: false },
    { titulo: "Frango", concluida: false }
  ];
  

  //função para apresentar todos os itens da lista, com a opção de confirmar
  function mostrarLista() {
    console.log("Lista de Compras:");
    Lista.forEach((item, index) => {
      const status = item.concluida ? "[x]" : "[ ]";
      console.log(`${index + 1}. ${status} ${item.titulo}`);
    });
  }
  
  //função para marcar como concluido algum item
  
  function concluirTarefa(indice) {
    if (Lista[indice]) {
      Lista[indice].concluida = true;
      console.log(` -Tarefa que foi concluída: [X] "${Lista[indice].titulo}"`);
    } else {
      console.log("[ ] Tarefa não encontrada.");
    }
  }
  
  // Execução do codigo
  mostrarLista();

  concluirTarefa(1); // Marcar "Manga" como concluido

  mostrarLista(); //Mostra a lista novamente, agora com um item confirmado.
  
