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
import multiselectitem from './Multiselect/Multiselectitem'
import multiselectlist from './Multiselect/Multiselectlist'
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
