<template>
  <div class="job-item">
    <div class="logo-container">
      <img :src="logo" alt="logo" class="logo" />
    </div>
    <div>
      <div class="job-container">
        <div>
          <h3>{{ company }}</h3>
          <p class="position">{{ position }}</p>
        </div>

        <div class="job-details">
          <p>{{ postedAt }}</p>
          <p>{{ contract }}</p>
          <p>{{ location }}</p>
        </div>
      </div>
      <div class="actions">
        <ul>
          <li>
            <button @click="filterByRole">{{ role }}</button>
          </li>
          <li>
            <button @click="test">{{ level }}</button>
          </li>
          <li v-for="language in languages" :key="language">
            <button @click="filterByLanguage(language)">{{ language }}</button>
          </li>
          <li v-for="tool in tools" :key="tool">
            <button @click="test">{{ tool }}</button>
          </li>
        </ul>
      </div>
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
    filterByRole() {
      this.$emit('clickedOnRole', this.role);
    },
    filterByLanguage(language) {
      this.$emit('clickedOnLanguage', language);
    },
  },
};
</script>

<style scoped>
.job-item {
  box-shadow: 0 2px 10px #5ba4a4;
  margin: 6rem auto;
  width: 90%;
  background: #fff;
  border-radius: 6px;
  padding: 2rem 1rem;
  border-left: 5px solid #5ba4a4;
  position: relative;
  height: 15rem;
  display: flex;
}

.logo {
  position: absolute;
  top: -2.5rem;
  left: 1rem;
  height: 4rem;
}

h3 {
  color: #5ba4a4;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: -10px;
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
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}

.actions {
  width: 80%;
}

button {
  color: #5ba4a4;
  background-color: #eef6f6;
  font-weight: 700;
  font-size: 0.6rem;
  border-radius: 6px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 0;
}

button:hover {
  color: #eef6f6;
  background-color: #5ba4a4;
}

li:not(:last-of-type) {
  margin-right: 10px;
}
</style>
