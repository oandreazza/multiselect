<template>
  <div class="multivalored-field">
    <div class="row">
      <div class="col-6">
        <div class="multivalored-field__available-itens">
          <label>Valores disponíveis</label>
          <ul class="list-group">
            <li v-for="(availableItem, index) in multivalored.availables" :key="index"
              class="list-group-item">{{availableItem.description}}</li>
          </ul>
        </div>
      </div>

      <div class="col-6">
        <div class="multivalored-field__selected-itens">
          <label>Valores selecionados</label>
          <ul class="list-group">
            <li v-for="(selectedItem, index) in multivalored.chosen" :key="index"
              class="list-group-item">{{selectedItem.description}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "multivalored",
  data() {
    return {
      multivalored: {
        availables: [],
        chosen: []
      }
    }
  }
}
</script>
