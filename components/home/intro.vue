<template>
  <div class="page-container">
    <div class="container">
      <div class="main">
          <div
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="1000" 
          >
            <div class="greetings">
              <p>{{ this.greetings }} <b>Point</b></p>
            </div>
            <div class="name mt-5">
              <h2>Dhanabordee</h2>
              <h2>Mekintharanggur</h2>
            </div>
            <div class="information mt-3">
              <div class="wrapper">
                <div class="static-txt">I'm a</div>
                <ul :class="isDarkTheme ? 'dark' : 'light'" class="dynamic-txts">
                  <li><span>Full-stack Developer &nbsp;</span></li>
                  <li><span>Full-stack Developer &nbsp;</span></li>
                  <li><span>UI / UX Designer    &nbsp;</span></li>
                  <li><span>UI / UX Designer    &nbsp;</span></li>
                  
                </ul>
              </div>
              
              <p class="mt-3">CU103 | ISE <br/>
                  Information and Communication Engineering <br/>
                  Welcome to the collection of my experiences.
              </p>
            </div>

            <div class="connections">
              <div class="logo">
                <a href="https://www.linkedin.com/in/dhanabordee-m/" target="_blank">
                  <img src="../../assets/linkedin.svg" alt="">
                </a>
              </div>
              <div class="logo">
                <a href="https://github.com/pointmekin" target="_blank">
                  <img src="../../assets/github.svg" alt="">
                </a>
              </div>
            </div>
            <div class="links">
              Download my 
              <a href="https://drive.google.com/drive/folders/1TTybFkX_Qt7DNtaTC23M1RgtcHTRQpU3?usp=sharing" target="_blank">Resume</a>
              and 
              <a href="https://drive.google.com/drive/folders/1aOLWwlnKE9PGWY1gIVLAqfuvQ7D1LVAu?usp=sharing" target="_blank">CV</a>
            </div>
            <hr class="mt-5 mb-3"/>
          </div>
          
          
          <div class="anchor">
            <v-btn
              depressed
              color="primary"
              block
              class="mt-5"
              @click="$router.push('/myworks')"
            >
              Portfolio
            </v-btn>
            <div class="layer-img profile-img">
              <img src="../../assets/bg-gradient.png" alt="" class="fixed" >
            </div>
          </div>
      </div>
      <transition name="fade">
        <div class="sidebar profile-img">
          <img src="../../assets/Point.jpeg" alt="" class="profile-img">
        </div>
      </transition>

      <div class="section">

        <!-- SKILLS SECTION -->
        <div class="section section-divider arrow-container">
          <BouncingArrow class="mx-auto"/>
        </div>
        <p class="subtitle">SKILLS</p>
        <div 

          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <div class="skills-section">
            <v-toolbar-title class="section skill-title">Technical Skills</v-toolbar-title>
            <div  class="flexbox skill">
              <div v-for="(skill, i) in technicalSkills" :key="i" class="item">
                <div class="skill-content">
                  <p>{{skill}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="skills-section mt-8">
            <v-toolbar-title class="section skill-title">Soft Skills</v-toolbar-title>
            <div  class="flexbox skill">
              <div v-for="(skill, i) in softSkills" :key="i" class="item">
                <div class="skill-content">
                  <p>{{skill}}</p>
                </div>
              </div>
            </div>
          </div>
          <v-btn
              depressed
              color="primary"
              class="mt-5"
              @click="$router.push('/myworks')"
            >
              View All
            </v-btn>
        </div>

        <div class="section section-divider bottom-section-divider"></div>
      
        
        
      </div>
      
    </div>
  </div>
</template>

<script>
import BouncingArrow from "../../components/styleComponents/animatedArrow"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { defaultMeta } from '../meta';

export default {
  name:"Intro",
  components: {BouncingArrow},
  head: {
    title: "Dhanabordee's Portfolio",
    meta: [
      ...defaultMeta
    ]
  },
  mounted() {
    AOS.init();
  },
  computed: {
    isDarkTheme: function(){
      return this.$vuetify.theme.dark
    }
  },
  data() {
    return {
      greetings: "Greetings, my name is ",
      show: false,
      technicalSkills: ["Full-stack Development", "UI/UX Designing", "Photo and Video Editting", "Graphic Designing"],
      softSkills: ["Critical-thinker", "Effective Communicator", "Presentation and Public Speaking", "Collaborative Worker", "Tech Savvy"],
      // isDarkTheme: this.getCookie("isDarkTheme"),
   }
  },
  methods: {
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./intro.style.scss"
</style>