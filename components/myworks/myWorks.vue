<template>
    <div class="container">
      <div class="description">
        <div class="mt-10"></div>
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000" 
        >
          <v-toolbar-title class="skill-title">My Works</v-toolbar-title>
          <v-select
            v-if="screenWidth < 605"
            :items="items"
            label="Category"
            dense
            v-on:change="changeCategory($event)"
            :v-model="items[category]"
            class="small-screen-select"
          ></v-select>
          <v-tabs
            class="section"
            background-color="transparent"
            color="deep-blue accent-1"
            right
            dense
            mobile-breakpoint="780"
            v-on:change="changeTab($event)"
          >
            
            <v-select
              v-if="screenWidth > 605"
              :items="items"
              label="Category"
              dense
              v-on:change="changeCategory($event)"
              :v-model="items[category]"
            ></v-select>
            <v-tab>Significance</v-tab>
            <v-tab>A-Z</v-tab>
            <v-tab>Date</v-tab>
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-row background-color="transparent" class="px-5">
                <v-col  
                  v-for="(item, i) in filterred"
                  :key="i"
                  cols="12"
                  lg="3"
                  md="4"
                  sm="6"
                >
                  <div class="project-preview-card">
                    <v-card
                      class="mx-auto my-5"
                      max-width="344"
                    >
                      <v-img
                        :src="item.img"
                        height="200px"
                      ></v-img>
                      <v-card-title>
                        {{ item.title }}
                      </v-card-title>
                      <v-card-subtitle>
                        {{ item.date.getMonth() + '/' + item.date.getFullYear() }}
                      </v-card-subtitle>
                      <div class="ml-3">
                        <v-chip
                          v-for="tag in item.skill"
                          :key="tag"
                          class="mr-1 my-1"
                          dark
                          color="primary"
                        >
                          {{ tag }}
                        </v-chip>
                      </div>
                      <v-card-actions>
                        <v-btn
                          color="primary lighten-2"
                          text
                          @click="item.showOverlay = !item.showOverlay"
                        >
                          View Details
                        </v-btn>
<!-- OVERLAY SECTION -->
                        <v-dialog
                          v-model="item.showOverlay"
                          fullscreen
                          transition="dialog-bottom-transition"
                          scrollable
                        >
                          <v-card tile class="details">
                            <v-toolbar
                              flat
                              color="transparent"
                            >
                              <v-btn
                                icon
                                @click="item.showOverlay = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                              <v-toolbar-title >Details</v-toolbar-title>
                              <v-spacer></v-spacer>
                            </v-toolbar>
                            <div class="default-card default-shadow overlay-container"
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-duration="1000" 
                              
                              >
                                <div class="cover-photo">
                                  <div>
                                    <img :src="item.img" alt="">
                                  </div>
                                  <div class="img-container">
                                    <div class="top">
                                      <ul>
                                        <li v-for="(shit, i) in item.imgs" :key="i">
                                          <a :href="`#${shit.id}`">
                                            <img :src="shit.img" :id="`#${shit.id}`" alt="">
                                          </a>
                                        </li>
                                      </ul>
                                      
                                        <a v-for="(shit, i) in item.imgs" :key="i" href="#" class="lightbox trans" :id="shit.id">
                                          <div class="zoom-img-container">
                                            <img :src="shit.img">
                                          </div>
                                        </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="full-description">
                                  <v-card-title>{{ item.title }} </v-card-title>
                                  <v-card-subtitle>{{ item.date.getMonth() + '/' + item.date.getFullYear() }} </v-card-subtitle>
                                  <div class="ml-4">
                                    <v-btn
                                      v-for="link in item.links"
                                      :key="link.title"
                                      :href="link.url" target="_blank"
                                      depressed
                                    >
                                      {{ link.title }}
                                    </v-btn>
                                  </div>
                                  <v-card-text>
                                    <hr>
                                    <v-chip
                                      v-for="tag in item.skill"
                                      :key="tag"
                                      class="my-2 mr-2"
                                      dark
                                      color="primary"
                                    >
                                      {{ tag }}
                                    </v-chip>
                                    <hr>
                                  </v-card-text>
                                  <v-card-text class="mb-5">{{ item.fullDescription }}</v-card-text>
                                </div>
                              </div>
                          </v-card>

                        </v-dialog>

                        <v-spacer></v-spacer>

                        <v-btn
                          icon
                          @click="item.show = !item.show"
                        >
                          <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="item.show">
                          <v-divider></v-divider>

                          <v-card-text>
                            {{ item.description }}
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </div>
                </v-col>  
              </v-row>
            </v-tab-item>
          </v-tabs>
        
        </div>
      </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>

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

