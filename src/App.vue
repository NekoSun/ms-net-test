<template>
  <div id="app">
    <ListCards />
  </div>
</template>

<script>
import ListCards from "./components/ListCards";

export default {
  name: "App",
  components: {
    ListCards,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/basic_styles";
</style>
