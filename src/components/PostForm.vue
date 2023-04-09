<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Назва" v-model="title">
    <input type="text" placeholder="Опис" v-model="body">
    <button type="submit">Створити пост</button>
    <hr>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: ' ',
      body: ''

    };
  },
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      });
      this.title = this.body = '';
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  display: block;
  border: 1px solid teal;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>