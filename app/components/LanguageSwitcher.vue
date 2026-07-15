<template>
  <div class="language-switcher">
    <nuxt-link :to="$switchLocalePath('en')" class="language-switcher-link">
      {{ $t("links.en") }}
    </nuxt-link>
    <span class="language-switcher-divider" aria-hidden="true"></span>
    <nuxt-link :to="$switchLocalePath('ja')" class="language-switcher-link">
      {{ $t("links.ja") }}
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #333;
  border-radius: 4px;
  padding: 0.25rem;
}

.language-switcher-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
}

.language-switcher-link.router-link-active {
  background: #555;
}

.language-switcher-divider {
  width: 1px;
  height: 1rem;
  background: rgba(255, 255, 255, 0.3);
}
</style>
