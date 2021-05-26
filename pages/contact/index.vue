<template>
  <div>
    <div class="content">
        <div>
          <ContactCard />
        </div>
        <div class="big-margin">
          <Footer :fixed="this.screenWidth > 1000 ? true : false"/>
        </div>
    </div>


  </div>
</template>

<script>
import Footer from "../../layouts/footer"
import ContactCard from "../../components/contact/contactCard"

export default {
  components: {
    Footer, ContactCard
  },
  data() {
    return {
      screenWidth: 2000
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
  },
}
</script>


<style scoped>

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


@media screen and (max-width: 1000px) {
  .big-margin {
    margin-top: 700px;
  }

}



</style>