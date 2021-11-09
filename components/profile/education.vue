<template>
  <div class="container">
    <div class="description">
      <div class="top-space"></div>
      <v-toolbar-title class="skill-title mb-3">Education</v-toolbar-title>
      <hr class="my-5" />
      <v-row>
        <v-col
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000" 
          v-for="(edu, index) in educations"
          :key="index"
          cols="12"
          md="6"
          sm="6"
        >
          <div class="edu-content default-card default-shadow">
            <div class="d-flex justify-space-between">
              <div>
                <v-card-title>{{ edu.title }}</v-card-title>
                <v-card-subtitle>{{ edu.date }}</v-card-subtitle>
                <v-card-text>{{ edu.subtitle }}</v-card-text>
                <v-card-text class="edu-description">{{ edu.description }}</v-card-text>
              </div>
              <div class="ml-5 mr-3 mt-5" >
                <img class="d-flex float-right institution-logo" :src="edu.img"  alt="">
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

import ChulaLogo from "../../assets/ChulaLogo.png"
import EISLogo from "../../assets/EISLogo.png"

export default {
  name: "Education",
  data() {
    return {
      educations: [
        {
          title: "Faculty of Engineering, Chulalongkorn University",
          date: "2019-present",
          subtitle: "Bachelor of Engineering, majoring in Information and Communication Engineering (International Program)",
          description: "Cumulative GPA: 3.74 (As of Semester 4, 2021). Awarded with 50% ISE Scholarship",
          img: ChulaLogo
        },
        {
          title: "Ekamai International School",
          date: "2012-2019",
          subtitle: "Science Diploma with Emphasis on Medicine",
          description: "Cumulative GPA: 3.94, Second Honor Award",
          img: EISLogo
        },
      ]
    };
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

.container {
  max-width: 1600px;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". description description ."
    ". section section .";
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
  padding: 20px;
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
      ". description . ."
      ". sidebar . .";
  }
  .top-space {
    display: none;
  }
}
</style>
