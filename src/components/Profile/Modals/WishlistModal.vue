<template>
  <q-card
    flat
    class="q-pa-lg"
    style="width: 700px; max-width: 90vw;"
  >
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h4 text-weight-bold">You don't have any favorites yet</div>
      <q-space />
      <q-btn
        @click="setViewWishlist"
        icon="eva-close-outline"
        flat
        round
        dense
      />
    </q-card-section>
    <q-card-section
      class="q-mt-lg"
      horizontal
    >
      <q-card-section>
        <img
          src="../../../assets/confused-kitty.png"
          class="img"
        />
      </q-card-section>

      <q-card-section class="q-ml-lg">
        <p class="text-body1">Please add some books in your book list to have access to favorites.</p>
      </q-card-section>
    </q-card-section>
    <q-card-actions class="float-right">
      <q-btn
        no-caps
        color="blue"
      >Go to Book List</q-btn>
    </q-card-actions>
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