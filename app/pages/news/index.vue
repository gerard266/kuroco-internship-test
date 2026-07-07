<template>
  <div>
    <LanguageSwitcher />
    <h1 class="title">{{ $t("news.title") }}</h1>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="$localePath(`/news/${n.topics_id}`)">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import LanguageSwitcher from "~~/components/LanguageSwitcher.vue";
const config = useRuntimeConfig();
const lang = ref(useI18n().locale.value);
const { data: response } = await useFetch(
  `/rcms-api/3/news?_lang=${lang.value}`,
  {
    baseURL: config.public.apiBase,
    credentials: "include",
  },
);
</script>
