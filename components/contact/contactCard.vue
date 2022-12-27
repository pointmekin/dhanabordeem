<template>
  <div 
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000" 
  >
    <div class='contact-card-container' >
      <div class="mt-10 contact-card " :class=" this.screenWidth > 999 ? 'default-card default-shadow' : ''"> 
        <img src="../../assets/ball.svg" alt="" id="ball1">
        <img src="../../assets/ball2.svg" alt="" id="ball2">
        <div class="glass-card">
          <v-card-title  class="card-title p-0 ">Dhanabordee<br/>Mekintharanggur</v-card-title>
          <div class="mt-5">
            <p>Address</p>
            <p>
              559/204, Nonsi 20, Chong Nonsi, <br/>Yannawa, Bangkok, 10120
            </p>
            <div class="contact-area ">
              <a href="tel:0971249953" >
                <div class="contact-button" id="button1">
                  <v-col>
                  <v-icon dark>mdi-phone</v-icon>
                  <div>+66 97 124 9953</div>
                  </v-col>
                </div>
              </a>

              <a>
                <div class="contact-button" id="button2" @click="copyToClipboard('pointmekin@gmail.com')">
                <v-col>
                <v-icon dark>mdi-email</v-icon>
                <div>pointmekin@gmail.com</div>
                </v-col>
              </div>
              </a>
              <a href="https://www.linkedin.com/in/dhanabordee-m/" target="_blank">
                <div class="contact-button" id="button3">
                  <v-col>
                  <v-icon dark>mdi-linkedin</v-icon>
                  <div>pointmekin@gmail.com</div>
                  </v-col>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="contact-form-container" :class="screenWidth < 1000 ? 'default-card' : '' ">
          <h2>Contact</h2>
          <p>Tap the action cards or email me with the form below.</p>
          <form action="https://formsubmit.co/pointmekin@gmail.com" method="POST">
              <v-text-field
                v-model="form.name"
                :rules="rules.name"
                color="primary lighten-2"
                label="Name"
                name="name"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                :rules="rules.email"
                color="primary lighten-2"
                label="Email"
                type="email"
                name="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.message"
                :rules="rules.name"
                color="primary lighten-2"
                label="Message"
                required
                name="message"
              ></v-text-field>
              <input type="hidden" name="_next" value="https://dhanabordeem.site/thankyou">
              <v-btn color="blue" dark elevation="0" class="d-flex float-right" type="submit">Send</v-btn>
          </form>
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
  name:"ContactCard",
  data() {
    const defaultForm = Object.freeze({
      name: '',
      email: '',
      message: '',
    })
    return {
      snackbar: false,
      text: 'Copied to Clipboard',
      timeout: 2000,
      form: Object.assign({}, defaultForm),
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required'],
          email: [val => (val || '').length > 0 || 'This field is required'],
          message: [val => (val || '').length > 0 || 'This field is required'],
        },
        defaultForm,
        screenWidth:0
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
  },
  methods: {
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.snackbar = true
      
    }
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
}

.contact-form-container {
  grid-area: contact-form-container;
  z-index: 20;
  width: 80%;
  margin: 0 auto !important;
}

.glass-card {
  grid-area: glass-card;
  height: 92%;
  width: 400px;
  background: rgb(63,101,255);
  background: linear-gradient(90deg, rgba(63,101,255,1) 0%, rgba(0,176,255,1) 100%);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  margin-left: 10px;
  z-index: 10;
  padding: 16px;
  color: white;

  p {
    color: white;
  }
  

  .v-card__title  {
    padding: 0px !important;
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

#ball1 {
  position: absolute;
  left: -3%;
  bottom: -5%;
}
#ball2 {
  position: absolute;
  left: 3%;
  bottom: -7%;
  z-index: 20;
}

.contact-card-container {
  max-width: 1200px;
  display: flex;
  margin: 0 auto !important;

}

#button1 {
  grid-area: button1;
}

#button2 {
  grid-area: button2;
}


.contact-button {
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.158);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition: 1s ease;
}

.contact-button:hover {
  -webkit-box-shadow:0px 0px 164px 6px rgba(250,250,250,0.43);
  -moz-box-shadow: 0px 0px 164px 6px rgba(250,250,250,0.43);
  box-shadow: 0px 0px 164px 6px rgba(58, 58, 58, 0.43);
  transform: translateY(-10%);
  transition: 0.5s ease;
}

.contact-area {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "button1 button2"
    "buttom3 button4";
  
    font-size: 0.8rem;
}

.contact-card{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "glass-card contact-form-container";
    font-size: 0.8rem;
}

a {
  text-decoration: none;
  color: inherit !important;
  cursor: pointer !important;
}

@media screen and (max-width: 1000px) {
  .contact-card{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "glass-card"
    "contact-form-container";
    font-size: 0.8rem;
  margin: 0 auto;

}

.glass-card {
  margin: 0 auto !important;
  height: 450px;
  width: 100%;
  margin-left: 0;
}

#ball1 {
  display: none;
}

#ball2 {
  display: none;
}

.contact-form-container{
  padding: 24px;
  border-radius: 12px;
  width: 100%;
}

.contact-area {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "button1"
    "button2"
    "buttom3";
  
    font-size: 0.8rem;
}

}

</style>