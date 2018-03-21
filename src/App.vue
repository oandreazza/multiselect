<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselect type="named"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselect type="counter"></multiselect>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <multiselectOrdered></multiselectOrdered>
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
export default {
  name: "app",
  components: { multivalored, multiselect, multiselectOrdered },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  }
};
</script>

<style>
  .card {
    margin-top: 15px;
  }
</style>


