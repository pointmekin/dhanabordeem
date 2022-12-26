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
        <Certifications />
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
import Skills from "../../components/profile/skills"
import Certifications from "../../components/profile/certifications"
import Footer from "../../layouts/footer"
import { defaultMeta } from '~/components/meta'

export default {
  components: {
    Background, AboutMe, Experiences, Education, Skills, Certifications, Footer
  },
  head: {
    title: "Dhanabordee's Portfolio",
    meta: [
      ...defaultMeta
    ]
  }
}
</script>

<style scoped>

.section-divider {
  height: 20px;
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

.section {
  grid-area: section;
}

</style>