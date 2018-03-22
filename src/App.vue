<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselect :userData="userData" type="named"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselect :userData="userData" type="counter"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselectOrdered :userData="userData"></multiselectOrdered>
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
import randomstring from 'randomstring'
export default {
  name: "app",
  components: { multivalored, multiselect, multiselectOrdered },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userData: []
    }
  },
  methods : {
    getData (length) {
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

      this.userData = data
    }
  },
  created() {
    this.getData(500)
  }
};
</script>

<style>
  .card {
    margin-top: 15px;
  }
</style>


