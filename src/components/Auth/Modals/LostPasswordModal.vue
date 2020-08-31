<template>
  <q-card class="modal q-pa-lg">
    <div>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 float-left">Forgot your password? No problem! Let's recover it!</div>
        <q-space />
      </q-card-section>
      <q-input
        outlined
        v-model="formData.email"
        ref="email"
        label="E-mail"
        lazy-rules
        placeholder="something@gmail.com"
        hint="Your registered e-mail"
        class="q-mb-lg q-mt-sm"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
      />

      <q-card-section>
        <q-btn
          label="Send"
          color="primary"
          text-color="secondary"
          type="submit"
          @click="sendEmail"
          no-caps
          v-close-popup
        />
        <q-btn
          label="Cancel"
          color="primary"
          class="float-right"
          outline
          @click="setForgotPassword"
          no-caps
        />
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import { Notify } from 'quasar';

export default {
  data () {
    return {
      formData: {
        email: ""
      },
      dialog: false
    }
  },
  methods: {
    isValidEmailAddress (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    sendEmail () {
      console.log();
      this.sendResetPasswordEmail(this.formData);
      this.setForgotPassword();
    },
    ...mapActions("auth", ["setForgotPassword", "sendResetPasswordEmail"])
  },
}
</script>