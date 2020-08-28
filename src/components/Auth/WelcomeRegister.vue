<template>
  <div class="main">
    <h2 class="title">Welcome to Book Club</h2>
    <p class="text">This is a free app for you that like me just loses track of what you want to read next and just keeps on buying more and more books.</p>
    <q-btn
      label="Register"
      color="primary"
      text-color="secondary"
      class="text-capitalize q-mb-lg btn"
      @click="setRegister"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["setRegister"])
  }
}
</script>

<style lang="scss" scoped>
@import "src/css/mixins.scss";
.main {
  @include phone {
    margin-top: 240px;
  }
  .text {
    max-width: 400px;
    font-size: 20px;
    @include phone {
      font-size: 15px;
      text-align: center;
      padding: 0 30px 0 30px;
    }
    @include tablet {
      font-size: 20px;
      text-align: center;
      padding: 0 15px 0 15px;
      margin-left: 130px;
      max-width: 500px;
    }
  }
  .title {
    @include phone {
      font-size: 40px;
    }
    @include tablet {
      font-size: 70px;
      margin-left: 25px;
    }
  }
  .btn {
    @include phone {
      margin-left: 160px;
    }
    @include tablet {
      margin-left: 340px;
    }
  }
}
</style>