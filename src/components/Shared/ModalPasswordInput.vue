<template>
  <q-input
    ref="password"
    :label="label"
    :type="isPwd ? 'password' : 'text'"
    :hint="label == 'Password' ? 'Your current password' : 'Your new password must have at least 6 characters'"
    class="q-mb-lg"
    label-color="primary"
    :rules="[ val => val.length >= 3 || 'Please use at least 3 characters']"
    lazy-rules
    outlined
    dense
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'eva-eye-outline' : 'eva-eye-off-outline'"
        class="cursor-pointer"
        color="primary"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  data () {
    return {
      isPwd: true
    }
  },
  props: ["label"]
}
</script>