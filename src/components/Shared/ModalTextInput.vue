<template>
  <q-input
    ref="name"
    :label="label"
    hint="Your name must have at least 3 characters"
    class="q-mb-lg"
    label-color="primary"
    :value="name"
    @input="$emit('update:name', $event)"
    lazy-rules
    outlined
  />
</template>

<script>
export default {
  props: ["name", "label"]
}
</script>