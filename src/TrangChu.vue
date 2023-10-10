<template>
  <div class="container">
      <div class="navbar">
        <WedNavbar/> 
        <WedContents/>
        <WebTableCar/>
        <WedFooter/>
      </div>
  </div>
</template>

<script>
import WedNavbar from './components/WedNavbar' 
import WedFooter from './components/WedFooter' 
import WedContents from './components/WedContents'
import WebTableCar from './components/WebTableCar'

export default {
  components: {
    WedNavbar,
    WedFooter,
    WedContents,
    WebTableCar
  }
}
</script>

<style>
.container{
  font-family : 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
</style>
