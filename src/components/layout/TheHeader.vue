<template>
  <section>
    <div :style="image" class="image"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url('/src/assets/bg-header-desktop.svg')" },
    };
  },
};
</script>

<style scoped>
.image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 8rem;
  width: 100%;
  background-color: #5ba4a4;
}
</style>
