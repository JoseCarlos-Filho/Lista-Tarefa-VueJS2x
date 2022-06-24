<template>
	<div id="app">
		<h1>Tarefas</h1>
    <NewTask />
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
  }
}
</script>

<style>
	@import './estilosToDoList/app.sass';
</style>
