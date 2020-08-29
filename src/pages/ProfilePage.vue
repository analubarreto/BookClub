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
@import "src/css/mixins.scss";
.page {
  background-color: $secondary;
  .image {
    width: 500px;
    height: 500px;
    border-radius: 15%;
    color: #fff;
  }
  .user-data {
    font-size: 25px;
    @include phone {
      font-size: 20px;
      margin-left: 120px;
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