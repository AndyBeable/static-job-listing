<template>
  <div>
    <h1>{{ company }}</h1>
    <p>{{ position }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'company', 'position'],
  computed: {},
};
</script>
