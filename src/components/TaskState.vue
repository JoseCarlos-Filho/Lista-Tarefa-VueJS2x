<template>
    <!-- nesta div é chamada a propriendade computada stateClass -->
    <div 
        @click="$emit('mudaEstadoTarefa', task)"
        class="task-state" 
        :class="stateClass">
        <span @click.stop="$emit('apagaTarefa', task)" class="close">x</span>
        <!-- Interpolação da tarefa posteriormente tratada como objeto em props -->
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: { 
        task: { type: Object, required: true },
    },  
    computed: {
        stateClass() {
            return {
                // classe css que vefirica se esta marcado ou não a tarefa.
                pending: this.task.pending, 
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
@import '../estilosToDoList/taskstate.sass';
</style>