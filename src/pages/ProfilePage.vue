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
        <q-btn
          color="primary"
          text-color="secondary"
          label="Edit"
          class="text-capitalize"
        />
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
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 5%;
    background: #fff;
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