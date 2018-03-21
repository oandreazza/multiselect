<template>
  <div class="c-multiselect form-group">
    <label>Devedores</label>
    <input class="c-multiselect__input form-control" type="text" placeholder="Filtre pela descrição">
    <div class="c-multiselect__list-items-container -padding-large">
      <label>Selecionados</label>
      <ul class="list-group">
        <li v-for="(item, index) in selectedList" :key="index" 
          class="c-multiselect__list-item list-group-item list-group-item-action" @click="toggleItem(index, item)">
          <div>{{ item.description }}</div>
          <div class="l-list-icon-container">
            <i class="c-multiselect__filter-checked fa fa-check" v-if="item.checked" ></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="c-multiselect__list-items-container -padding-large">
      <label>Não selecionados</label>
      <ul class="list-group">
        <li v-for="(item, index) in unselectedList" :key="index" 
          class="c-multiselect__list-item list-group-item list-group-item-action" @click="toggleItem(index, item)">
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
        { id: 4, description: 'Jorge Oleques', checked: true, order: 1},
        { id: 5, description: 'Mauricio Sganderla', checked: false, order: 2 },
        { id: 6, description: 'Emerson', checked: false, order: 3 },
        { id: 7, description: 'Alexandre Trevisan', checked: true, order: 1},
        { id: 8, description: 'Alessandro', checked: false, order: 2 },
        { id: 9, description: 'Akanbi', checked: true, order: 3 },
      ],
      selectedList: [],
      unselectedList: []
    }
  },
  created() {
    this.selectedList = this.checkedList;
    this.unselectedList = this.uncheckedList;
  },
  computed: {
    checkedList() {
      return this.items.filter(item => item.checked).sort(this.sort)
    },
    uncheckedList() {
      return this.items.filter(item => !item.checked).sort(this.sort);
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
    toggleItem(index, item) {
      item.checked = (!item.checked)
      if(item.checked){
        this.selectedList.push(item)
        this.selectedList.sort(this.sort)
        this.unselectedList.splice(index,1);
      }else{
        this.unselectedList.push(item)
        this.unselectedList.sort(this.sort)
        this.selectedList.splice(index,1);
      }
    },
    sort( a, b) {
        var nameA = a.description.toUpperCase(); // ignore upper and lowercase
        var nameB = b.description.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
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

    &.-padding-large {
      padding: 0px 15px;
    }
  }

  & &__list-item {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
  }
}
</style>
