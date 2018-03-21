<template>
  <div class="c-multiselect form-group">
    <input class="c-multiselect__input form-control" type="text" placeholder="Filtre pela descrição">
    <div class="c-multiselect__actions">      
      <span @click="getChosen">
        <i class="l-input-action c-multiselect__filter-checked fa fa-check"></i>
      </span>
      <span @click="getAll">
        <i class="l-input-action c-multiselect__filter-all fa fa-tasks"></i>
      </span>
      <span @click="getUnchosen">
        <i class="l-input-action c-multiselect__filter-unchecked fa fa-list-ul"></i>
      </span>
    </div>
    <div class="c-multiselect__list-items-container">
      <ul class="list-group">
        <li v-for="(item, index) in selectedList" :key="index" 
          class="c-multiselect__list-item list-group-item" @click="toggleItem(item)">
          <div>{{ item.description }}</div>
          <div class="l-list-icon-container">
            <i class="c-multiselect__filter-checked fa fa-check" v-if="item.checked" ></i>
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
      items: [
        { id: 1, description: 'Alexandre Trevisan', checked: true, order: 1},
        { id: 2, description: 'Ramon Schmidt Rocha', checked: false, order: 2 },
        { id: 3, description: 'Frederico Macedo', checked: false, order: 3 },
      ],
      selectedList: []
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
      return this.items.filter(item => !item.checked)
    }
  },
  methods: {
    getChosen() {
      this.selectedList = Object.assign({}, this.checkedList);
    },
    getAll() {
      this.selectedList = Object.assign({}, this.items);
    },
    getUnchosen() {
      this.selectedList = Object.assign({}, this.uncheckedList);
    },
    toggleItem(item) {
      this.items.$set()
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
}

.l-list-icon-container {
  margin-left: auto;
}

.c-multiselect {
  position: relative;
  font-family: 'Roboto', sans-serif;

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
  }

  & &__list-item {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
  }
}
</style>
