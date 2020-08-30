<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          <a
            href="/"
            class="link app-title"
          >Book Club</a>
        </q-toolbar-title>

        <q-space />

        <div class="q-mr-xl">
          <q-btn-toggle
            v-model="model"
            no-caps
            flat
            stretch
            toggle-color="accent"
            :options="[
            {label: 'Profile', value: 'profile', to:'/profile'},
            {label: 'Books', value: 'books', to: '/books'},
            {label: 'Settings', value: 'settings', to: '/settings'}
          ]"
          />
        </div>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          color="white"
          icon-right="account_circle"
          label="Login"
          class="q-ml-xl text-capitalize"
          @click="setRegister"
        />
        <q-btn
          @click="logoutUser"
          v-else-if="loggedIn"
          flat
          color="white"
          icon-right="account_circle"
          label="Logout"
          class="q-ml-xl text-capitalize"
        />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainLayout',
  data () {
    return {
      model: ''
    }
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser", "setRegister"]),
    openURL
  },
  components: {
    "dropdown-btn": require("src/components/Layout/DropdownBtn").default
  }
}
</script>

<style lang="scss" scoped>
.phone {
  width: 375px;
}

a.app-title {
  font-family: oxtail, serif;
  font-size: 30px;
}
.link {
  text-decoration: none;
  color: $secondary;

  &:hover {
    color: $accent;
  }
}
</style>

