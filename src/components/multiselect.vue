<template>
  <div class="c-multiselect form-group">
    <label @click="toggleList" >Devedores </label>
    <!-- <label style="float:right"> <span @click="toggleList"><i class="fa fa-chevron-down"></i></span></label> -->
    <div v-show="!showList">
      <select v-if="type == 'named'" class="form-control" @click.prevent="toggleList">
        <option>
          <span v-for="(itemChecked, index ) in checkedList" :key="index">
            {{ itemChecked.description | shortDescription }} ,
          </span>
        </option>
      </select>
      <select v-if="type == 'counter'" class="form-control" @click.prevent="toggleList">
        <option value="">
          Selecionados ({{ checkedListLength }})
        </option>
      </select>
    </div>
    <div v-if="showList">
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
            class="c-multiselect__list-item list-group-item" 
            :class="{ 'is-selected': item.checked }"
            @click="toggleItem(item)">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionFilter: '',
      items: this.userData,
      selectedList: [],
      selectedFilter: 'all',
      itemsFilteredByDescription: [],
      showList: false
    }
  },
  props: {
    type: String,
    userData: Array
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
  filters: {
    shortDescription: function (value) {
      if (value.length > 13){
        value = value.substring(0, 13);
        return value.concat('...');
      }
      return value
    }
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
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


