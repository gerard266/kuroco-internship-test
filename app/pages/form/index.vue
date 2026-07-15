<template>
  <div>
    <section>
      <h1>{{ response.details.inquiry_name }}</h1>

      <div>
        <template
          v-for="line in textLines2texts(response.details.inquiry_info)"
        >
          {{ line }}<br />
        </template>
      </div>

      <div v-if="submitted">
        <template v-for="line in textLines2texts(response.details.thanks_text)">
          {{ line }}<br />
        </template>
      </div>

      <form v-else>
        <div v-if="error" class="error">
          <p v-for="(err, idx) in error" :key="idx" style="color: red">
            {{ err.message }}
          </p>
        </div>

        <div>
          <dl>
            <dt>{{ response.details.cols.name.title }}</dt>
            <dd><input v-model="submitData.name" name="name" type="text" /></dd>
          </dl>
          <dl>
            <dt>{{ response.details.cols.from_mail.title }}</dt>
            <dd>
              <input
                v-model="submitData.from_mail"
                name="from_mail"
                type="text"
              />
            </dd>
          </dl>
          <dl>
            <dt>{{ response.details.cols.body.title }}</dt>
            <dd><textarea v-model="submitData.body" name="body"></textarea></dd>
          </dl>
          <dl>
            <dt>{{ response.details.cols.ext_01.title }}</dt>
            <dd>
              <select v-model="submitData.ext_01" name="ext_01">
                <option
                  v-for="option in response.details.cols.ext_01.options"
                  :key="option.key"
                  :label="option.value"
                  :value="option.key"
                >
                  {{ option.key }}:{{ option.value }}
                </option>
              </select>
            </dd>
          </dl>
          <dl>
            <dt>{{ response.details.cols.ext_02.title }}</dt>
            <dd>
              <input v-model="submitData.ext_02" name="ext_02" type="date" />
            </dd>
          </dl>
          <dl>
            <dt>{{ response.details.cols.ext_03.title }}</dt>
            <dd>
              <input
                type="file"
                name="ext_03"
                @change="uploadFile($event, 'ext_03')"
              />
            </dd>
          </dl>
        </div>

        <button @click.prevent="handleOnSubmit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script setup>
const lang = ref(useI18n().locale.value);
const FORM_ID = 3;
const submitted = ref(false);
const submitData = ref({});
const error = ref(null);
const response = ref({ details: {} });
const config = useRuntimeConfig();
const getForm = async () => {
  const formData = await $fetch(
    `/rcms-api/4/form/${FORM_ID}?_lang=${lang.value}`,
    {
      method: "GET",
      baseURL: config.public.apiBase,
      credentials: "include",
    },
  );
  console.log(formData);
  response.value = formData;
};

const textLines2texts = (textLines = "") => {
  return textLines.split("\r\n");
};

const uploadFile = async (e, key) => {
  const fm = new FormData();
  fm.append("file", e.target.files[0]);
  const res = await $fetch(`/rcms-api/4/file`, {
    method: "POST",
    baseURL: config.public.apiBase,
    credentials: "include",
    body: fm,
  });
  submitData.value = {
    ...submitData.value,
    [key]: { file_id: res.file_id },
  };
};

const handleOnSubmit = async () => {
  // Post processing to kuroco endpoints
  try {
    await $fetch("/rcms-api/4/form", {
      method: "POST",
      baseURL: config.public.apiBase,
      credentials: "include",
      body: submitData.value || {},
    });
    submitted.value = true;
    error.value = null;
  } catch (e) {
    console.log({ e });
    error.value = e.response._data.errors;
  }
};
await getForm();
</script>
