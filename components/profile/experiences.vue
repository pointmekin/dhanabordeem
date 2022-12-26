<template>
  <div class="container">
    <div class="description">
      <div class="top-space"></div>
      <v-toolbar-title class="skill-title mb-3">Experiences</v-toolbar-title>
      <hr class="my-5" />
      <v-row>
        <v-col
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000" 
          v-for="(experience, index) in experiences"
          :key="index"
          cols="12"
          md="6"
          sm="6"
        >
          <div class="experience-content default-card default-shadow">
            <div class="d-flex justify-space-between">
              <v-card-title>{{ experience.title }}</v-card-title>
              <div class="ml-5 mr-3 mt-5" >
                <img class="d-flex float-right institution-logo" :src="experience.img"  alt="">
              </div>
            </div>
            <v-card-text class="experience-subtitle">{{ experience.subtitle }}</v-card-text>
            <v-card-subtitle>{{ experience.date }}</v-card-subtitle>
            <v-card-text class="experience-description">{{ experience.description }}</v-card-text>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CUSCLogo from "../../assets/Experiences/CUSCLogo.png"
import ExxonMobilLogo from "../../assets/Experiences/ExxonMobilLogo.png"
import LineLogo from "../../assets/Experiences/LineLogo.jpeg"
import OpenlinkLogo from "../../assets/Experiences/OpenlinkLogo.png"
import PlanItLogo from "../../assets/Experiences/PlanItLogo.svg"

export default {
  name: "Experiences",
  data() {
    return {
      experiences: [
        {
          title: "Full-stack Developer Intern",
          date: "2022",
          subtitle: "ExxonMobil Limited",
          description: "Full-stack developer intern in the Supply Modern Apps team under the Chemical IT, Supply Chain function. In the Supply Modern Apps team, I write software that facilitates the flow of information between the ExxonMobil business partners and the the SAP system behind the scenes using front-end, back-end, and cloud technology using the Agile methodology for the software development process.",
          img: ExxonMobilLogo
        },
        {
          title: "Front-end Developer Intern",
          date: "2021",
          subtitle: "LINE Company Thailand",
          description: "Completed LINE ROOKIE summer internship program, developing and maintaining the LINE SHOPPING web application.",
          img: LineLogo
        },
        {
          title: "Full-stack Developer (Part-time)",
          date: "2022",
          subtitle: "Openlink",
          description: "Develops and maintains openlink.co as a fll-stack developer. Openlink is a one-stop platform to combine social links and content into a single mini-website. Developed and maintain the openlink platform as a full-stack developer using React, JavaScript, and PHP.",
          img: OpenlinkLogo
        },
        {
          title: "Front-end Developer (Part-time)",
          date: "2021",
          subtitle: "PlanIT Trip Planner",
          description: "Develops and maintains planittripplanner.com as a front-end developer.",
          img: PlanItLogo
        },
        {
          title: "Front-end Developer Lead and UI/UX Designer Lead",
          date: "2020",
          subtitle: "Chulalongkorn University Sports Center Booking",
          description: "Lead the team of front-end developers and UI/UX designers in designing and developing a sports center reservation for Chulalongkorn University Sports Center in the namne of Thinc Club.",
          img: CUSCLogo
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
  text-align: justify;
  text-justify: inter-word;
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
  grid-template-columns: 1fr 4fr 4fr 1fr !important;
  grid-template-rows: auto;
  grid-template-areas:
    ". description description ."
    ". section section .";
}
.institution-logo {
  height: 50px;
  max-width: 100px;
  object-fit: contain;
}


.experience-content {
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  text-align: left;

}

.experience-content p {
  font-size: 0.8rem;
}

.experience-description {
  font-size: 1rem !important;
}

.experience-subtitle {
  margin-top: -20px;
  margin-bottom: -15px
}

@media screen and (max-width: 780px) {
  .container {
    display: grid;
    grid-template-columns: 5% 90% 0% 0% !important;
    grid-template-areas:
      ". description description ."
      ". sidebar sidebar .";
  }

  .top-space {
    display: none;
  }
}
</style>
