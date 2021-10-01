<template>
  <ul class="filters-container">
    <li v-if="filters.role">
      <div class="filter-btn-container">
        {{ filters.role }}
        <button class="filter-btn" @click="removeFilter('role')">
          X
        </button>
      </div>
    </li>
    <li v-if="filters.level">
      <div class="filter-btn-container">
        {{ filters.level }}
        <button class="filter-btn" @click="removeFilter('level')">X</button>
      </div>
    </li>
    <li v-for="language in filters.languages" :key="language">
      <div class="filter-btn-container">
        {{ language }}
        <button class="filter-btn" @click="removeLanguagesFilter">X</button>
      </div>
    </li>
    <li v-for="tool in filters.tools" :key="tool">
      <div class="filter-btn-container">
        {{ tool }}
        <button class="filter-btn" @click="removeToolsFilter">X</button>
      </div>
    </li>
  </ul>
  <section>
    <ul>
      <base-card>
        <job-item
          v-for="job in filteredJobs"
          :key="job.id"
          :company="job.company"
          :position="job.position"
          :logo="job.logo"
          :new="job.new"
          :featured="job.featured"
          :postedAt="job.postedAt"
          :contract="job.contract"
          :location="job.location"
          :role="job.role"
          :level="job.level"
          :languages="job.languages"
          :tools="job.tools"
          @clicked-on-role="applyFilter($event, 'role')"
          @clicked-on-level="applyFilter($event, 'level')"
          @clicked-on-language="applyLanguageFilter"
          @clicked-on-tool="applyToolFilter"
        ></job-item>
      </base-card>
    </ul>
  </section>
</template>

