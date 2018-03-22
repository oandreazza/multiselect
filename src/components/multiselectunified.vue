<template>
  <div class="c-multiselect form-group">
    <div class="row">
      <div class="col-9">
        <label>Devedores</label>
      </div>
      <div class="col c-multiselect__action" style="text-align:right">
        <span @click="doState(true)">
         <i class="far fa-check-square"></i>
        </span>
      </div>
      <div class="col c-multiselect__action" >
        <span @click="doState(false)">
           <i class="far fa-square"></i>
        </span>
      </div>
    </div>
        <input class="c-multiselect__input form-control" type="text" @keyup.enter="filterByDescription" v-model="descriptionFilter" placeholder="Filtre pela descrição">
    <multiselectlist>
      <multiselectitem v-for="(item, index) in selectedList" :key="index" :index="index" :item="item" @toggle="toggleItem" />
    </multiselectlist>
  </div>
</template>

<script>
import multiselectitem from "./Multiselect/multiselectitem";
import multiselectlist from "./Multiselect/multiselectlist";

export default {
  components: { multiselectitem, multiselectlist },
  data() {
    return {
      items: this.userData,
      selectedList: [],
      descriptionFilter: ""
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

    doState(state){
     let allItemsSelectd = this.items.map( item =>  {
        item.checked = state
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


