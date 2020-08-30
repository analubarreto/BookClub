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
        <form @submit.prevent="submitForm">
          <text-input label="Name" />
          <email-input />
          <pwd-input label="Password" />
          <pwd-input label="New Password" />
        </form>

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
import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions("profile", ["setEditUser", "addUserDetail"]),
    submitForm () {
      this.addUserDetail(this.newUserDetails);
      this.setEditUser;
    }
  },
  computed: {
    ...mapState("profile", ["userDetails"])
  },
  components: {
    "pwd-input": require("src/components/Shared/ModalPasswordInput").default,
    "email-input": require("src/components/Shared/ModalEmailInput").default,
    "text-input": require("src/components/Shared/ModalTextInput").default,
  }
}
</script>