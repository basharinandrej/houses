<template>
  <div>
    <Header />
    <div class="container container__admin">
      <InfoUser
          v-bind:name="name"
          v-bind:avatar="avatar"
      />
      <Todo />
    </div>
    <hr>
  </div>
</template>


<script>
import Todo from '@/components/Todo/Todo.vue'
import InfoUser from "@/views/users/admin/InfoUser";
import Header from "@/components/Header";

export default {
  data() {
    return {
      name: '',
      avatar: ''
    }
  },
  components: {
    Header,
    InfoUser,
    Todo
  },
  mounted() {
    this.name = JSON.parse(localStorage.getItem('nameAdmin'))
    this.avatar = JSON.parse(localStorage.getItem('avatarAdmin'))
  }
}
</script>



<style scoped>
.container__admin {
  padding-top: 32px;
  display: flex !important;
  justify-content: space-between;
}
</style>