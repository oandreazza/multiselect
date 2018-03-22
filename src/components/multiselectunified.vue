<template>
   <div class="c-multiselect form-group">
    <label>Devedores</label>
    <input class="c-multiselect__input form-control" type="text" @keyup.enter="filterByDescription" v-model="descriptionFilter" placeholder="Filtre pela descrição">
    <multiselectlist>
      <multiselectitem v-for="(item, index) in selectedList" :key="index" :index="index" :item="item" @toggle="toggleItem" />
    </multiselectlist>
  </div>
</template>

<script>
import multiselectitem from './Multiselect/multiselectitem'
import multiselectlist from './Multiselect/multiselectlist'

export default {
    components: { multiselectitem, multiselectlist },
    data(){
        return {
            items: this.userData,
            selectedList: [],
            descriptionFilter: '',
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
    },
    computed: {
        checkedList() {
            return this.items.filter(item => item.checked).sort(this.sort)
        }
    },
    methods: {
    getChosen() {
      this.selectedList = Object.assign({}, this.checkedList);
    },
    getAll() {
      this.selectedList = Object.assign({}, this.items);
    },
    toggleItem(payload) {
      let { index, item } = payload
      item.checked = (!item.checked)  
    },
    filterByDescription() {
      if(this.descriptionFilter == ''){
        this.selectedList = Object.assign([], this.checkedList);
      } else {
        let selectedListFilteredByDescription = this.items.filter(item => {
          let returnedValues = item.description.match(new RegExp(this.descriptionFilter, 'gi')) ;
          return (returnedValues);
        });
        this.selectedList = Object.assign([], selectedListFilteredByDescription);
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


