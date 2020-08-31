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
          <q-input
            ref="name"
            label="Name"
            hint="Your name must have at least 3 characters"
            class="q-mb-lg"
            label-color="primary"
            v-model="dataToSubmit.name"
            lazy-rules
            outlined
            dense
          />
          <q-input
            ref="email"
            label="E-mail"
            placeholder="something@gmail.com"
            class="q-mb-lg q-mt-sm"
            hint="Your e-mail must have an @ and a .com"
            label-color="primary"
            v-model="dataToSubmit.email"
            :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
            outlined
            lazy-rules
            dense
          />
          <pwd-input label="Password" />
          <pwd-input label="New Password" />
          <q-btn
            label="Save"
            color="primary"
            text-color="secondary"
            type="submit"
            class="q-mt-xl"
            no-caps
          />

          <q-btn
            label="Cancel"
            color="primary"
            text-color="primary"
            class="q-mt-xl q-ml-md"
            @click="setEditUser"
            flat
            no-caps
          />
        </form>

      </q-card-section>
    </div>

    <q-card-actions
      align="right"
      class="bg-white text-teal"
    >
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Notify } from "quasar";
import profilePicture from "src/assets/analu.jpg";
export default {
  data () {
    return {
      dataToSubmit: {
        name: "",
        email: "",
        photoUrl: ""
      }
    }
  },
  methods: {
    ...mapActions("profile", ["setEditUser", "updateUser", "updateEmail"]),
    submitForm () {
      this.updateUser({
        updates: this.dataToSubmit
      })
      this.updateEmail({
        updates: this.dataToSubmit
      })
      this.setEditUser(false)
    },
    isValidEmailAddress (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  computed: {
    ...mapGetters("profile", ["userData"])
  },
  components: {
    "pwd-input": require("src/components/Shared/ModalPasswordInput").default,
    "email-input": require("src/components/Shared/ModalEmailInput").default,
    "text-input": require("src/components/Shared/ModalTextInput").default,
  }
}
</script>