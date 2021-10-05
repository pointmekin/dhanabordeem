<template>
  <div class="page-container">
    <div class="container">
      <div class="main">
          <div
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="1000" 
          >
            <div class=" greetings">
              <p>{{ this.greetings }} <b>Point</b></p>
            </div>
            <div class="name mt-5">
              <h2>Dhanabordee</h2>
              <h2>Mekintharanggur</h2>
            </div>
            <div class="information mt-3">
              <h4>I’m a frontend developer.</h4>
              <p class="mt-3">CU103 | ISE <br/>
                  Information and Communication Engineering <br/>
                  Welcome to the collection of my experiences.
              </p>
            </div>

            <div class="connections my-5">
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
              Download my <a href="#">CV</a> and <a href="#">Resume</a>
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


export default {
  name:"Intro",
  components: {BouncingArrow},
  mounted() {
    AOS.init();
  },
  data() {
    return {
      greetings: "Greetings, my name is ",
      show: false,
      technicalSkills: ["Front-end Development", "UI/UX Designing", "Photo and Video Editting", "Graphic Designing"],
      softSkills: ["Critical-thinker", "Effective Communicator", "Presentation and Public Speaking", "Collaborative Worker", "Tech Savvy"]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./intro.style.scss"
</style>