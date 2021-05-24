<template>
  <div class="list-cards" v-if="posts">
    <Card :post="post" @click="addLicke" v-for="post in posts" :key="post.id" />
  </div>
</template> 

<script>
import Card from './Card';
import db from '@/mockApi/db.json';
export default {
  name: 'ListCards',
  components: {
    Card,
  },
  data() {
    return {
      demo: false,
      getPosts: db.posts,
    };
  },
  async created() {
    await this.$store.dispatch('posts/GET');
  },
  computed: {
    posts: {
      get() {
        // для Demo
        if (this.$store.getters.posts.data === 'error') {
          this.demo = true;
          console.log(this.getPosts);
          return this.getPosts;
        }
        this.demo = false;
        return this.$store.getters.posts.data;
      },
      set(val) {
        this.getPosts = val;
      },
    },
  },
  methods: {
    async addLicke({ ...val }) {
      const payload = val;
      // для Demo
      if (this.demo) {
        this.getPosts[payload.id - 1] = payload;
        const test = this.getPosts.map((item) => item);
        this.posts = test;
        return false;
      }
      await this.$store.dispatch('posts/UPDATE', payload);
      try {
        this.$store.dispatch('posts/GET');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
.list-cards {
  padding-top: 182px;
  padding-bottom: 446px;
  max-width: 1860px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}

@media only screen and (min-width: 500px) {
  .list-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 1000px) {
  .list-cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (min-width: 1860px) {
  .list-cards {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>