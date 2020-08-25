<template>
  <q-page class="page">
    <div
      v-if="!register"
      class="float-left welcome"
    >
      <welcome-register />
    </div>

    <q-card
      class="auth-card absolute-center"
      v-else
    >
      <q-tabs
        v-model="tab"
        class="tab-title-color"
      >
        <q-tab
          label="Login"
          name="login"
          class="text-capitalize"
        />
        <q-tab
          label="Register"
          name="register"
          class="text-capitalize"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>
        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  data () {
    return {
      tab: "register",
    }
  },
  components: {
    'login-register': require('components/Auth/LoginRegister.vue').default,
    'welcome-register': require('components/Auth/WelcomeRegister.vue').default
  },
  computed: {
    ...mapState("auth", ["register"])
  }
}
</script>

<style lang="scss">
.page {
  background-color: $secondary;
  .auth-card {
    width: 100%;
    max-width: 500px;
    .tab-title-color {
      color: $accent;
    }
  }
  .text {
    max-width: 400px;
    font-size: 20px;
  }

  .welcome {
    margin-left: 240px;
    margin-top: 150px;
  }
}
</style>