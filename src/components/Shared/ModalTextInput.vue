<template>
  <q-input
    ref="password"
    :label="label"
    hint="Your name must have at least 3 characters"
    class="q-mb-lg"
    label-color="primary"
    :value="name"
    lazy-rules
    outlined
    dense
  />
</template>

<script>
export default {
  props: ["name", "label"]
}
</script>