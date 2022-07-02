<template>
	<div id="app">
		<h1>Tarefas</h1>
    <TasksProgress :progress="progress" />
    <NewTask @tarefaAdicionado="adicionarTarefa"/>
    <TaskGrid 
      :tasks="tasks"
      @mudaEstadoTarefa="marcaEstadoTarefa"
      @apagaTarefa="tarefaApaga" />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue';
import NewTask from './components/NewTask.vue';
import TasksProgress from './components/TasksProgress.vue';

export default {
  components: { TasksProgress, TaskGrid, NewTask },
  // criando tarefas de forma manual.
  data() {
    return {
      tasks: [
        //  { name: 'Lavar a louça', pending: false },
        //  { name: 'Comprar blusa', pending: true }
      ]
    }
  },
  computed: { 
    progress() {
      const total = this.tasks.length; // pega o tamanho do array
      const done = this.tasks.filter(t => !t.pending).length; // através da função filter verifica se esta pendente ou feito.
      return Math.round(done / total * 100) || 0; // retorna o total de tarefas feitas.
    }
  },
  // Assistindo as tasks geradas no array, gerando uma string em JSON.
  watch: {
    // faz um watch profundo, tasks agora é um objeto, ollhando de forma mais profunda
    // os itens no array neste caso olhando cada tasks e os valores de seus atributos
    // olhando so estado de pendente ou não. salvando no localStorage além dos itens,
    // mais também o estado atual da tarefa. 
    tasks: { 
        deep: true,
        handler() {
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
    } 
    // tasks() {
    //   // digite o comando no console: localStore.setItem('tasks')
    //   // para vizualizar as tarefas adicionadas no array e seus atributos.
    //   localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // }
  },

  methods: {
    adicionarTarefa(task) {
      const algumNome = t => t.name === task.name;
      const realmenteNovo = this.tasks.filter(algumNome).length == 0;
      // validação para não inserir itens duplicados(tarefas) na lista. 
      // valida campo vazio.
      if(task.name == "") {
        alert("Tarefa inválida digite alguma tarefa!");
      } else if(realmenteNovo) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
      }
    },

    tarefaApaga(indice) {
      // utiliza a função splice onde passo o indice do array 
      // e quantidade de item, no caso 1 item.
      this.tasks.splice(indice, 1);
    },

    marcaEstadoTarefa(indice) {
      this.tasks[indice].pending = !this.tasks[indice].pending;
    }
  },
  // metodo de ciclo de vida para ler as informações do localStorage
  created() {
    const json = localStorage.getItem('tasks')
    const taskArray = JSON.parse(json)
    // condição que verifica taskArray se de fato é um array caso contrario é um array vazio.
    // No caso a solução aplicada abaixo com operador ternário.
    //  condição de if e else tambem funciona para este tipo de checagem.
    this.tasks = Array.isArray(taskArray) ? taskArray : []
    // if(Array.isArray(taskArray)) {
    //   this.tasks = taskArray;
    // } else {
    //   this.tasks =[]
    // }
  }
}
</script>

<style>
	@import './estilosToDoList/app.sass';
</style>
