<template>
    <div class="c-multiselect__list-items-container">
      <label v-if="label">{{ label }}</label>
      <div class="c-multiselect__list">
        <list-loading v-if="loading"></list-loading>
        <ul v-else class="list-group list-group-flush">
          <slot/>
        </ul>
      </div>
    </div>
</template>

<script>
import ListLoading from '../ListLoading'
export default {
    components: { ListLoading },
    props:{
        label:{
            type: String
        },
        loading:{
            type: Boolean
        }
    }
}
</script>

<style>

</style>
