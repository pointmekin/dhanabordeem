<template>
  <v-footer padless dense dark :fixed="fixed">
    <v-card flat tile width="100%" height="4
    0px" class="grey darken-2 text-center">
      <v-card-text class="white--text p-0">
        ©{{ new Date().getFullYear() }} — <strong>Dhanabordee Mekintharanggur</strong>
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

<style lang="scss" scoped>
  .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 8px !important;
  }
</style>