<script>
import JobItem from '../JobItem.vue';
export default {
  name: 'JobList',
  components: { JobItem },
  data() {
    return {
      jobs: [
        {
          id: 1,
          company: 'Photosnap',
          logo: '../assets/photosnap.svg',
          new: true,
          featured: true,
          position: 'Senior Frontend Developer',
          role: 'Frontend',
          level: 'Senior',
          postedAt: '1d ago',
          contract: 'Full Time',
          location: 'USA Only',
          languages: ['HTML', 'CSS', 'JavaScript'],
          tools: [],
        },
        {
          id: 2,
          company: 'Manage',
          logo: '../../assets/manage.svg',
          new: true,
          featured: true,
          position: 'Fullstack Developer',
          role: 'Fullstack',
          level: 'Midweight',
          postedAt: '1d ago',
          contract: 'Part Time',
          location: 'Remote',
          languages: ['Python'],
          tools: ['React'],
        },
        {
          id: 3,
          company: 'Account',
          logo: '../../assets/account.svg',
          new: true,
          featured: false,
          position: 'Junior Frontend Developer',
          role: 'Frontend',
          level: 'Junior',
          postedAt: '2d ago',
          contract: 'Part Time',
          location: 'USA Only',
          languages: ['JavaScript'],
          tools: ['React', 'Sass'],
        },
        {
          id: 4,
          company: 'MyHome',
          logo: '../../assets/myhome.svg',
          new: false,
          featured: false,
          position: 'Junior Frontend Developer',
          role: 'Frontend',
          level: 'Junior',
          postedAt: '5d ago',
          contract: 'Contract',
          location: 'USA Only',
          languages: ['CSS', 'JavaScript'],
          tools: [],
        },
        {
          id: 5,
          company: 'Loop Studios',
          logo: '../../assets/loop-studios.svg',
          new: false,
          featured: false,
          position: 'Software Engineer',
          role: 'Fullstack',
          level: 'Midweight',
          postedAt: '1w ago',
          contract: 'Full Time',
          location: 'Worldwide',
          languages: ['JavaScript'],
          tools: ['Ruby', 'Sass'],
        },
        {
          id: 6,
          company: 'FaceIt',
          logo: '../../assets/faceit.svg',
          new: false,
          featured: false,
          position: 'Junior Backend Developer',
          role: 'Backend',
          level: 'Junior',
          postedAt: '2w ago',
          contract: 'Full Time',
          location: 'UK Only',
          languages: ['Ruby'],
          tools: ['RoR'],
        },
        {
          id: 7,
          company: 'Shortly',
          logo: '../../assets/shortly.svg',
          new: false,
          featured: false,
          position: 'Junior Developer',
          role: 'Frontend',
          level: 'Junior',
          postedAt: '2w ago',
          contract: 'Full Time',
          location: 'Worldwide',
          languages: ['HTML', 'JavaScript'],
          tools: ['Sass'],
        },
        {
          id: 8,
          company: 'Insure',
          logo: '../../assets/insure.svg',
          new: false,
          featured: false,
          position: 'Junior Frontend Developer',
          role: 'Frontend',
          level: 'Junior',
          postedAt: '2w ago',
          contract: 'Full Time',
          location: 'USA Only',
          languages: ['JavaScript'],
          tools: ['Vue', 'Sass'],
        },
        {
          id: 9,
          company: 'Eyecam Co.',
          logo: '../../assets/eyecam-co.svg',
          new: false,
          featured: false,
          position: 'Full Stack Engineer',
          role: 'Fullstack',
          level: 'Midweight',
          postedAt: '3w ago',
          contract: 'Full Time',
          location: 'Worldwide',
          languages: ['JavaScript', 'Python'],
          tools: ['Django'],
        },
        {
          id: 10,
          company: 'The Air Filter Company',
          logo: '../../assets/the-air-filter-company.svg',
          new: false,
          featured: false,
          position: 'Front-end Dev',
          role: 'Frontend',
          level: 'Junior',
          postedAt: '1mo ago',
          contract: 'Part Time',
          location: 'Worldwide',
          languages: ['JavaScript'],
          tools: ['React', 'Sass'],
        },
      ],
      filters: {
        role: '',
        level: '',
        languages: [],
        tools: [],
      },
    };
  },
  computed: {
    filteredJobs() {
      let jobs = this.jobs;

      if (this.filters.role) {
        jobs = jobs.filter((job) => {
          return job.role === this.filters.role;
        });
      }

      if (this.filters.level) {
        jobs = jobs.filter((job) => {
          return job.level === this.filters.level;
        });
      }

      if (this.filters.languages.length > 0) {
        jobs = jobs.filter((job) => {
          return this.filters.languages.every((language) => {
            return job.languages.includes(language);
          });
        });
      }

      if (this.filters.tools.length > 0) {
        jobs = jobs.filter((job) => {
          return this.filters.tools.every((tool) => {
            return job.tools.includes(tool);
          });
        });
      }

      return jobs;
    },
  },
  methods: {
    applyFilter(value, type) {
      this.filters[type] = value;
    },

    applyLanguageFilter(language) {
      if (!this.filters.languages.includes(language)) {
        this.filters.languages.push(language);
      }
    },
    applyToolFilter(tool) {
      if (!this.filters.tools.includes(tool)) {
        this.filters.tools.push(tool);
      }
    },

    removeFilter(type) {
      this.filters[type] = '';
    },

    removeLanguagesFilter(language) {
      const index = this.filters.languages.indexOf(language);
      this.filters.languages.splice(index, 1);
    },
    removeToolsFilter(tool) {
      const index = this.filters.tools.indexOf(tool);
      this.filters.tools.splice(index, 1);
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
}

ul {
  padding: 0;
}

.filters-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 10px #5ba4a4;
  border-radius: 6px;
  padding: 2rem;
  background: #fff;
  list-style: none;
  width: 90%;
  margin: 0 auto;
  margin-top: -3rem;
}

@media screen and (min-width: 1200px) {
  .filters-container {
    flex-direction: row;
  }
}

.filters-container li {
  background-color: #eef6f6;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 1rem;
  color: #5ba4a4;
  font-weight: 500;
  margin-right: 5rem;
  width: 45%;
}

.filters-container li:not(:last-of-type) {
  margin-bottom: 1rem;
}

.filter-btn-container {
  position: relative;
}

.filter-btn {
  background-color: #5ba4a4;
  color: #fff;
  border: none;
  padding: 1.12rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  position: absolute;
  left: 100px;
  top: -16px;
  cursor: pointer;
  transition: 0.3s ease;
}

.filter-btn:hover {
  background-color: #2c3a3a;
}
</style>
