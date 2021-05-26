<template>
    <div class="container">
      <div class="description">
        <div class="top-space"></div>
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
                        {{ item.date.toLocaleDateString() }}
                      </v-card-subtitle>
                      <v-chip
                        v-for="tag in item.skill"
                        :key="tag"
                        class="ml-3"
                        outlined
                      >
                        {{ tag }}
                      </v-chip>
                      <v-card-actions>
                        <v-btn
                          color="orange lighten-2"
                          text
                          @click="item.showOverlay = !item.showOverlay"
                        >
                          View Details
                        </v-btn>
<!-- OVERLAY SECTION -->
                        <v-dialog
                          v-model="item.showOverlay"
                          fullscreen
                          hide-overlay
                          transition="dialog-bottom-transition"
                          scrollable
                        >
                          <v-card tile class="details">
                            <v-toolbar
                              flat
                              dark
                              color="#2196F3"
                            >
                              <v-btn
                                icon
                                dark
                                @click="item.showOverlay = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                              <v-toolbar-title>Settings</v-toolbar-title>
                              <v-spacer></v-spacer>
                            </v-toolbar>
                            <div class="default-card default-shadow overlay-container">
                              <div class="cover-photo">
                                <section class="gallery">
                                <div class="gallery__item">
                                  <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
                                  <img class="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt=""/>
                                  <label for="img-1" class="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt=""/></label>
                                </div>
                                <div class="gallery__item">
                                  <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
                                  <img class="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt=""/>
                                  <label for="img-2" class="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt=""/></label>
                                </div>
                                <div class="gallery__item">
                                  <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
                                  <img class="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt=""/>
                                  <label for="img-3" class="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt=""/></label>
                                </div>
                                <div class="gallery__item">
                                  <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
                                  <img class="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt=""/>
                                  <label for="img-4" class="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt=""/></label>
                                </div>
                              </section>
                              </div>
                              <div class="full-description">
                                <v-card-title>{{ item.title }} </v-card-title>
                                <v-card-subtitle>{{ item.date }} </v-card-subtitle>
                                <v-card-text>
                                  <hr>
                                  <v-chip
                                    v-for="tag in item.skill"
                                    :key="tag"
                                    class="my-2"
                                    outlined
                                  >
                                    {{ tag }}
                                  </v-chip>
                                  <hr>
                                </v-card-text>
                                <v-card-text>{{ item.fullDescription }}</v-card-text>
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
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: 10fr 10fr!important;
  grid-template-rows: auto;
  grid-template-areas: 
    "cover-photo full-description"
    "gallery description"
}

.details {
  background-color: #2196F3
;
}
  
// Gallery CSS

* {
  box-sizing: border-box;
}

$max-img-width: 600px;
$max-img-height: 400px;

img {
  max-width: 100%;
  vertical-align: top;
}

.gallery {
  display: flex;
    margin: 10px auto;
    max-width: $max-img-width;
    position: relative;
    padding-top: $max-img-height/$max-img-width * 100%;
    
    @media screen and (min-width: $max-img-width){
      padding-top: $max-img-height;
    }
  
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
   &__thumb {
    padding-top: 6px;
    margin: 6px;
    display: block;
  }
  
  &__selector {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    
    &:checked {
      + .gallery__img {
        opacity: 1;
      }
      ~ .gallery__thumb > img {
        box-shadow: 0 0 0 3px #0be2f6;;
      }
    }
  }
  
 
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