<template>
    <div class="card" style="width: 700px">
      <img :src="avatar"
           class="card-avatar"
           alt="Avatar">
      <div class="card-body">
        <p class="card-text">
          <strong>Имя:</strong> {{ name }}
        </p>
        <p class="card-text">
          <strong>Статус:</strong> Админ
        </p>
      </div>

<!--      <FormUsers-->
<!--        v-on:submitNameHandler="submitNameHandler"-->
<!--      />-->
    </div>
</template>


<script>
import FormUsers from '@/components/FormUsers'
export default {
  props: [ 'name', 'avatar'],
  components: {
    FormUsers
  },
  methods: {
    // submitNameHandler() {
    //   this.name = JSON.parse(localStorage.getItem('nameAdmin'))
    // }
  }
}
</script>

<style scoped>
.card {
  padding: 24px 12px;
  display: flex;
  align-items: start;
  position: relative;
}
.card:after{
  content: '';
  background: #dfdfdf;
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 250px;
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