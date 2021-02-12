<template>
  <div class="card" width="560px" >
    <div class="card__wrapper">
      <div class="card-header">
        Список дел
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

    <div class="card__wrapper card__wrapper--gap">
      <ToDoForm/>
    </div>
  </div>
</template>

<script>
import ToDoForm from '@/components/Todo/ToDoForm'

export default {
  components: {ToDoForm}
}
</script>

<style scoped>
.card {
  padding: 0 !important;
}
.list-group {
  overflow-y: scroll;
  max-height: 200px;
}
.card__wrapper--gap {
  padding: 12px ;
}
</style>