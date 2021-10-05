<template>
  <div class="container">
    <div class="hrLine">
      <div class="top-space"></div>
      <v-toolbar-title class="skill-title mb-3">Skill</v-toolbar-title>
      <hr class="my-5" />
    <h3 class="my-3">Technical Skills</h3>
    </div>
    <div 
      class="skill-column-1"
    >
<!-- FRONT-END SKILLS -->
      <div>
        <v-row justify="center">
          <v-col
            cols="11"
          >
            <v-sheet
              class="default-shadow default-card"
              rounded="sm"
            >
              <v-sheet
                class="pa-1 pl-2 primary text-left"
                dense
                dark
                rounded="t-sm"
                color="primary"
              >
                Front-end Development
              </v-sheet>
              <div class="pa-2">
                <v-chip-group
                  column
                >
                  <v-chip
                    v-for="tag in frontendTags"
                    :key="tag.title"
                    class="ma-2"
                    outlined
                  >
                    <v-avatar left>
                        <img :src="tag.icon" alt="">
                      </v-avatar>
                    {{ tag.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
<!-- BACK-END SKILLS -->
      <div class="mt-3 mb-5">
        <v-row justify="center">
          <v-col
            cols="11"
          >
            <v-sheet
              class="default-shadow default-card"
              rounded="sm"
            >
              <v-sheet
                class="pa-1 pl-2 primary text-left"
                dense
                dark
                rounded="t-sm"
                color="primary"
              >
                Back-end Development and Other
              </v-sheet>
              <div class="pa-2">
                <v-chip-group column>
                  <v-chip
                    v-for="tag in backendTags"
                    :key="tag.title"
                    class="ma-2"
                    outlined
                  >
                    <v-avatar left>
                        <img :src="tag.icon" alt="">
                      </v-avatar>
                    {{ tag.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
    <div 
      class="skill-column-2" 
    >
<!-- VERSION CONTROL SKILLS -->
      <div>
        <v-row justify="center">
          <v-col
            cols="11"
          >
            <v-sheet
              class="default-shadow default-card"
              rounded="sm"
            >
              <v-sheet
                class="pa-1 pl-2 primary text-left"
                dense
                dark
                rounded="t-sm"
                color="primary"
              >
                UI/UX Design
              </v-sheet>

              <div class="pa-4">
                <v-chip-group column>
                  <v-chip
                    v-for="tag in UIUXTags"
                    :key="tag.title"
                    class="ma-2"
                    outlined
                  >
                    <v-avatar left>
                        <img :src="tag.icon" alt="">
                      </v-avatar>
                    {{ tag.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
<!-- DESIGN SKILLS -->
      <div>
        <v-row justify="center">
          <v-col
            cols="11"
          >
            <v-sheet
              class="default-shadow default-card"
              rounded="sm"
            >
              <v-sheet
                class="pa-1 pl-2 primary text-left"
                dense
                dark
                rounded="t-sm"
                color="primary"
              >
                Version Control
              </v-sheet>

              <div class="pa-4">
                <v-chip-group column>
                  <v-chip
                    v-for="tag in vertionControlTags"
                    :key="tag.title"
                    class="ma-2"
                    outlined
                  >
                    <v-avatar left>
                        <img :src="tag.icon" alt="">
                      </v-avatar>
                    {{ tag.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
<!-- PHOTO AND VIDEO SKILLS -->
      <div class="mt-3">
        <v-row justify="center">
          <v-col
            cols="11"
          >
            <v-sheet
              class="default-shadow default-card"
              rounded="sm"
            >
              <v-sheet
                class="pa-1 pl-2 primary text-left"
                dense
                rounded="t-sm"
                dark
                color="blue"
              >
                Photo and Video
              </v-sheet>

              <div class="pa-4">
                <v-chip-group column>
                  <v-chip
                    v-for="tag in photoAndVideoTags"
                    :key="tag.title"
                    class="ma-2"
                    outlined
                  >
                    <v-avatar left>
                        <img :src="tag.icon" alt="">
                      </v-avatar>
                    {{ tag.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="skill-column-3" >
      <h3 class="my-3 mt-8">Soft Skills</h3>
      <div 
        class="mt-3"
      >
        <v-row justify="center">
          <v-col
            cols="12"
            class="px-8"
          >
            <v-sheet
              class="default-shadow default-card"
              rounded="sm"
            >
              <v-sheet
                class="pa-1 pl-2 primary text-left"
                dense
                dark
                rounded="t-sm"
                color="primary"
              >
                Soft Skills
              </v-sheet>

              <div class="pa-4">
                <v-chip-group column>
                  <v-chip
                    v-for="tag in softSkills"
                    :key="tag.title"
                    class="ma-2"
                    outlined
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>

import ReactLogo from "../../assets/icons/react.png"
import balsamiq from "../../assets/icons/balsamiq.png"
import bootstrap from "../../assets/icons/bootstrap.png"
import css3 from "../../assets/icons/css3.png"
import figma from "../../assets/icons/figma.png"
import flutter from "../../assets/icons/flutter.png"
import html5 from "../../assets/icons/html5.png"
import illustrator from "../../assets/icons/illustrator.png"
import js from "../../assets/icons/js.png"
import photoshop from "../../assets/icons/photoshop.png"
import vuelogo from "../../assets/icons/vue.png"
import angular from "../../assets/icons/angular.png"
import vuetify from "../../assets/icons/vuetify.png"
import ts from "../../assets/icons/ts.png"
import ionic from "../../assets/icons/ionic.png"
import github from "../../assets/icons/github.png"
import express from "../../assets/icons/express.png"
import firebase from "../../assets/icons/firebase.png"
import mongodb from "../../assets/icons/mongodb.jpg"
import xd from "../../assets/icons/xd.png"
import premiere from "../../assets/icons/premiere.png"
import indesign from "../../assets/icons/indesign.png"
import java from "../../assets/icons/java.png"
import python from "../../assets/icons/python.png"
import golang from "../../assets/icons/go.png"
import tailwind from "../../assets/icons/tailwind.jpeg"
import rabbitmq from "../../assets/icons/rabbitmq.png"
import gitlab from "../../assets/icons/gitlab.png"

export default {
  name: "Skills",
  data() {
    return {
      frontendTags: [
        {title: "React", icon: ReactLogo},
        {title: "Vue", icon: vuelogo},
        {title: "Flutter", icon: flutter},
        {title: "HTML5", icon: html5},
        {title: "CSS3", icon: css3},
        {title: "Javascript", icon: js},
        {title: "Typescript", icon: ts},
        {title: "TailwindCSS", icon: tailwind},
        {title: "Bootstrap", icon: bootstrap},
        {title: "Vuetify", icon: vuetify},
        {title: "Angular", icon: angular},
        {title: "Ionic", icon: ionic},
      ],
      backendTags: [
        {title: "Express", icon: express},
        {title: "Firebase", icon: firebase},
        {title: "MongoDB", icon: mongodb},
        {title: "Java", icon: java},
        {title: "Python", icon: python},
        {title: "Go", icon: golang},
        {title: "RabitMQ", icon: rabbitmq},
      ],
      UIUXTags: [
        {title: "Figma", icon: figma},
        {title: "Adobe XD", icon: xd},
        {title: "Balsamiq", icon: balsamiq},
      ],
      photoAndVideoTags: [
        {title: "Photoshop", icon: photoshop},
        {title: "Illustrator", icon: illustrator},
        {title: "Premiere Pro", icon: premiere},
        {title: "InDesign", icon: indesign},
      ],
      vertionControlTags: [
        {title: "Github", icon: github},
        {title: "GitLab", icon: gitlab},
      ],
      softSkills: ["Critical-thinker", "Effective Communicator", "Presentation and Public Speaking", "Collaborative Worker", "Tech Savvy"]
    };
  },
  methods: {

  }
};
</script>

<style scoped>

.description {
  grid-area: description;
}

.description p {
  font-size: 1.2rem;
}

.top-space {
  height: 100px;
}

.skill-title {
  grid-area: skill-title;
  font-weight: bold;
  font-size: 2rem;
}

.sidebar {
  margin-top: 20px;
  margin-left: 10rem;
  overflow: hidden;
  height: 520px;
  position: relative;
}

.sidebar img {
  margin-left: 50%;
  transform: translateX(-50%);
}


.item {
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 18px;
  padding: 0px 11px;
}

.education-content {
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  text-align: left;
}

.education-content p {
  font-size: 0.8rem;
}

.education-description {
  font-size: 1rem !important;
  margin-bottom: 0;
}

.align-date {
  text-align: right !important;
}

.institution-logo {
  height: 50px;
}

@keyframes fadeInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 100;
    transform: translateY(-50);
  }
}

.skill-column-1 {
  grid-area: skill-column-1;
  animation: 1.2s ease 0s 1 fadeInFromBottom;
}

.skill-column-2 {
  grid-area: skill-column-2;
  animation: 1.2s ease 0s 1 fadeInFromBottom;
}

.skill-column-3 {
  grid-area: skill-column-3;
  animation: 1.2s ease 0s 1 fadeInFromBottom;
}

.hrLine {
  grid-area: hrLine;
}

.container {
  max-width: 1600px;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". hrLine hrLine ."
    ". skill-column-1 skill-column-2."
    ". skill-column-3 skill-column-3."
    ". section section .";
}

@media screen and (max-width: 780px) {
  .sidebar {
    margin-top: 10px;
    height: 250px;
    margin-left: 0px;
  }

  .sidebar img {
    margin-top: -5%;
  }
  

  .container {
    display: grid;
    grid-template-columns: 5% 90% 0% 0%;
    grid-template-areas:
      ". hrLine . ."
      ". skill-column-1  . ."
      ". skill-column-2  . ."
      ". skill-column-3  . ."

  }
  .top-space {
    display: none;
  }
}
</style>
