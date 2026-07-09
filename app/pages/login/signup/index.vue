<template>
  <div>
    <div v-if="!signupDone">
      <form @submit.prevent="signup">
        <p v-if="error" :style="{ color: 'red' }">
          {{ error }}
        </p>
        <div>
          <label>name1</label>
          <input
            v-model="user.name1"
            name="name1"
            type="text"
            placeholder="name1"
          />
        </div>
        <div>
          <label>name2</label>
          <input
            v-model="user.name2"
            name="name2"
            type="text"
            placeholder="name2"
          />
        </div>
        <div>
          <label>email</label>
          <input
            v-model="user.email"
            name="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <label>login_pwd</label>
          <input
            v-model="user.login_pwd"
            name="login_pwd"
            type="password"
            placeholder="login_pwd"
          />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
    <div v-if="signupDone">New member registration is complete.</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const signupDone = ref(false);
const user = ref({});

const error = ref(null);
const signup = async () => {
  try {
    const config = useRuntimeConfig();
    // New member registration request using useFetch
    const response = await fetch(
      `${config.public.apiBase}/rcms-api/5/member/regist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user.value), // Use the form content as the request body
      },
    );

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      console.error("Register failed:", body);
      throw new Error("Failed to Register");
    }
    signupDone.value = true;
  } catch (e) {
    console.error(e);
    error.value = "An error has occured.";
  }
};
</script>

<style scoped>
form > div {
  margin: 8px;
  display: flex;
  flex-direction: row;
}
form > div > * {
  display: flex;
  flex-direction: row;
  flex-basis: 100px;
}
form > div > *:nth-child(1) {
  flex: 0 0 100px;
  padding-right: 8px;
}
form > div > *:nth-child(2) {
  min-width: 0;
  flex: 1 100 auto;
}
</style>
