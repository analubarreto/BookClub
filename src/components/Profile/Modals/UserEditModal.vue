<template>
  <q-card
    class="q-pa-sm"
    style="max-width: 80vw;"
  >
    <div class="row">
      <div class="col-12">
        <q-card-section class="items-center q-pb-none">
          <div class="text-h6 text-weight-bold float-left">Edit user</div>
          <q-btn
            @click="setEditUser"
            icon="eva-close-outline"
            class="float-right"
            flat
            round
            dense
          />
        </q-card-section>
      </div>
      <div class="col-12 col-md-6">
        <q-card-section>
          <q-uploader
            url="http://localhost:8080/"
            style="max-width: 300px; height: 500px;"
            color="brown"
          />
        </q-card-section>
      </div>
      <div class="col-12 col-md-6">
        <q-card-section>
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
            />
            <p class="text-body2 info-text">** To change your password, please logout, click <span class="text-bold">forgot password</span> and follow the instructions. **</p>
            <q-btn
              label="Save"
              color="primary"
              text-color="secondary"
              type="submit"
              class="q-mt-xl float-right"
              no-caps
            />
          </form>
        </q-card-section>
      </div>
    </div>
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
      },
    }
  },
  methods: {
    ...mapActions("profile", ["setEditUser", "updateUser", "updateEmail"]),
    submitForm () {
      if (this.dataToSubmit.name) {
        this.updateUser({
          updates: this.dataToSubmit
        })
      }
      if (this.dataToSubmit.email) {
        this.updateEmail({
          updates: this.dataToSubmit
        })
      }
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
}
</script>

<style lang="scss">
.info-text {
  color: $info;
}
</style>