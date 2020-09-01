<template>
  <q-page class="page">
    <main class="row absolute-center">
      <div class="column">
        <div
          v-if="!userData.photoUrl"
          class="image"
        />
        <img
          v-else
          :src="userData.photoUrl"
          class="image"
          alt=""
        >
      </div>
      <div class="column">
        <p class="user-data">Name: {{ !this.userData.name ? this.userData.email : this.userData.name }}</p>
        <p class="user-data">E-mail: {{ this.userData.email }}</p>
        <span class="row">
          <p class="user-data">Verified: {{ !this.userData.emailVerified ? "No" : "Yes" }}</p>
          <q-btn
            v-if="!this.userData.emailVerified"
            color="negative"
            label="Verify now"
            class="q-ml-md verify-btn"
            text-color="white"
            size="md"
            @click="sendEmailVerification"
            dense
          />
        </span>

        <span class="row q-mt-lg btns">
          <q-btn
            @click="setViewWishlist"
            color="primary"
            icon="eva-star"
            label="Wishlist"
            class="q-mb-md q-mt-md column"
            size="md"
            no-caps
            flat
          />
          <q-btn
            @click="setEditUser"
            color="primary"
            icon="eva-edit"
            label="Edit"
            class="q-mb-md q-mt-md text-capitalize column"
            text-color="primary"
            size="md"
            push
            flat
          />
        </span>
      </div>
    </main>
    <q-dialog :value.sync="editUser">
      <user-edit />
    </q-dialog>
    <q-dialog :value.sync="viewWishlist">
      <view-wishlist />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("profile", ["editUser", "viewWishlist"]),
    ...mapGetters("profile", ["userData"]),
  },
  methods: {
    ...mapActions("profile", ["setEditUser", "setViewWishlist"]),
    ...mapActions("auth", ["sendEmailVerification"])
  },
  components: {
    "user-edit": require("src/components/Profile/Modals/UserEditModal").default,
    "view-wishlist": require("src/components/Profile/Modals/WishlistModal").default,
  }
}
</script>

<style lang="scss">
@import "src/css/mixins.scss";
.page {
  background-color: $secondary;
  .image {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 5%;
    background: #fff;
    bottom: 25%;
    margin-right: 100px;

    @include phone {
      margin-left: 15px;
      margin-right: 0;
      margin-top: 170px;
    }

    @include tablet {
      margin-left: 100px;
      margin-right: 0;
    }
  }
  .user-data {
    position: relative;
    font-size: 25px;
    bottom: 40px;
    @include phone {
      font-size: 20px;
      margin-left: 80px;
    }

    @include tablet {
      margin-left: 100px;
    }

    .wishlist {
      color: #6c7194;

      &:hover {
        color: #939bcc;
        cursor: pointer;
      }
    }
  }
  .column {
    margin-top: 200px;
    @include phone {
      margin-top: 0;
    }
    @include tablet {
      margin-top: 0;
    }
  }

  .btns {
    position: relative;
    bottom: 245px;
    right: 15px;

    @include phone {
      bottom: 45px;
      right: 0;
      left: 60px;
    }

    @include tablet {
      bottom: 70px;
      right: 0;
      left: 80px;
    }
  }

  .verify-btn {
    position: relative;
    bottom: 40px;
    @include phone {
      width: 90px;
    }
  }
}
</style>