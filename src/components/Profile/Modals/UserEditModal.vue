<template>
  <q-card
    class="q-pa-sm"
    style="width: 700px; max-width: 80vw;"
  >
    <div class="row">
      <q-card-section class="column">
        <q-uploader
          url="http://localhost:8080/"
          style="max-width: 300px; height: 500px;"
          color="brown"
        />
      </q-card-section>

      <q-card-section class="column">
        <email-input />
        <pwd-input label="Password" />
        <pwd-input label="New Password" />

      </q-card-section>
    </div>

    <q-card-actions
      align="right"
      class="bg-white text-teal"
    >
      <q-btn
        label="Save"
        color="primary"
        text-color="secondary"
        type="submit"
        @click="setEditUser"
        no-caps
      />
      <q-btn
        label="Cancel"
        color="primary"
        class="float-right"
        outline
        @click="setEditUser"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("profile", ["setEditUser"]),
  },
  components: {
    "pwd-input": require("src/components/Shared/ModalPasswordInput").default,
    "email-input": require("src/components/Shared/ModalEmailInput").default,
  }
}
</script>