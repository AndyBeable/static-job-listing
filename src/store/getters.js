export default {
  jobs(state) {
    return state.jobs;
  },
  hasJobs(state) {
    return state.jobs && state.jobs.length > 0;
  },
};
