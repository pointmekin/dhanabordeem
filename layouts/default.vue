<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      flat
      
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
    <v-footer
      :absolute="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
  }
}
</script>

<style>

  :root {
    --materialBlue: #5472d3
  }

  .background {
    position: relative;
    
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


  @media screen and (max-width: 600px) {
    .siteTitle {
      font-size: 1.5rem;
    }
  }

</style>
