<template>
  <form @submit.prevent="submitForm">
    <q-input
      outlined
      v-model="formData.email"
      ref="email"
      label="E-mail"
      lazy-rules
      placeholder="something@gmail.com"
      :hint="tab === 'register' ? 'Your e-mail must have an @ and a .com' : 'Your registered e-mail'"
      class="q-mb-lg q-mt-sm"
      :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
    />

    <q-input
      v-model="formData.password"
      ref="password"
      outlined
      label="Password"
      lazy-rules
      :type="isPwd ? 'password' : 'text'"
      :hint="tab === 'register' ? 'Please choose a password' : 'Your registered password'"
      class="q-mb-lg"
      :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters.']"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <q-btn
      v-if="tab === 'login'"
      label="Forgot password?"
      type="submit"
      color="primary"
      class="text-capitalize q-mb-lg"
      flat
    />

    <q-btn
      :label="tab"
      type="submit"
      color="primary"
      class="float-right text-capitalize q-mb-lg"
    />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["tab"],
  data () {
    return {
      isPwd: true,
      formData: {
        password: "",
        email: ""
      }
    }
  },
  methods: {
    ...mapActions("auth", ["registerUser", "loginUser"]),
    isValidEmailAddress (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitForm () {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == 'login') {
          this.loginUser(this.formData)
        }
        else {
          this.registerUser(this.formData)
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>