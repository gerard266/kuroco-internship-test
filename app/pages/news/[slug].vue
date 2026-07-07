<template>
  <div>
    <div v-if="error" class="error">News article not found</div>
    <div v-else-if="response?.details">
      <h1 class="title">{{ response.details.subject }}</h1>
      <div class="post" v-html="response.details.ext_1"></div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const { data: response, error } = await useFetch(
  `${config.public.apiBase}/rcms-api/3/newsdetail/${route.params.slug}`,
  {
    credentials: "include",
  },
);

console.log("Response:", response);
console.log("Error:", error);
</script>
