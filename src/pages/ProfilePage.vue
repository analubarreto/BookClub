<template>
  <q-page class="page">
    <main class="row absolute-center">
      <div class="column">
        <!-- <div  /> -->
        <img
          :src="this.userDetails.image"
          class="image"
          alt=""
        >
      </div>
      <div class="column">
        <p class="user-data">{{ this.userDetails.name }}</p>
        <p class="user-data">{{ this.userDetails.email }}</p>
        <q-btn
          color="primary"
          icon="grade"
          label="Wishlist"
          class="q-mb-md"
          text-color="blue"
          no-caps
          flat
        />
        <q-btn
          @click="setEditUser"
          color="primary"
          text-color="secondary"
          label="Edit"
          class="text-capitalize"
          push
        />
      </div>
    </main>
    <q-dialog :value.sync="editUser">
      <user-edit />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("profile", ["editUser", "userDetails"]),
  },
  methods: {
    ...mapActions("profile", ["setEditUser"])
  },
  components: {
    "user-edit": require("src/components/Profile/Modals/UserEditModal").default
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
    // background: #fff;
    bottom: 25%;
    margin-right: 100px;

    @include phone {
      margin-left: 50px;
      margin-right: 0;
    }

    @include tablet {
      margin-left: 100px;
      margin-right: 0;
    }
  }
  .user-data {
    font-size: 25px;
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
}
</style>