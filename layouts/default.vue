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
        <v-list-item v-for="nav in this.navbar" :key="nav.title" @click="push(nav.to)">
          <v-list-item-action>
            <v-icon light>
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

import Footer from "../layouts/footer"

export default {
  components: { Footer },
  data () {
    return {
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
          icon: "mdi-repeat",
          to:"/profile"
        },{
          title: "My Works",
          icon: "mdi-repeat",
          to:"/myworks"
        },{
          title: "Contact",
          icon: "mdi-repeat",
          to:"/contact"
        }
      ],
      screenWidth: null
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.getCookie("isDarkTheme")
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
  },
  methods: {
    push(location) {
      this.$router.push(location)
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark 
      this.setCookie("isDarkTheme", this.$vuetify.theme.dark, 999)
      window.location.reload()
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

  :root {
    --materialBlue: #5472d3
  }
  
  .darkTheme {
    p {
      transition: 1s;
      color: rgb(202, 202, 202);
    }
    .default-card{
      background-color: rgb(44, 44, 44);
      padding: 10px;
    }
    .default-shadow{
      -webkit-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
      -moz-box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
      box-shadow: 6px 34px 55px -11px rgb(17, 17, 17);
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

  p {
    color: hsla(0, 0%, 45%, 0.822);
  }


  @media screen and (max-width: 600px) {
    .siteTitle {
      font-size: 1.5rem;
    }
  }

</style>
