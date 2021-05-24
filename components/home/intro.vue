<template>
  <div class="content">
    <div class="container">
      <div class="main">
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
              <img src="../../assets/linkedin.svg" alt="">
            </div>
            <div class="logo">
              <img src="../../assets/github.svg" alt="">
            </div>
          </div>

          <div class="links">
            Download my <a href="#">CV</a> and <a href="#">Resume</a>
          </div>

          <hr class="mt-5 mb-3"/>
          
          <div class="anchor">
            <v-btn
              depressed
              color="primary"
              block
              class="mt-5"
            >
              Portfolio
            </v-btn>
            <div class="layer-img profile-img">
              <img src="../../assets/bg-gradient.png" alt="" class="fixed" >
            </div>
          </div>
      </div>
      <div class="sidebar profile-img">
        <img src="../../assets/Point.jpeg" alt="" class="profile-img">
      </div>

      <div class="section">

        <!-- SKILLS SECTION -->
        <div class="section section-divider arrow-container">
          <BouncingArrow class="mx-auto"/>
        </div>
        <p class="subtitle">SKILLS</p>
        <div class="skills-section">
          <v-toolbar-title class="section skill-title">Technical Skills</v-toolbar-title>
          <div  class="flexbox skill">
            <div v-for="skill in technicalSkills" :key="skill" class="item">
              <div class="skill-content">
                <p>{{skill}}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-section mt-10">
          <v-toolbar-title class="section skill-title">Soft Skills</v-toolbar-title>
          <div  class="flexbox skill">
            <div v-for="skill in technicalSkills" :key="skill" class="item">
              <div class="skill-content">
                <p>{{skill}}</p>
              </div>
            </div> 
          </div>
        </div>

        <!-- DISCOVER MY WORKS SECTION -->
        <div class="section section-divider arrow-container">
          <BouncingArrow class="mx-auto"/>
        </div>
        <p class="subtitle">HIGHLIGHT</p>
        <v-toolbar-title class="section">Discover My Works</v-toolbar-title> 
        <v-tabs
          class="section"
          background-color="transparent"
          color="deep-blue accent-1"
          right
          dense
          mobile-breakpoint="780"
        >
          <v-tab>All</v-tab>
          <v-tab>Web Development</v-tab>
          <v-tab>Mobile</v-tab>
          <v-tab>Design</v-tab>
          <v-tab-item
            v-for="n in 4"
            :key="n"
            background-color="transparent"
          >
            <v-row background-color="transparent" class="">
              <v-col  
                v-for="i in 3"
                :key="i"
                cols="12"
                md="4"
                sm="6"
              >
                <div class="project-preview-card">
                  <v-card
                    class="mx-auto my-5"
                    max-width="344"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="200px"
                    ></v-img>

                    <v-card-title>
                      Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                      1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        color="orange lighten-2"
                        text
                      >
                        Explore
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        icon
                        @click="show = !show"
                      >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </div>
              </v-col>  
            </v-row>
          </v-tab-item>
        </v-tabs>
        <div class="section section-divider arrow-container">
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
import BouncingArrow from "../../components/styleComponents/animatedArrow"

export default {
  name:"Intro",
  components: {BouncingArrow},
  data() {
    return {
      greetings: "Greetings, my name is ",
      show: false,
      technicalSkills: ["Multimedia", "Creative Strategy", "Interactive Design", "UI/UX"]
    }
  }
}
</script>

<style scoped>
@import "./intro.style.css"
</style>