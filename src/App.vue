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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
}

.main {
  flex: 1;
  padding: 30px;
  margin-left: 130px; 
}

.sidebarApp {
  position: fixed;
  top: 10;
  left: 0;
  max-width: 130px; /* Sidebar kengligini aniqlang */
  height: 100vh; /* Ekranning to'liq balandligi */
  padding: 10px; /* Qo'shimcha joy */
  background-color: white; /* Kerakli background rangini belgilang */
  z-index: 1000; /* Ushbu qator sidebar ustida boshqa elementlar chiqib qolmasligi uchun */
}
</style>
