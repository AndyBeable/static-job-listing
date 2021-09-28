<template>
  <div class="job-item">
    <img :src="require('../assets/photosnap.svg')" alt="logo" class="logo" />
    <!-- <img v-bind:src="'../assets/" alt="" /> -->
    <!-- <img :src="image" alt="logo" class="logo" /> -->
    <div>
      <h3>{{ company }}</h3>
      <p class="position">{{ position }}</p>

      <div class="job-details">
        <p>{{ postedAt }}</p>
        <p>{{ contract }}</p>
        <p>{{ location }}</p>
      </div>
      <ul>
        <li>
          <button @click="test">{{ role }}</button>
        </li>
        <li>
          <button @click="test">{{ level }}</button>
        </li>
        <li v-for="language in languages" :key="language">
          <button @click="test">{{ language }}</button>
        </li>
        <li v-for="tool in tools" :key="tool">
          <button @click="test">{{ tool }}</button>
        </li>
      </ul>
    </div>
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
    'languages',
    'role',
    'level',
    'tools',
  ],
  computed: {},
  methods: {
    test() {
      console.log('Clicked');
    },
  },
};
</script>

<style scoped>
.job-item {
  box-shadow: 0 2px 10px #5ba4a4;
  margin: 4rem 0;
  background: #fff;
  border-radius: 6px;
  padding: 2rem 1rem;
  border-left: 5px solid #5ba4a4;
  display: flex;
  align-items: center;
  position: relative;
  height: 15rem;
}

.logo {
  position: absolute;
  top: -3rem;
  left: 1rem;
}

h3 {
  color: #5ba4a4;
  font-weight: 700;
  font-size: 0.9rem;
}

.position {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: -2px;
}

.job-details {
  display: flex;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid rgba(199, 214, 214, 1);
  margin-bottom: 1rem;
}

.job-details p {
  color: #7b8e8e;
  font-size: 0.8rem;
}

.job-details p:not(:last-of-type) {
  margin-right: 10px;
}

ul {
  display: flex;
  list-style: none;
}

button {
  color: #5ba4a4;
  background-color: #eef6f6;
  font-weight: 700;
  font-size: 0.6rem;
  border-radius: 6px;
  padding: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
}

li:not(:last-of-type) {
  margin-right: 10px;
}
</style>
