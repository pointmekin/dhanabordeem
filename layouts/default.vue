<template>
  <v-app class="relative" :class="this.$vuetify.theme.dark ? 'darkTheme' : 'lightTheme' ">
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevate-on-scroll
    >
      <div role="button" class="siteTitle" @click="push('/')">
        <v-toolbar-title v-text="title" class="siteTitle mr-5"/>
      </div>
      
      <div v-if="this.screenWidth >=780">
        <v-btn v-for="nav in this.navbar" :key="nav.title" @click="push(nav.to)" depressed color="transparent" class="ml-3">
          {{ nav.title }}
        </v-btn>  
      </div>

      <v-spacer />

      <v-btn-toggle
        background="transparent"
        borderless
        background-color="rgba(0,0,0,0)"  
      >
        <v-btn
          icon
          @click.stop="toggleTheme()"
          depressed
        >
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-btn-toggle>

      <v-btn
        v-if="this.screenWidth < 780"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      
    </v-app-bar>
    <div>
      <Background v-if="renderComponent"/>
    </div>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click="push('/')">  
          <v-list-item-action v-if="screenWidth < 780">
            <v-icon>
              mdi-home
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="nav in this.navbar" :key="nav.title" @click="push(nav.to)">  
          <v-list-item-action>
            <v-icon>
              {{ nav.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>{{nav.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from "../layouts/footer"
import Background from "../layouts/background"
import { defaultMeta } from '~/components/meta';

export default {
  components: { Footer, Background },
  head: {
    title: "Dhanabordee's Portfolio",
    meta: [
      ...defaultMeta
    ]
  },
  data () {
    return {
      renderComponent: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Pointmekin',
      navbar: [
        {
          title: "Profile",
          icon: "mdi-badge-account-horizontal",
          to:"/profile"
        },{
          title: "My Works",
          icon: "mdi-briefcase",
          to:"/myworks"
        },{
          title: "Contact",
          icon: "mdi-card-account-mail",
          to:"/contact"
        }
      ],
      screenWidth: null
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.getCookie("isDarkTheme")
    AOS.init();
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
    window.addEventListener('reload', () => {
      window.scrollTo(0, 0);
      AOS.init();
    })
  },
  methods: {
    push(location) {
      this.$router.push(location)
    },
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark 
      this.setCookie("isDarkTheme", this.$vuetify.theme.dark, 999)
      //window.location.reload()
      this.forceRerender()
    },
    setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  },
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap');

  :root {
    --materialBlue: #5472d3;
  }
  
  #app {
    font-family: 'Roboto Slab', serif;
  }

  .darkTheme {
    p {
      transition: 1s;
      color: rgb(202, 202, 202);
    }
    .default-card{
      background-color: rgb(77, 77, 77);
      padding: 10px;
    }
    .default-shadow{
      -webkit-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
      -moz-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
      box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
    }
    .invert-text-color{
      color: rgb(51, 51, 51);
    }

  }

  .lightTheme {
    p {
      transition: 1s;
      color: rgb(88, 88, 88);
    }
    .default-card{
      background-color: rgb(255, 255, 255);
      padding: 10px;
    }
    .default-shadow{
      -webkit-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
      -moz-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
      box-shadow: 6px 34px 55px -11px rgba(197, 197, 197, 0.5);
    }
    .invert-text-color{
      color: rgb(255, 255, 255);
    }
  }

.v-card__text, .v-card__title {
word-break: normal;
}

.v-card {
  border-radius: 12px !important;

  
}

.theme--dark.v-card {
    -webkit-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17) !important;
      -moz-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17) !important;
      box-shadow: 6px 34px 55px -11px rgb(17, 17, 17)  !important;
}

.theme--light.v-card {
    -webkit-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17) !important;
      -moz-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17) !important;
      box-shadow: 6px 34px 55px -11px rgba(197, 197, 197, 0.5) !important;
}
  
  .relative {
    position: relative;
  }

  .background {
    position: relative;
    .default-card{
      background-color: rgb(255, 255, 255);
    }
  }

  hr {
    border-color: rgba(179, 179, 179, 0.3);
  }

  .footer {
    grid-area: footer;
    position: absolute;
    bottom: 0;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1 !important;
  }

  .siteTitle {
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
  }

  .v-toolbar__title{
    transition: 1s ease;
  }

  .v-toolbar__title:hover {
    transform: scale(1.05, 1.05);
    transition: 0.5s ease;
  }

  p {
    color: hsla(0, 0%, 45%, 0.822);
  }


  @media screen and (max-width: 600px) {
    .siteTitle {
      font-size: 1.5rem;
    }
  }

</style>
