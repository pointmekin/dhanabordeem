<template>
    <div class="container">
      <div class="description">
        <div class="top-space"></div>
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000" 
        >
          <v-toolbar-title class="skill-title">About Me</v-toolbar-title>
          <p class="mt-3">
            Hi everyone, my name is Dhanabordee Mekintharanggur. I am currently an Information and Communication Engineering student at Chulalongkorn University, Thailand.
            The website you are exploring now serves as the portfolio for my works, experiences, and accomplishments throughout the years exploring myself.
            Feel free to look around and be sure to contact me if you have any inquiries. Have a nice day!
          </p>
        
        </div>
      </div>
      <div class="sidebar profile-img default-shadow">
        <img src="../../assets/AboutMePic.jpeg" alt="" class="profile-img default-shadow">
      </div>
    </div>
</template>

<script>
export default {
  name: "AboutMe"

}
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
  font-weight: bold;
  font-size: 2rem;
}

.container {
  max-width: 1600px;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 1fr 5fr 4fr 1fr !important;
  grid-template-rows: auto;
  grid-template-areas: 
    ". description sidebar ."
    ". section section ."
}


.sidebar {
  grid-area: sidebar;
  margin-top: 20px;
  margin-left: 10rem;
  overflow: hidden;
  height: 520px;
  position: relative;
}

.sidebar img {
  margin-left: 50%;
  transform: translateX(-50%);
  height: 520px;
}

  @keyframes slideInFromBottom {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50);
  }
}

  .profile-img {
    animation: 1.2s ease 0s 1 slideInFromBottom;
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
      ". description description . "
      ". sidebar sidebar . "
  }  

  .top-space {
    display: none;
  }



}  
</style>