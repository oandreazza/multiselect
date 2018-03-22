<template>
  <div class="c-multiselect form-group">
    <label>Devedores</label>
    <input class="c-multiselect__input form-control" type="text" placeholder="Filtre pela descrição">
    <multiselectlist label="Selecionado">
      <multiselectitem v-for="(item, index) in selectedList" :key="index" :index="index" :item="item" @toggle="toggleItem" />
    </multiselectlist>
    <multiselectlist label="Não selecionado">
      <multiselectitem v-for="(item, index) in unselectedList" :key="index" :index="index" :item="item" @toggle="toggleItem" />
    </multiselectlist>
  </div>

</template>

<script>
import multiselectitem from './Multiselect/multiselectitem'
import multiselectlist from './Multiselect/multiselectlist'
export default {
   components: { multiselectitem, multiselectlist },
  data() {
    return {
      items: this.userData,
      selectedList: [],
      unselectedList: []
    }
  },
  props: {
    userData: {
      type: Array,
      required: true,
      default: []
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
    toggleItem(payload) {
      let { index, item } = payload
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

  & &__list{
    max-height: 180px;
    overflow-y: auto;
  }

  & &__list-item {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
  }
}
</style>
