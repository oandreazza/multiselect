<template>
    <li
        class="c-multiselect__list-item list-group-item">
        <div>{{ item.description }}</div>
        <div class="l-list-icon-container" style="cursor:pointer">
            <slot v-if="item.checked"></slot>
            <span v-if="item.checked"  class="c-multiselect__icon" @click="toogle">
                <i class="fa fa-check"></i>
            </span>
            <span style="color: rgba(0,0,0,.125);" v-else class="c-multiselect__icon" @click="toogle">
                <i  class="fa fa-check"></i>
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
