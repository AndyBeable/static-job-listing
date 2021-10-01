<template>
  <div class="job-item">
    <div class="job-item-details-container">
      <div class="logo-container">
        <img :src="logo" alt="logo" class="logo" />
      </div>
      <div class="job-container">
        <div>
          <div class="company-container">
            <h3>{{ company }}</h3>
            <div v-show="isNew" class="badge-new"><span>New!</span></div>
            <div v-show="isFeatured" class="badge-featured">
              <span>Featured</span>
            </div>
          </div>
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
            <button @click="filterByLevel">{{ level }}</button>
          </li>
          <li v-for="language in languages" :key="language">
            <button @click="filterByLanguage(language)">{{ language }}</button>
          </li>
          <li v-for="tool in tools" :key="tool">
            <button @click="filterByTool(tool)">{{ tool }}</button>
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
    'new',
    'featured',
    'postedAt',
    'contract',
    'location',
    'image',
    'languages',
    'role',
    'level',
    'tools',
  ],
  data() {
    return {
      isNew: this.new,
      isFeatured: this.featured,
    };
  },
  computed: {},
  methods: {
    filterByRole() {
      this.$emit('clickedOnRole', this.role);
    },
    filterByLevel() {
      this.$emit('clickedOnLevel', this.level);
    },
    filterByLanguage(language) {
      this.$emit('clickedOnLanguage', language);
    },
    filterByTool(tool) {
      this.$emit('clickedOnTool', tool);
    },
  },
};
</script>

<style scoped>
.job-item {
  box-shadow: 0 2px 10px #5ba4a4;
  margin: 6rem auto;
  background: #fff;
  border-radius: 6px;
  padding: 2rem 1rem;
  border-left: 5px solid #5ba4a4;
  position: relative;
  height: 15rem;
}

@media screen and (min-width: 1200px) {
  .job-item {
    height: 10rem;
  }
}
@media screen and (min-width: 1200px) {
  .job-container {
    width: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .job-item-details-container {
    display: flex;
  }
}

.logo {
  height: 6rem;
  margin-right: 2rem;
}

@media screen and (max-width: 1200px) {
  .logo {
    position: absolute;
    top: -2.5rem;
    left: 1rem;
    height: 4rem;
  }
}

h3 {
  color: #5ba4a4;
  font-weight: 700;
  font-size: 0.9rem;
  margin-right: 10px;
}

.company-container {
  display: flex;
  align-items: center;
}

.badge-new {
  background-color: #5ba4a4;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  height: 1.5rem;
  width: 4rem;
  border-radius: 1rem;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badge-featured {
  background-color: #2c3a3a;
  text-transform: uppercase;
  padding: 0 2px;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  height: 1.5rem;
  width: 4rem;
  border-radius: 1rem;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.position {
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0rem 0rem 0.5rem 0rem;
}

.job-details {
  display: flex;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid rgba(199, 214, 214, 1);
  margin-bottom: 1rem;
}

@media screen and (min-width: 1200px) {
  .job-details {
    border: none;
  }
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

@media screen and (min-width: 1200px) {
  .actions {
    width: 100%;
  }
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
