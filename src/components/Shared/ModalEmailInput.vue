<template>
  <q-input
    ref="email"
    label="E-mail"
    hint="Your e-mail must have an @ and a .com"
    class="q-mb-md"
    style="width: 320px;"
    label-color="primary"
    outlined
    lazy-rules
    :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
  />
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    isValidEmailAddress (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  }
}
</script>