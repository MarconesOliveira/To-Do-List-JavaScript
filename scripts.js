//Vetores com as Tarefas
let to_do = [];
let doing = [];
let done = [];
//Popular os vetores de Tarefas
to_do.push("Estudar pra Prova de Redes");
doing.push("Trabalho de Javascript");
done.push("Relatório de Estatística");
//Seletores DOM que serão usados
const form = document.querySelector(".new_activity");
const list_to_do = document.querySelector(".to_do");
const list_doing = document.querySelector(".doing");
const list_done = document.querySelector(".done");
//Função para atualizar e imprimir as listas no HTML
update_lists = () => {
  clear_lists();
  to_do.forEach((element, index) => {
    let item = create_element(element, index);
    list_to_do.appendChild(item);
  });
  doing.forEach((element, index) => {
    let item = create_element(element, index);
    list_doing.appendChild(item);
  });
  done.forEach((element, index) => {
    let item = create_element(element, index);
    list_done.appendChild(item);
  });
};
//Limpa as listas do HTML para não haver duplicatas
clear_lists = () => {
  list_to_do.innerHTML = "";
  list_doing.innerHTML = "";
  list_done.innerHTML = "";
}
//Cria o elemento para ser inserido no HTML
create_element = (element, index) => {
  let paragraph = document.createElement("p");
  paragraph.className = index;
  let textNode = document.createTextNode(element);
  paragraph.appendChild(textNode);
  return paragraph;
} 

update_lists();

//Evento ligado a inserção de uma nova tarefa
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let text = document.querySelector("#activity").value;
  to_do.push(text);
  document.querySelector("#activity").value = "";
  update_lists();
});
//Evento relacionado a marcar uma atividade "A Fazer"
let _to_do = document.querySelectorAll(".to_do");
_to_do.forEach(element => {
  element.addEventListener("click", (event) => {
    doing.push(event.target.innerHTML);
    delete to_do[event.target.className];
    alert("O item selecionado vai ser movido para o status Fazendo.");
    update_lists();
 });
});
//Evento relacionado a marcar uma atividade "Fazendo"
let _doing = document.querySelectorAll(".doing[class]");
_doing.forEach(element => {
  element.addEventListener("click", (event) => {
    done.push(event.target.innerHTML);
    delete doing[event.target.className];
    alert("O item selecionado vai ser movido para o status Feito.");
    update_lists();
 });
});
//Evento relacionado a marcar uma atividade "Feito"
let _done = document.querySelectorAll(".done");
_done.forEach(element => {
  element.addEventListener("click", (event) => {
    doing.push(event.target.innerHTML);
    delete done[event.target.className];
    alert("O item selecionado vai ser movido para o status Fazendo.");
    update_lists();
 });
});

//Search bar
let userInput = document.querySelector("#search");
userInput.addEventListener("keyup", (event) => {
  console.log(event.target.value);
  filtrarListas(event.target.value);
});

//Filtrar Cardápio
filtrarListas = (userInput) => {
  userInput = userInput.toUpperCase();
  let tarefas = document.querySelectorAll("p");
  tarefas.forEach(element => {
    let text = element.textContent.toUpperCase();
    if(text.indexOf(userInput) < "0"){
      element.style = "display: none;";
    } else {
      element.style = "display: flex";
    }
  });
}