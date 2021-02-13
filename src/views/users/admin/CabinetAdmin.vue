<template>
  <div>
    <Header />
    <div class="container container__admin">
      <InfoUser
          v-bind:name="setName"
          v-bind:avatar="setAvatar"
      />
      <Todo />
    </div>
    <hr>

    <Modal v-bind:showModal="isShowModal">
      <FormUsers />
    </Modal>
  </div>
</template>


<script>
import Todo from '@/components/Todo/Todo.vue'
import InfoUser from "@/views/users/admin/InfoUser";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import FormUsers from '@/components/FormUsers'

export default {
  components: {
    Header,
    InfoUser,
    Todo,
    Modal,
    FormUsers
  },
  mounted() {
    this.$store.commit('isAuthMutation')
  },
  computed: {
    isShowModal() {
      return this.$store.state.user.admin.isAuth
    },
    setName() {
      return this.$store.state.user.admin.name
    },
    setAvatar() {
      return this.$store.state.user.admin.avatar
    }
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