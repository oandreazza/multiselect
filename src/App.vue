<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <multiselectunifiedstylized v-show="false"  :userData="getData()" :loading="true" type="counter"></multiselectunifiedstylized>
          
        </div>
       <div class="col-12 col-lg-6">
          <multiselectlinkedin label="Tarefa com selecionados" :items="getData(500)"></multiselectlinkedin>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <multiselectlinkedin label="Tarefas sem selecionados" :items="getData(200, false)"></multiselectlinkedin>
        </div>
        <div class="col-12 col-lg-6">
          <multiselectlinkedin label="Itens com Mix" has-extra-record="true" :items="getData(200, false)"></multiselectlinkedin>
        </div>
      </div>
      <div class="row">
         <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <multiselectOrdered :userData="getData()"></multiselectOrdered>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <multiselectunified :userData="getData()"></multiselectunified>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <multiselect :userData="getData()" type="named"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <multiselect :userData="getData()" type="counter"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <multiselectunifiedstylized :userData="getData()" type="counter"></multiselectunifiedstylized>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import multivalored from "./components/multivalored";
import multiselect from "./components/multiselect";
import multiselectOrdered from "./components/multiselectOrdered";
import multiselectunified from './components/multiselectunified'
import multiselectunifiedstylized from './components/multiselectunifiedstylized'
import multiselectlinkedin from './components/MultiSelectedLinkedIn'
import randomstring from 'randomstring'
export default {
  name: "app",
  components: { multivalored, multiselect, multiselectOrdered, multiselectunified, multiselectunifiedstylized, multiselectlinkedin },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userData: []
    }
  },
  methods : {
    getData (length = 500, defaultChecked = null) {
      let data = []
      var checked = true
      for (let index = 0; index < length; index++) {
        checked = defaultChecked == null ? !checked : defaultChecked
        data.push({
          id: index, 
          description: randomstring.generate({
            length: 12,
            charset: 'alphabetic'
          }), 
          checked: checked, 
          order: index
        })
      }
      return data;
    }
  },
  created() {
    this.getData(500)
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');

.card {
    margin-top: 15px;
}

.unchecked{
  color: rgba(0,0,0,.125)
}

.l-input-action {
  margin-right: 5px;
  cursor: pointer;

  &.is-active {
    color: black;
  }
}

.l-list-icon-container {
  margin-left: auto;
}

.c-multiselect {
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 30px;

  & &__footer{
    background-color: #fff;
    font-size: .75em;
    color: #6c757d;
    height: 50px;
    padding: 0.4rem 1.25rem;

  }
  
  & &__input-container {
    position: relative;
  }  

  & &__input {
    padding-right: 100px;
  }  

  & &__icon{
    margin-right: 8px;
  }

  & &__actions {
    color: #6c757d;
    position: absolute;
    right: 17px;
    top: 5px;
    padding: 0px 5px;
    cursor: pointer;
  }

  & &__header {
    background-color: #fff;
    padding: 1.25rem;
  }

  & &__body {
    padding: 0.3em 1.25em;
    max-height: 300px;
    overflow-y: auto;
  }

  & &__list-items-container{
    color: #555;
    font-size: .9em;
  }

  & &__action {
    color:rgb(67, 127, 238);
    cursor: pointer;
    font-size: 12px;
    margin-top: 10px;
    text-align: right;
  }

  & &__result {
    margin-top: 10px;
    text-align: right;
  }

  
  & &__list-item {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;

    &.is-selected {
      color: #000;
    }
  }
}
</style>
