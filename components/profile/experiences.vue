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
              <p class="mt-5 mr-3">{{ experience.date }}</p>
            </div>
            <v-card-subtitle class="experience-subtitle">{{ experience.subtitle }}</v-card-subtitle>
            <v-card-text class="experience-description">{{ experience.description }}</v-card-text>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  data() {
    return {
      experiences: [
        {
          title: "Front-end Developer Intern",
          date: "2021",
          subtitle: "LINE Company Thailand",
          description: "Completed LINE ROOKIE summer internship program, developing and maintaining the LINE SHOPPING web application."
        },
        {
          title: "Part-time Front-end Developer",
          date: "2021",
          subtitle: "PlanIT Trip Planner",
          description: "Develops and maintains planittripplanner.com as a front-end developer."
        },
        {
          title: "Front-end Developer Lead and UI/UX Designer Lead",
          date: "2020",
          subtitle: "Chulalongkorn University Sports Center Booking",
          description: "Lead the team of front-end developers and UI/UX designers in designing and developing a sports center reservation for Chulalongkorn University Sports Center in the namne of Thinc Club."
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

/* .profile-img {
  -webkit-box-shadow: 6px 34px 55px -11px rgba(189, 189, 189, 1);
  -moz-box-shadow: 6px 34px 55px -11px rgba(189, 189, 189, 1);
  box-shadow: 6px 34px 55px -11px rgba(189, 189, 189, 1);
} */


.item {
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 18px;
  padding: 0px 11px;
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

.align-date {
  text-align: right !important;
}

.experience-subtitle {
  margin-top: -20px;
  margin-bottom: 15px;
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
