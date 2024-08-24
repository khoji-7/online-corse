<script setup lang="ts">
import { ElIcon } from 'element-plus'
import {
  HomeFilled,
  Notebook,
  User,
  Message,
  Setting,
  UserFilled
} from '@element-plus/icons-vue'
</script>

<template>
  <div class="sidebarParent">
    <div class="container">
      <img src="../../../public/ss.svg" alt="" class="logo" />
      <div class="routeParent">
        <router-link to="/" class="router" active-class="active-route">
          <el-icon>
            <HomeFilled />
          </el-icon>
        </router-link>
        <router-link to="/teach" class="router" active-class="active-route">
          <el-icon><Notebook /></el-icon>
        </router-link>
        <router-link to="/user" class="router" active-class="active-route">
          <el-icon><User /></el-icon>
        </router-link>
        <router-link to="/messages" class="router" active-class="active-route">
          <el-icon><Message /></el-icon>
        </router-link>
        <router-link to="/settings" class="router" active-class="active-route">
          <el-icon><Setting /></el-icon>
        </router-link>
      </div>

      <router-link to="/" class="router" active-class="active-route">
        <el-icon><UserFilled /></el-icon>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 130px;
  height: 90vh;
  background-color: black;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: space-evenly;

  .routeParent {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40vh;
  }

  .router {
    width: 35px;
    height: 35px;
    color: white;
    
  }
  .router:hover {
      color: black;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    }
  .active-route {
    color: black;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
  }

  .logo {
    width: 55px;
  }
}

</style>
