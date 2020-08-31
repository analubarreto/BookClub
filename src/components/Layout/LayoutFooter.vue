<template>
  <q-footer>
    <q-toolbar>
      <q-toolbar-title>
        <q-tabs
          color="secondary"
          active-color="secondary"
        >
          <q-route-tab
            to="/profile"
            icon="eva-person"
          />
          <q-route-tab
            to="/books"
            icon="eva-book"
          />
          <q-route-tab
            to="/settings"
            icon="eva-settings"
          />
          <q-route-tab
            v-if="!loggedIn"
            icon="eva-log-in-outline"
            to="/auth"
            @click="setRegister"
          />
          <q-tab
            v-else
            icon="eva-log-out-outline"
            @click="logoutUser"
          />
        </q-tabs>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser", "setRegister"]),
  },
}
</script>