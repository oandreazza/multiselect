<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <multiselect type="named"></multiselect>
        </div>
        <div class="col-6">
          <multiselect type="counter"></multiselect>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import multivalored from './components/multivalored'
import multiselect from './components/multiselect'
export default {
  name: 'app',
  components: {multivalored, multiselect},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

