<template>
    <div class="card" style="width: 700px">
      <img :src="avatar"
           class="card-avatar">
      <div class="card-body">
        <p class="card-text">
          <strong>Имя:</strong> {{ name }}
        </p>
        <p class="card-text">
          <strong>Статус:</strong> Админ
        </p>
      </div>
    </div>
</template>


<script>
export default {
  props: [ 'name', 'avatar']
}
</script>

<style scoped>
.card {
  padding: 24px 12px;
  display: flex;
  align-items: start;
  position: relative;
}
.card-avatar {
  width: 128px;
  height: 128px;
  object-fit: contain;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.card-text {
  margin-bottom: 4px;
}
</style>