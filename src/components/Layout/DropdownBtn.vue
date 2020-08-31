<template>
  <q-btn-dropdown
    color="white"
    label="Your Account"
    no-caps
    flat
  >
    <div class="q-pa-md">
      <div class="items-center">
        <q-avatar
          size="72px"
          v-if="!userData.photoUrl"
        >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <q-avatar
          size="72px"
          v-else
        >
          <img
            :src="userData.photoUrl"
            ,
          >
        </q-avatar>

        <div class="text-subtitle1 q-mt-md q-mb-xs text-center">{{ !this.userData.name ? this.userData.email : this.userData.name }}</div>

        <q-btn
          color="primary"
          label="Logout"
          size="md"
          @click="logoutUser"
          no-caps
          v-close-popup
        />
      </div>
    </div>
  </q-btn-dropdown>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("auth", ["logoutUser", "setRegister"]),
  },
  computed: {
    ...mapGetters("profile", ["userData"])
  }
}
</script>