<template>
  <div>
    <div class="content">
      <div>
        <AboutMe class="mt-10"/>
      </div>
      <div class="section section-divider arrow-container"></div>
      <div>
        <Skills />
      </div>
      <div class="section section-divider arrow-container"></div>
      <div>
        <Experiences />
      </div>
      <div class="section section-divider arrow-container"></div>
      <div>
        <Education />
      </div>


      <div class="section section-divider arrow-container"></div>
      <div>
        <Footer />
      </div>
    </div>
    </div>
</template>

<script>
import Background from "../../layouts/background"
import AboutMe from "../../components/profile/aboutMe"
import Experiences from "../../components/profile/experiences"
import Education from "../../components/profile/education"
import Skills from "../../components/profile/certifications"
import Footer from "../../layouts/footer"

export default {
  components: {
    Background, AboutMe, Experiences, Education, Skills, Footer
  },
  meta: [
    { property: "og:site_name", content: "Dhanabordee's Portfolio" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://dhanabordeem.netlify.app",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Dhanabordee's Portfolio",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "Greetings, my name is Point and I'm a web developer!",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "/point.png",
    },
  ]
}
</script>

<style scoped>

.section-divider {
  height: 100px;
}

.content {
  margin: 0 auto;
  padding: 0px;
  width: 100vw;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.item-a {
  grid-area: header;
}
.main{
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.section {
  grid-area: section;
}




</style>