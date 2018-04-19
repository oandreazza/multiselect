<template>
  <div class="c-multiselect card" style="height: 413px">
		<div class="card-header c-multiselect__header">
			<div class="row">
				<div class="col-8 ">
						<label class="c-multiselect__label">{{ label }} ({{ this.checkedList.length }})</label>
				</div>
				<div v-if="!hasExtraRecord" class="col-4 c-multiselect__action">
                    <span @click="doState()">
                            {{ toggleSelectText }}
                    </span>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<input class="c-multiselect__input form-control form-control-sm l-input"  type="text" @keyup="filterByDescription" v-model="descriptionFilter" placeholder="Filtre pela descrição">
                    <div class="c-multiselect__actions">      
                        <span @click="filterChecked(true)" :class="[!onlySelected ? 'unchecked' : '']" class="l-input-action c-multiselect__filter-chosen" title="Filtrar selecionados">
                            <i class="fa fa-list-ul"></i>
                        </span>
                        <span @click="filterChecked(false)" :class="[onlySelected ? 'unchecked' : '']" class="l-input-action c-multiselect__filter-chosen" title="Filtrar não selecionados">
                            <i class="fa fa-bars"></i>
                        </span>
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
        <Modal v-if="hasExtraRecord" :show="showModal" @close="closeModal"></Modal>
	</div>
</template>

<script>
import ListNotification  from "./common/ListNotification";
import ListLoading from './common/ListLoading'
import MultiSelectList from './Multiselect/Multiselectlist'
import MultiSelectItem from './Multiselect/Multiselectitem'
import ListEdit from './Multiselect/ListEdit'
import Modal from './common/Modal'
export default {
    components: { ListNotification, ListLoading, MultiSelectList, MultiSelectItem, ListEdit, Modal },
    data() {
			return {
				listData: [],
				selectedList: [],
				toggleSelectText: "Desmarcar todos",
				toggleSelect: true,
				descriptionFilter: "",
				selectedListFilteredByDescription: [],
                showModal: false,
                onlySelected: true
			}
		},
        created(){
            this.listData = this.items
            this.selectedList = this.checkedList
        },
		props: {
			label:{
	            type: String
	        },
	        items : {
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
				return this.listData.filter(item => item.checked)
			},
            uncheckedList() {
                return this.listData.filter(item => !item.checked)
            },
			initializedWithoutResults() {
				return this.selectedList.length == 0 && this.descriptionFilter == ""
			},
			searchedWithoutResults() {
				return this.selectedListFilteredByDescription.length == 0 && this.descriptionFilter != ""
			}
			
		},
		methods: {
			doState(){
		     let toggle = this.toggleSelect = !this.toggleSelect
		     this.toggleSelectText = !this.toggleSelect ? 'Selecionar todos' : 'Desmarcar todos' 
		     let allItemsSelectd = this.listData.map( item =>  {
		        item.checked = toggle
		        return item
		      })
		      
		      this.selectedList = Object.assign([], allItemsSelectd);
		    },
		    toggleItem(payload) {
		        let { index, item } = payload;
		    	item.checked = !item.checked;
		    	this.$emit('changeItem', {id: item.id, checked: item.checked})
                if(this.hasExtraRecord){
                    if(item.checked)
                        this.showModal = true
                }
		    },
            closeModal(){
                this.showModal = false
            },
            editItem() {
                console.log('====================================');
                console.log("aqui");
                console.log('====================================');
                this.showModal = true
            },
            filterChecked( state ) {
                if( state )
                    this.selectedList = Object.assign([], this.checkedList);
                else
                   this.selectedList =   Object.assign([], this.uncheckedList);
                   
                this.onlySelected = state
            },
		    filterByDescription() {
		        if (this.descriptionFilter == "") {
		          this.selectedList = Object.assign([], this.checkedList);
		        } else {
		          	this.selectedListFilteredByDescription = this.listData.filter(item => {
		            let returnedValues = item.description.match(
		              new RegExp(this.descriptionFilter, "gi")
		            );
		            return returnedValues;
		          });
		          this.selectedList = Object.assign([], this.selectedListFilteredByDescription);
		          this.selectedList.sort(this.sort);
		        }
		      }
		}
}
</script>

<style>

</style>
