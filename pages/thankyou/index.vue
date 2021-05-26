<template>
  <div 
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000" 
  >
    <div class="contact-card-container">
      <div class="mt-10 contact-card default-card default-shadow">
        <div>
          <h2>Thank you for submitting!</h2>
          <p>Redirecting you to the home page...</p>
        </div>
      </div>

    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>

</template>

<script>
export default {
  name:"Thankyou",
  created() {
    setTimeout( () => this.$router.push({ path: '/'}), 3000);
  }
}
</script>

<style lang="scss" scoped>

.contact-card {
  position: relative;
  display: flex;
  margin: 0 auto;
  height: 500px;
  width: 90vw;
  align-items: center;
  border-radius: 24px;
  justify-content: center;

}

.contact-form-container {
  z-index: 20;
  width: 50%;
  margin: 0 auto !important;
}

.contact-card-container {
  max-width: 1200px;
  display: flex;
  margin: 0 auto !important;

}

a {
  text-decoration: none;
  color: inherit !important;
}


</style>