<template>
  <div>
    <h1>HELLO</h1>
    <div>{{ response.details.ext_1 }}</div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: response } = await useFetch(
  `${config.public.apiBase}/rcms-api/2/service/3`,
  {
    credentials: "include",
  },
);
</script>
