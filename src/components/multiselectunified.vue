<template>
  <div class="c-multiselect form-group">
    <div class="row">
      <div class="col-8 ">
        <label>Devedores ({{  this.checkedList.length }})</label>
      </div>
      <div class="col c-multiselect__action align-baseline" >
        <span @click="doState()" class="align-baseline">
          {{ toggleSelectText }}
        </span>
      </div>
    </div>
    <input class="c-multiselect__input form-control" type="text" @keyup="filterByDescription" v-model="descriptionFilter" placeholder="Filtre pela descrição">
    <multiselectlist>
      <multiselectitem v-for="(item, index) in selectedList" :key="index" :index="index" :item="item" @toggle="toggleItem" />
    </multiselectlist>
    <div class="c-multiselect__result row">
      <div class="col-12">
        Total {{  this.selectedList.length  }}
      </div>       
    </div>
  </div>
</template>

<script>
import multiselectitem from "./Multiselect/Multiselectitem";
import multiselectlist from "./Multiselect/Multiselectlist";

export default {
  components: { multiselectitem, multiselectlist },
  data() {
    return {
      items: this.userData,
      selectedList: [],
      descriptionFilter: "",
      toggleSelect: true,
      toggleSelectText: "Selecionar Todos"
    };
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
      return this.items.filter(item => item.checked).sort(this.sort);
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
      let { index, item } = payload;
      item.checked = !item.checked;
    },

    doState(){
     let toggle = this.toggleSelect = !this.toggleSelect
     this.toggleSelectText = !this.toggleSelect ? 'Desmarcar todos' : 'Selecionar todos'
     let allItemsSelectd = this.items.map( item =>  {
        item.checked = toggle
        return item
      })
      
      this.selectedList = Object.assign([], allItemsSelectd);
    },
    filterByDescription() {
      if (this.descriptionFilter == "") {
        this.selectedList = Object.assign([], this.checkedList);
      } else {
        let selectedListFilteredByDescription = this.items.filter(item => {
          let returnedValues = item.description.match(
            new RegExp(this.descriptionFilter, "gi")
          );
          return returnedValues;
        });
        this.selectedList = Object.assign(
          [],
          selectedListFilteredByDescription
        );
        this.selectedList.sort(this.sort);
      }
    },
    sort(a, b) {
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
};
</script>


