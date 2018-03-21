<template>
  <div class="c-multiselect__input-container">
    <input class="c-multiselect__input form-control" type="text" @keyup.enter="filterByDescription" v-model="descriptionFilter" placeholder="Filtre pela descrição">
    <div class="c-multiselect__actions">      
      <!-- <span @click="getChosen" :class="isActiveFilter('chosen')" class="l-input-action c-multiselect__filter-chosen" title="Filtrar selecionados">
        <i class="fa fa-check"></i>
      </span> -->
       <!-- <span @click="getAll" :class="isActiveFilter('all')" class="l-input-action c-multiselect__filter-all" title="Filtrar todos">
        <i class="fa fa-tasks"></i>
      </span> -->
      <!-- <span @click="getUnchosen" :class="isActiveFilter('unchosen')" class="l-input-action c-multiselect__filter-unchosen" title="Filtrar não selecionados">
        <i class="fa fa-list-ul"></i>
      </span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    selectedFilter: {
      type: Array,
      default: () => ['checked']
    }
  },
  computed: {
    itemsChecked() {
      return this.items.filter(item => item.checked)
    },
    itemsUnchecked() {
      return this.items.filter(item => item.checked == false)
    }
  },
  methods: {
    isActiveFilter(filterName){
      return { 'is-active': (this.selectedFilter == filterName) };
    },
    sendChecked() {
      this.selectedFilter = 'checked';
      this.$emit('checkedItemsList', Object.assign([], this.itemsChecked));
    },
    sendCheckedAndUnchecked() {
      this.selectedFilter = 'all';
      this.selectedList = Object.assign([], this.items);
    },
    sendUnchecked() {
      this.selectedFilter = 'unchecked';
      this.$emit('uncheckedItemsList', Object.assign([], this.itemsUnchecked));
    },
  }
}
</script>

<style>

</style>
