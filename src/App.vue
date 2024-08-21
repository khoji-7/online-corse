<script setup lang="ts">
import SideBar from "./components/sidebar/Sidebar.vue";



</script>

<template>
  <div class="app">
    <SideBar class="sidebarApp"/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  display: flex;

  .main{
  flex: 1 1 0;
  padding: 30px;
  }
  .sidebarApp{
    position: sticky;
    top:10px;
    
  }
}

</style>
