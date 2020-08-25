<template>
  <q-page class="page">
    <q-card class="auth-card absolute-center">
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
export default {
  data () {
    return {
      tab: "login",
    }
  },
  components: {
    'login-register': require('components/Auth/LoginRegister.vue').default
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
}
</style>