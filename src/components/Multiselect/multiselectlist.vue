<template>
      <div class="c-multiselect__list-items-container -padding-large">
      <label>{{ label }}</label>
      <div class="c-multiselect__list">
        <ul class="list-group">
          <slot/>
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
