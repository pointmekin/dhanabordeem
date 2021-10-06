<template>
  <canvas id="bg"></canvas>
</template>

<script>
import * as THREE from 'three'



export default {
  name: "background",
  data() {
    return {
      torus: null,
      torus: null,
      renderer: null,
      scene: null,
      camera: null
    }
  },
  mounted() {
    this.init()
    this.animate()
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
    init() {
      console.log(this.getCookie("isDarkTheme"))
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color( this.getCookie("isDarkTheme") ? 0x2e2e2e : 0xf7f7f7 );
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)

      const geometry = new THREE.TorusGeometry (10, 3, 16, 100 )
      const material = new THREE.MeshBasicMaterial({ color: this.getCookie("isDarkTheme") ? 0x373737 : 0xe6e6e6, wireframe: true })
      this.torus = new THREE.Mesh(geometry, material)
      this.scene.add(this.torus)
      this.camera.position.z = 5
    },
    onResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
    },
    onScroll() {
      const t = document.body.getBoundingClientRect().top;
      this.camera.position.z = t * -0.01;
      this.camera.position.x = t * -0.0002;
      this.camera.rotation.y = t * -0.0002;
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.torus.rotation.x += 0.003
      this.torus.rotation.y += 0.003
      this.renderer.render(this.scene, this.camera)
    },
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    moveCamera() {
      
    } 
    
  }

}

</script>

<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  z-index: 0 !important;
}
</style>