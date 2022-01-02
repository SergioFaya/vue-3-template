<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="pt-3 pb-3">
      <button
        class="btn btn-primary"
        @click="setSpinner"
      >Loading</button>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string

  setSpinner(): void {
    const loader = this.$loading.show();

    setTimeout(() => {
      loader.hide();
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
