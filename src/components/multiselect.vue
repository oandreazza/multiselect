<template>
  <div class="c-multiselect form-group">
    <label>Locais selecionados ( {{checkedListLength}} )</label>
    <div class="c-multiselect__input-container">
      <input class="c-multiselect__input form-control" type="text" @keyup.enter="filterByDescription" v-model="descriptionFilter" placeholder="Filtre pela descrição">
      <div class="c-multiselect__actions">      
        <span @click="getChosen" :class="isActiveFilter('chosen')" class="l-input-action c-multiselect__filter-chosen" title="Filtrar selecionados">
          <i class="fa fa-check"></i>
        </span>
        <span @click="getAll" :class="isActiveFilter('all')" class="l-input-action c-multiselect__filter-all" title="Filtrar todos">
          <i class="fa fa-tasks"></i>
        </span>
        <span @click="getUnchosen" :class="isActiveFilter('unchosen')" class="l-input-action c-multiselect__filter-unchosen" title="Filtrar não selecionados">
          <i class="fa fa-list-ul"></i>
        </span>
      </div>
    </div>
    <div class="c-multiselect__list-items-container">
      <ul class="list-group">
        <li v-for="(item, index) in selectedList" :key="index" 
          class="c-multiselect__list-item list-group-item" @click="toggleItem(item)">
          <div>{{ item.description }}</div>
          <div class="l-list-icon-container">
            <span v-if="item.checked" class="c-multiselect__icon-checked">
              <i class="fa fa-check"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionFilter: '',
      items: [
        { id: 1, description: 'Alexandre Trevisan', checked: true, order: 1},
        { id: 1, description: 'Alexandre Rodrigues Mendes', checked: false, order: 1},
        { id: 2, description: 'Ramon Schmidt Rocha', checked: false, order: 2 },
        { id: 3, description: 'Frederico Macedo', checked: true, order: 3 },
      ],
      selectedList: [],
      selectedFilter: 'all',
      itemsFilteredByDescription: []
    }
  },
  created() {
    this.selectedList = this.items;
  },
  computed: {
    checkedList() {
      return this.items.filter(item => item.checked)
    },
    uncheckedList() {
      return this.items.filter(item => item.checked == false)
    },
    checkedListLength() {
      return this.checkedList.length;
    }
  },
  methods: {
    isActiveFilter(filterName){
      return { 'is-active': (this.selectedFilter == filterName) };
    },
    filterByDescription() {
      if(this.descriptionFilter == ''){
        this.selectedList = Object.assign([], this.items);
      } else {
        let selectedListFilteredByDescription = this.selectedList.filter(item => {
          let returnedValues = item.description.match(new RegExp(this.descriptionFilter, 'gi'));
          return (returnedValues);
        });
        this.selectedList = Object.assign([], selectedListFilteredByDescription);
      }
    },
    getChosen() {
      this.selectedFilter = 'chosen';
      this.selectedList = Object.assign([], this.checkedList);
    },
    getAll() {
      this.selectedFilter = 'all';
      this.selectedList = Object.assign([], this.items);
    },
    getUnchosen() {
      this.selectedFilter = 'unchosen';
      this.selectedList = Object.assign([], this.uncheckedList);
    },
    toggleItem(item) {
      item.checked = (!item.checked)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');

.l-input-action {
  margin-right: 5px;
  cursor: pointer;

  &.is-active {
    color: black;
  }
}

.l-list-icon-container {
  margin-left: auto;
}

.c-multiselect {
  position: relative;
  font-family: 'Roboto', sans-serif;
  
  & &__input-container {
    position: relative;
  }  

  & &__input {
    padding-right: 100px;
  }  

  & &__actions {
    color: #6c757d;
    position: absolute;
    right: 0px;
    top: 9px;
    padding: 0px 5px;
  }

  & &__list-items-container{
    color: #555;
    font-size: .9em;
    margin-top: 15px;
  }

  & &__list-item {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
  }
}
</style>
