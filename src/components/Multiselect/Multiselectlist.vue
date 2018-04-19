<template>
    <div class="c-multiselect__list-items-container">
        <label v-if="label">{{ label }}</label>
        <div class="c-multiselect__list">
            <ul class="list-group list-group-flush">
                <slot></slot>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    props:{
        label:{
            type: String
        }
    }
}
</script>

<style>

</style>
