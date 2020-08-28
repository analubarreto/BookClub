<template>
  <q-page class="page">
    <main class="row absolute-center">
      <div class="column">
        <div class="image" />
      </div>
      <div class="column">
        <p class="user-data">Lucifer Morning Star</p>
        <p class="user-data">lucifermorningstart@gmail.com</p>
        <span class="user-data">
          <p
            class="wishlist"
            clickable
          >
            <q-icon
              name="grade"
              style="color: #6C7194; font-size: 1.4em;"
            />
            Wishlist</p>
        </span>
      </div>
    </main>
  </q-page>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.page {
  background-color: $secondary;
  .image {
    width: 500px;
    height: 500px;
    border-radius: 15%;
    color: #000;
  }

  .user-data {
    font-size: 25px;

    .wishlist {
      color: #6c7194;

      &:hover {
        color: #939bcc;
        cursor: pointer;
      }
    }
  }
}
</style>