<template>
  <q-card
    class="q-pa-lg"
    style="width: 700px; max-width: 90vw;"
  >
    <div class="row">
      <div class="col-12">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-weight-bold float-left">You don't have any favorites yet</div>
          <q-space />
          <q-btn
            @click="setViewWishlist"
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
          <img
            src="../../../assets/confused-kitty.png"
            class="img"
          />
        </q-card-section>
      </div>

      <div class="col-12 col-md-6">
        <q-card-section class="q-ml-lg">
          <p class="text-body1">Please add some books in your book list to have access to favorites.</p>
        </q-card-section>
      </div>

      <div class="col-12">
        <q-card-actions class="float-right">
          <q-btn
            to="/books"
            color="warning"
            text-color="black"
          >Go to Book List</q-btn>
        </q-card-actions>
      </div>
    </div>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  methods: {
    ...mapActions("profile", ["setViewWishlist"])
  }
}
</script>

<style lang="scss">
.img {
  max-width: 250px;
}
</style>