<template>
	<div id="app">
		<h1>Tarefas</h1>
    <NewTask @tarefaAdicionado="adicionarTarefa"/>
    <TaskGrid :tasks="tasks"/>
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue';
import NewTask from './components/NewTask.vue';

export default {
  components: { TaskGrid, NewTask },
  // criando tarefas de forma manual.
  data() {
    return {
      tasks: [
         { name: 'Lavar a louça', pending: false },
         { name: 'Comprar blusa', pending: true }
      ]
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
    }
  }
}
</script>

<style>
	@import './estilosToDoList/app.sass';
</style>
