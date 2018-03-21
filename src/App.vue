<template>
  <div id="app">
    <div class="container">
      <multivalored></multivalored>
      <div class="row">
        <div class="col-6">
          <multiselect></multiselect>
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

