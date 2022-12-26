<template>
  <div class="container">
    <div class="description">
      <div class="top-space"></div>
      <v-toolbar-title class="skill-title mb-3">Certifications</v-toolbar-title>
      <hr class="my-5" />
      <v-row>
        <v-col
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000" 
          v-for="(certification, index) in certifications"
          :key="index"
          cols="12"
          md="6"
          sm="6"
        >
          <div class="edu-content default-card default-shadow">
            <div class="d-flex justify-space-between">
              <div>
                <v-card-title>{{ certification.title }}</v-card-title>
                <v-card-subtitle>{{ certification.date }}</v-card-subtitle>
                <v-card-text class="edu-description">{{ certification.subtitle }}</v-card-text>
                <v-card-text class="edu-description">{{ certification.description }}</v-card-text>
              </div>
              <div class="certification-image ml-5 mr-3 mt-5">
                <img class="d-flex float-right institution-logo" :src="certification.img"  alt="" @click="openImage(certification.link)">
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

import Coursera1 from "../../assets/Certifications/Coursera1.png"
import Coursera2 from "../../assets/Certifications/Coursera2.png"
import Coursera3 from "../../assets/Certifications/Coursera3.png"

export default {
  name: "Certifications",
  data() {
    return {
      certifications: [
        {
          title: "Innovation and emerrging technology: Be disruptive",
          date: "Apr 23, 2022",
          subtitle: "MACQUARIE University",
          description: "Demonstrate an understanding of a range of disruptive technologies and their implications on organisations, industry sectors and societies. Develop strategies and approaches to manage disruptive technologies by creating new business models. Apply strategic thinking and tools to evaluate relative advantage.",
          link: "https://coursera.org/share/3fa9008df16b242b2430f22484697e64",
          img: Coursera1
        },
        {
          title: "Big Data, Artificial Intelligence, and Ethics",
          date: "Apr 23, 2022",
          subtitle: "UCDAVIS",
          description: "Define and discuss big data opportunities and limitations. Work with IBM Watson and analyze a personality through Natural Language Programming (NLP). Examine how AI is used through case studies. Examine and discuss the roles ethics play in AI and big data.",
          link: "https://coursera.org/share/499555f931abdc96fbb3d44131c1c1df",
          img: Coursera2
        },
        {
          title: "Software Requirements Prioritization: Risk Analysis",
          date: "Feb 7, 2022",
          subtitle: "University of Colorado",
          description: "Risk analysis, assessment, and prioritization. Dealing with risk. Controlling Risk. Incorporating Risk Management into processes.",
          link: "https://coursera.org/share/915b60ced33cf069d1eeb6d93a29d86f",
          img: Coursera3
        },
      ]
    };
  },
  methods: {
    openImage(imageUrl) {
      window.open(imageUrl, '_blank');
    }
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

.institution-logo {
  height: 50px;
}

.certification-image {
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.certification-image:hover {
  opacity: 0.5;
  transition: all 0.1s ease-in-out;
}

@media screen and (max-width: 780px) {
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
