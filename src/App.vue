<template>
	<div id="app">
		<h1>Tarefas</h1>
    <TasksProgress :progress="progress" />
    <NewTask @tarefaAdicionado="adicionarTarefa"/>
    <TaskGrid :tasks="tasks"
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
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;
      return Math.round(done / total * 100) || 0;
    }
  },

  methods: {
    adicionarTarefa(task) {
      const algumNome = t => t.name === task.name;
      const realmenteNovo = this.tasks.filter(algumNome).length == 0;
      // validação para não inserir itens duplicados(tarefas) na lista. 
      if(realmenteNovo) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
      }
    },

    tarefaApaga(indice) {
      this.tasks.splice(indice, 1);
    },

    marcaEstadoTarefa(indice) {
      this.tasks[indice].pending = !this.tasks[indice].pending;
    }
  }
}
</script>

<style>
	@import './estilosToDoList/app.sass';
</style>
