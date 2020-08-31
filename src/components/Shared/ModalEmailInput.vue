<template>
  <q-input
    ref="email"
    label="E-mail"
    placeholder="something@gmail.com"
    class="q-mb-lg q-mt-sm"
    hint="Your e-mail must have an @ and a .com"
    label-color="primary"
    :value="email"
    :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
    @input="$emit('update:email', '')"
    outlined
    lazy-rules
    dense
  />
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ["email"],
  methods: {
    isValidEmailAddress (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  }
}
</script>