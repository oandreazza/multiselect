<template>
  <div class="c-multiselect card" style="height: 413px">
		<div class="card-header c-multiselect__header">
			<div class="row">
				<div class="col-6 ">
					<label class="c-multiselect__label">{{ label }}</label>
					<span style="cursor:pointer; margin-left: 5px" @click="managePopup">
						<i class="fa fa-cogs"></i>
					</span>
				</div>
				<div class="col-6 c-multiselect__action">
					<span @click="filterListState()">
							{{ listStateLabel }}
					</span>
				</div>
			</div>
			<div class="row">
				  <div class="col-lg-12">
            <div class="input-group mb-3">
              <input class="c-multiselect__input form-control form-control-sm l-input"  type="text" v-model="descriptionFilter" placeholder="Filtre pela descrição">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" @click="clearFilter" type="button">
                  <i class="fa fa-times"></i>
                </button>
                <button class="btn btn-outline-secondary" @click="filterByDescription" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </div>
         
            </div>
					</div>	
			</div>
		</div>	
		<div class="card-body c-multiselect__body">
			<List-notification v-if="initializedWithoutResults" text="Nenhum registro selecionado. Utilize o filtro para encontrar o(s) registro(s)"></List-notification>
			<List-notification v-if="searchedWithoutResults" text="Nenhum registro encontrado"></List-notification>
			<List-loading v-if="isLoading"></List-loading>				
			<Multi-select-list v-else>
				<Multi-select-item  v-for="(item, index) in selectedList" :key="index" :index="index" :item="item" @toggle="toggleItem" >
          <List-edit v-if="hasExtraRecord" @edit="editItem"></List-edit>
        </Multi-select-item>
			</Multi-select-list>
		</div>
        <div class="card-footer  c-multiselect__footer">
            <Multi-select-footer :btn-label="handleToggleSelectText" @btn-click="doState" :quantity="totalSelected"></Multi-select-footer>
        </div>
        
        <Modal :show="showModal" @close="closeModal"></Modal>
	</div>
</template>

<script>
import ListNotification from "./common/ListNotification";
import ListLoading from "./common/ListLoading";
import MultiSelectList from "./Multiselect/Multiselectlist";
import MultiSelectItem from "./Multiselect/Multiselectitem";
import MultiSelectFooter from "./Multiselect/MultiSelectFooter";
import ListEdit from "./Multiselect/ListEdit";
import Modal from "./common/Modal";
export default {
  components: {
    ListNotification,
    ListLoading,
    MultiSelectList,
    MultiSelectItem,
    ListEdit,
    Modal,
    MultiSelectFooter
  },
  data() {
    return {
      listData: [],
      selectedList: [],
      descriptionFilter: "",
      selectedListFilteredByDescription: [],
      showModal: false,
			state: 'SELECTED',
			listStateLabel: 'Visualizar não selecionados'
    };
  },
  created() {
    this.listData = Object.assign([], this.items);
    this.selectedList = this.checkedList;
  },
  props: {
    label: {
      type: String
    },
    items: {
      type: Array,
      required: true,
      default: []
    },
    isLoading: {
      type: Boolean
    },
    hasExtraRecord: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkedList() {
      return this.listData.filter(item => item.checked).slice(0, 50);
    },
    uncheckedList() {
      return this.listData.filter(item => !item.checked).slice(0, 50);
    },
		uncheckedFilteredList(){
			return this.selectedListFilteredByDescription.filter(item => !item.checked).slice(0,50);
		},
    initializedWithoutResults() {
      return (
				this.state == 'SELECTED' &&	
				this.selectedList.length == 0 
			)
    },
    searchedWithoutResults() {
      return (
				this.state != 'SELECTED' && 
        this.selectedList.length == 0 
      );
    },
		handleToggleSelectText() {
			return this.state == 'SELECTED' ? 'Desmarcar todos' :  'Marcar todos'
		},
    totalSelected() {
      return this.listData.filter(item => item.checked).length;
    },
  },
	watch: {
		state(){
			if(this.state == 'SELECTED' ){
				this.selectedList = this.checkedList;
				this.listStateLabel = 'Visualizar não selecionados'
			}else if (this.state == 'UNSELECTED' ){
				this.selectedList = this.uncheckedList
				this.listStateLabel = 'Visualizar selecionados'
			}
					
		}
	},
  methods: {
    clearFilter() {
      this.descriptionFilter = "";
			this.state = 'SELECTED'
    },
    doState() {
			if(this.state == 'UNSELECTED'){
				this.selectedList.map(item => {
        	item.checked = true;
      	});
				this.selectedList = this.uncheckedList
			} else if (  this.state == 'SEARCH' ) {
				this.selectedList.map(item => {
        	item.checked = true;
      	});
				this.selectedList = this.uncheckedFilteredList;
			}else {
				this.selectedList.map(item => {
        	item.checked = false;
      	});
				this.selectedList = this.checkedList;
			}
    },
    toggleItem(payload) {
      let { index, item } = payload;
      item.checked = !item.checked;
      this.$emit("changeItem", { id: item.id, checked: item.checked });
      if (this.hasExtraRecord && item.checked) this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    editItem() {
      this.showModal = true;
    },
    managePopup() {
      this.showModal = true;
    },
    filterListState() {
			this.state == 'SELECTED' ? this.state = 'UNSELECTED' : this.state = 'SELECTED'
    },
    filterByDescription() {
				this.state = 'SEARCH'
        this.selectedListFilteredByDescription = this.listData
          .filter(item => {
            let returnedValues = item.description.match(
              new RegExp(this.descriptionFilter, "gi")
            );
            return returnedValues;
          })
        
				this.selectedList = this.uncheckedFilteredList
    }
  }
};
</script>

<style>

</style>
