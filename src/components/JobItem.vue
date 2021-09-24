<template>
  <div class="job-item">
    <img :src="image" alt="" />
    <h1>{{ company }}</h1>
    <p>{{ position }}</p>
    <p>{{ postedAt }}</p>
    <p>{{ contract }}</p>
    <p>{{ location }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'company',
    'position',
    'logo',
    'postedAt',
    'contract',
    'location',
    'image',
  ],
  computed: {},
};
</script>

<style scoped>
.job-item {
  box-shadow: 0 2px 10px #5ba4a4;
  margin: 3rem 1rem;
  background: #fff;
  border-radius: 6px;
  padding: 2rem 1rem;
  border-left: 5px solid #5ba4a4;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 100px;
  width: 100px;
}
</style>
