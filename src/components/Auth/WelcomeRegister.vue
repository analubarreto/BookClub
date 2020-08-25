<template>
  <div>
    <h2>Welcome to Book Club</h2>
    <p class="text">This is a free app for you that like me just loses track of what you want to read next and just keeps on buying more and more books.</p>
    <q-btn
      label="Register"
      color="primary"
      class="text-capitalize q-mb-lg"
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