.theme--dark.v-tabs-items {
  background-color: transparent;
}

.v-messages {
  display: none !important;
}

.v-input {
  margin: 30px 24px 0 24px !important;
  margin-top: 15px !important;
  margin-left: 0 !important;
  width: 160px;
}

.small-screen-select {
  width: 100%;
}

.default-card {
  height: 95vh !important;
  width: 90vw !important;
  border-radius: 24px;
  margin: 0 auto;
  padding: 16px;
}

.container {
  max-width: 1600px;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr !important;
  grid-template-rows: auto;
  grid-template-areas: 
    ". description ."
    ". section ."
}

.cover-photo {
  grid-area: cover-photo;

  img {
    width: 100%;
    border-radius: 16px;
  }

}

.full-description  {
  grid-area: full-description;
  height: 100%;
}

.gallery {
  grid-area: gallery;
  height: 300px;
  v-img {
    height: 30px !important;
    width: 30px !important;
  }

}


.overlay-container {
  width: 100%;
  height: 100vh;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 10fr 10fr!important;
  grid-template-rows: auto;
  grid-template-areas: 
    "cover-photo full-description"
    "gallery description";
  
  .v-card__title {
    font-size: 2rem !important;
  }
}

.details {
  background-color: #e7e7e7 !important;
}
  
// Gallery CSS

.img-container
{
	width: 100%;
  max-height: 500px;
}
.trans
{
	transition: all 1s ease;
	-moz-transition: all 1s ease;
	-ms-transition: all 1s ease;
	-o-transition: all 1s ease;
	-webkit-transition: all 1s ease;
}
.top
{
	display: flex;
	width: 100%;


}
.top ul
{
	list-style: none;
	width: 100%;
  max-height: 100px;
	z-index: 1;
	box-sizing: border-box;
  padding: 0;
}
.top ul li
{
	position: relative;
	float: left;
	width: 20%;
	overflow: hidden;
  padding:1%;
}

.top ul li::before
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	content: '';
	color: white;
	opacity: 0.4;
	text-align: center;
	box-sizing: border-box;
	pointer-events: none;
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
}
.top ul li:hover::before
{
	opacity: 0;
	background-color: rgba(0,0,0,0.90);
}
.top ul li img
{
	width: 100%;
	height: auto;
	overflow: hidden;
}
.lightbox
{
	position: fixed;
	width: 100%;
	height: 100%;
	text-align: center;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.75);
	z-index: 999;
	opacity: 0;
	pointer-events: none;
}
.lightbox img
{
  height: 100%;
	position: relative;
	top: -100%;
  margin: auto 0;
  object-fit: contain;
	/* Transition */
	transition: all 1s ease;
	-moz-transition: all 1s ease;
	-ms-transition: all 1s ease;
	-o-transition: all 1s ease;
	-webkit-transition: all 1s ease;
}
.lightbox:target
{
	outline: none;
	top: 0;
	opacity: 1;
	pointer-events: auto;
	transition: all 1.2s ease;
	-moz-transition: all 1.2s ease;
	-ms-transition: all 1.2s ease;
	-o-transition: all 1.2s ease;
	-webkit-transition: all 1.2s ease;
}
.lightbox:target img
{
	top: 0;
	top: 50%;
	transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
}

.zoom-img-container {
  height: 80vh;
  margin-top: 30px;
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

  .overlay-container {
    width: 100%;
    margin: 0 auto !important;
    display: grid;
    grid-template-columns: 100% !important;
    grid-template-rows: auto;
    grid-template-areas: 
      "full-description"
      "cover-photo"
      "gallery";
    
    .v-card__title {
      font-size: 2rem !important;
    }
  }
}  
</style>