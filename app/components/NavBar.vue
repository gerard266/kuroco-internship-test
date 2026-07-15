<template>
  <nav class="navbar">
    <div class="navbar-container">
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="navbar-toggle"
      >
        ☰
      </button>

      <ul :class="['navbar-menu', { open: isMobileMenuOpen }]">
        <li>
          <nuxt-link :to="$localePath('/')" @click="isMobileMenuOpen = false">
            {{ $t("links.home") }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="$localePath('/news')"
            @click="isMobileMenuOpen = false"
          >
            {{ $t("links.news") }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="$localePath('/form')"
            @click="isMobileMenuOpen = false"
          >
            {{ $t("links.form") }}
          </nuxt-link>
        </li>
      </ul>
      <language-switcher class="navbar-lang" />
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

const isMobileMenuOpen = ref(false);
</script>

<style scoped>
.navbar {
  background: #333;
  color: white;
  padding: 1rem 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}

.navbar-toggle {
  grid-column: 1;
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.navbar-menu {
  grid-column: 2;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  justify-content: center;
}

.navbar-lang {
  grid-column: 3;
  justify-self: end;
}

.navbar-menu a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.navbar-menu a.router-link-active {
  background: #555;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #333;
    padding: 1rem;
  }

  .navbar-menu.open {
    display: flex;
  }
}
</style>
