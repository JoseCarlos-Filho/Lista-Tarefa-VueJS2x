<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <!-- v-for gera as divs com as tarefas.-->
            <TaskState v-for="task in tasks" :key="task.name" :task="task" class="task"></TaskState>
        </template>
        <p v-else class="no-task">Nenhuma tarefa registrada!</p>
    </div>

</template>

<script>
import TaskState from './TaskState.vue'
export default {
    components: { TaskState },
    props: {
        tasks: { type: Array, required: true }
    }
}

</script>

<style>
@import '../estilosToDoList/taskgrid.sass';
</style>