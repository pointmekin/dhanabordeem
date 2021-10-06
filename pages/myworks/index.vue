<template>
  <div>
    <div class="content">
      <div>
        <MyWorks class="mt-10"/>
      </div>
      <div class="section section-divider arrow-container"></div>
      <div>
        <Footer :fixed="true"/>
      </div>
    </div>
    </div>
</template>

<script>
import Footer from "../../layouts/footer"
import MyWorks from "../../components/myworks/myWorks"
import { defaultMeta } from '~/components/meta'

export default {
  components: {
    Footer, MyWorks
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