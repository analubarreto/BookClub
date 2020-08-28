<template>
  <q-page
    class="page"
    padding
  >
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

    <q-dialog v-model="forgotPassword">
      <lost-password />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data () {
    return {
      tab: "register",
    }
  },
  components: {
    'login-register': require('components/Auth/LoginRegister.vue').default,
    'welcome-register': require('components/Auth/WelcomeRegister.vue').default,
    'lost-password': require('components/Auth/Modals/LostPasswordModal.vue').default,
  },
  methods: {
    ...mapActions("auth", ["setForgotPassword"])
  },
  computed: {
    ...mapState("auth", ["register", "forgotPassword"])
  }
}
</script>

<style lang="scss">
@import "src/css/mixins.scss";
.page {
  background-color: $secondary;
  .auth-card {
    width: 100%;
    max-width: 500px;
    .tab-title-color {
      color: $accent;
    }
  }
  .welcome {
    margin-left: 240px;
    margin-top: 150px;

    @include phone {
      margin-left: 0;
      margin-top: 0;
    }

    @include tablet {
      margin-left: 0;
      margin-top: 0;
    }
  }
}
</style>