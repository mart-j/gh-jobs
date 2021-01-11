<template>

      <div class="row">
        <div class="col-xs-offset-1 col-xs-10">
          <Logo />
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f6f7fb;
  font-weight: 500;
}
</style>
