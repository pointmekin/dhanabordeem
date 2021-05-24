<template>
  <div>
    <div class="background">
      <Background />
    </div>

    <div class="content">
      <div class="container">
        <div class="main">
          <Intro class="mt-10"/>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import Background from "../layouts/background"
import Intro from "../components/home/intro"
export default {
  components: {
    Background, Intro
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
    "header header header header"
    ". main main main"
    ". section section section"
    "footer footer footer footer";
  }  

}  

</style>