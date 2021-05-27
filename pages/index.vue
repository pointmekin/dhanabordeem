<template>
  <div>
    <div class="content">
      <div>
          <Intro />
        </div>

      <div class="">
        <Footer />
      </div>
    </div>
    </div>
</template>

<script>
import Intro from "../components/home/intro"
import Footer from "../layouts/footer"

export default {
  components: {
    Intro, Footer
  }
}
</script>

<style>

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

.content {
  margin: 0 auto;
  padding: 0px;
  width: 100vw;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
}

.container {
  max-width: 1600px;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 1fr 400px 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    ". main sidebar ."
    ". section section ."
}


@media screen and (max-width: 780px) {
  .container {
    display: grid;
    grid-template-columns: 5% 90% 0% 0%;
    grid-template-areas: 
    ". main main ."
    ". section section ."
  }  

}  

</style>