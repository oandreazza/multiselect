<template>
    <span @click="edit" class="c-multiselect__icon">
        <i class="fa fa-pencil-alt"></i>
    </span>
</template>

<script>
export default {
    methods: {
        edit(){
            this.$emit('edit')
        }
    }
}
</script>

<style>

</style>
