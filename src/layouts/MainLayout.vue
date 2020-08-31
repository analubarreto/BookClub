<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="larger-screen-only">
      <q-toolbar class="constrain">
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
          color="white"
          icon-right="eva-person"
          label="Login"
          class="q-ml-xl text-capitalize"
          @click="setRegister"
          flat
        />
        <dropdown-btn v-else-if="loggedIn" />

      </q-toolbar>
    </q-header>
    <layout-footer class="small-screen-only" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
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
  },
  components: {
    "dropdown-btn": require("src/components/Layout/DropdownBtn").default,
    "layout-footer": require("src/components/Layout/LayoutFooter").default,
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

