<template>
  <v-footer padless dark :fixed="fixed">
    <v-card flat tile width="100%" class="grey darken-2 text-center">
      <v-card-text class="white--text">
        ©{{ new Date().getFullYear() }} — <strong>Dhanabordee Mekintharanggur | Proudly developed by me ;)</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  props: ['fixed'],
  data() {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"]
    };
  }
};
</script>

<style></style>
