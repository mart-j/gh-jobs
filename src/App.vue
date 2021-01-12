<template>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-10">
      <div class="logoWrapper">
        <Logo />
      </div>
    </div>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Logo from './components/logo/Logo.vue';
import 'flexboxgrid';

export default defineComponent({
  components: { Logo },
});
</script>

<style lang="scss">
@import './App.scss';
</style>
