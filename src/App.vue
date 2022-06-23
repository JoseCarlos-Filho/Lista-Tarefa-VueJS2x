<template>
	<div id="app">
		<h1>Tarefas</h1>
    <TaskGrid :tasks="tasks"/>
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue';

export default {
  components: { TaskGrid },
  // criando tarefas de forma manual.
  data() {
    return {
      tasks: [
         { name: 'Lavar a louça', pending: false },
         { name: 'Comprar blusa', pending: true }
      ]
    }
  }
}
</script>

<style>
	@import './estilosToDoList/app.sass';
</style>
