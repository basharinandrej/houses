<template>
  <div class="cabinet">
    <Header />
    <div class="container container__admin">
      <InfoUser
          v-bind:name="setName"
          v-bind:avatar="setAvatar"
      />
      <Todo />
    </div>
    <hr>

<!--    Added new flat-->
    <AddedFlat />
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
import AddedFlat from '@/views/users/admin/AddedFlat'

export default {
  components: {
    Header,
    InfoUser,
    Todo,
    Modal,
    FormUsers,
    AddedFlat
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
.cabinet {
  padding-bottom: 96px;
}
.container__admin {
  padding-top: 32px;
  display: flex !important;
  justify-content: space-between;
}
</style>