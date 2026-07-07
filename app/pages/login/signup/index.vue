<template>
  <div>
    <div v-if="!signupDone">
      <form @submit.prevent="signup">
        <p v-if="error" :style="{ color: 'red' }">
          {{ error }}
        </p>
        <div>
          <label>prop1</label>
          <input
            v-model="user.prop1"
            name="prop1"
            type="text"
            placeholder="prop1"
          />
        </div>
        <div>
          <label>prop2</label>
          <input
            v-model="user.prop2"
            name="prop2"
            type="text"
            placeholder="prop2"
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
  // Dummy request (success/failure after 1sec delay)
};

const signup = () => {
  console.log(JSON.stringify(user.value, null, "\t"));
  signupDone.value = true;
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
