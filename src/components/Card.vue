<template>
  <div class="card">
    <div class="card__image">
      <img class="card__image--cover" :src="post.image" alt="image--cover" />
      <div class="card__image--tag">#{{ post.tag }}</div>
    </div>
    <div class="card__text">
      <h5 class="card__title">{{ post.title }}</h5>
      <div class="card__description">{{ post.description }}</div>
      <div class="card__actions">
        <div class="card__actions--data">{{ post.date }}</div>
        <div class="card__actions--like actions__like">
          <button class="actions__like--btn" @click="addLike">
            <img src="@/assets/image/ico-heart.svg" />
          </button>
          <div class="actions__like--counter">{{ post.like }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
export default {
  name: 'Cards',
  props: {
    post: {
      type: Object,
      default: () => ({
        image: '',
        tag: '',
        title: '',
        description: '',
        date: '',
        like: 0,
        id: 1,
      }),
    },
  },
  data() {
    return {};
  },
  methods: {
    addLike() {
      let like = this.post.like + 1;
      this.$emit('click', { ...this.post, like });
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.card {
  width: 450px;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px 10px 8px 10px;

  &__image {
    position: relative;
    margin-bottom: 21px;
    height: 250px;
    width: 430px;
    border-radius: 2px;

    &--cover {
      border-radius: 2px;
    }

    &--tag {
      display: inline-flex;
      position: absolute;
      left: 10px;
      bottom: 8px;
      padding: 7px 11px;
      border-radius: 4px;
      background-color: rgba(105, 146, 55, 0.8);
      @include font(15px, normal, 22px, 'Ubuntu-Regular', #fff);
    }
  }

  &__text {
    padding: 0 8px;

    .card__title {
      padding-bottom: 28px;
      @include font(18px, normal, 21px, 'Ubuntu-Medium', #000);
    }

    .card__description {
      padding-bottom: 25px;
      @include font(15px, normal, 22px, 'Ubuntu-Regular', #000);
    }

    .card__actions {
      display: flex;
      justify-content: space-between;

      &--data {
        @include font(13px, normal, 22px, 'Ubuntu-Regular-Italic', #909599);
      }

      .actions__like,
      .actions__like--btn {
        @include flex_center;
      }

      .actions__like--btn {
        padding-right: 6px;
      }

      .actions__like--counter {
        @include font(12px, normal, 22px, 'Arial', #909599);
      }
    }
  }
}
</style> 