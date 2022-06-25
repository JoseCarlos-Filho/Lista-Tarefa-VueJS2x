<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="adicionar" type="text"
            class="form-element" placeholder="Nova Tarefa?">
        <button @click="adicionar" class="form-element">+</button>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    methods: {
        adicionar() {
            this.$emit('tarefaAdicionado', { name: this.name });
            this.name = '';
        }
    }
}
</script>

<style>
@import '../estilosToDoList/newtask.sass';
</style>