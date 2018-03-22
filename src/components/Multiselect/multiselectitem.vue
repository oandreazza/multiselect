<template>
    <li
        class="c-multiselect__list-item list-group-item list-group-item-action" @click="toogle">
        <div>{{ item.description }}</div>
        <div class="l-list-icon-container">
            <span v-if="item.checked" class="c-multiselect__icon-checked">
            <i class="fa fa-check"></i>
            </span>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: {}
    },
    index: {
        type: Number,
        required: true
    }
  },
  methods: {
    toogle() {
        this.$emit('toggle', { index: this.index, item: this.item })
    }
  }
}
</script>

<style>

</style>
