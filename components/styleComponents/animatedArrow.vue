<template>
  <div>
    <svg class="arrow">
      <path class="a1" d="M0 0 L30 22 L60 0"></path>
      <path class="a2" d="M0 20 L30 42 L60 20"></path>
      <path class="a3" d="M0 40 L30 62 L60 40"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name:"BouncingArrow"
}
</script>

<style>
/* set arrow positioning */
.arrow {
	width: 60px;
	height: 82px;
	top: 50%;
  left: 50%; 
  position: absolute;
  transform: translate(-50%, -50%); 
  z-index:999;
}
/* set arrow styles */
.arrow path {
	stroke: var(--materialBlue);
	stroke-width: 2px;
	fill: transparent;	
	animation: down 2s infinite;
}
/* arrow keyframe animation */
@keyframes down{
0% { opacity:0 }
25% { opacity:1 }
75% { opacity:0 }
100% { opacity:0 }
}
/* arrow animation delay */
.arrow path.a1{	animation-delay:-1s; }
.arrow path.a2{	animation-delay:-.5s; }
.arrow path.a3{	animation-delay:0s; }

@media screen and (max-width: 780px) {
  .arrow {
    top: 25%;
  }
}

</style>