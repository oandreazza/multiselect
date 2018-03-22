<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselect :userData="getData()" type="named"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselect :userData="getData()" type="counter"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselectOrdered :userData="getData()"></multiselectOrdered>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselectunified :userData="getData()"></multiselectunified>
            </div>
          </div>
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
import randomstring from 'randomstring'
export default {
  name: "app",
  components: { multivalored, multiselect, multiselectOrdered, multiselectunified },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userData: []
    }
  },
  methods : {
    getData (length = 500) {
      let data = []
      var checked = true
      for (let index = 0; index < length; index++) {
        checked = !checked
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
  
  & &__input-container {
    position: relative;
  }  

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
    margin-top: 15px;
  }

  & &__list{
    max-height: 180px;
    overflow-y: auto;
  }
  
  & &__list-item {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;

    &.is-selected {
      color: #000;
    }
  }
}
</style>
