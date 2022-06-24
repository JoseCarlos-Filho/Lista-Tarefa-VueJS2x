<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="adicionar" type="text">
        <button @click="adicionar">+</button>    
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

</style>