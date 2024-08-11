<script setup lang="ts">
import {ElIcon} from "element-plus";
import {HomeFilled,Notebook,User,Message,Setting, UserFilled} from "@element-plus/icons-vue";

</script>

<template>
    <div class="sidebarParent">
        <div class="container">
            <img src="../../../public/ss.svg" alt="" class="logo" />
            <div class="routeParent">
                <router-link to="/" class="router">
                    <el-icon >
                        <HomeFilled/>
                    </el-icon>
                </router-link>
                <router-link to="/teach" class="router">
                    <el-icon><Notebook /></el-icon>
                </router-link>
                <router-link to="/user" class="router">
                    <el-icon><User /></el-icon>
                </router-link>
                <router-link to="/messages" class="router">
                    <el-icon><Message /></el-icon>
                </router-link>
                <router-link to="/settings" class="router">
                    <el-icon><Setting /></el-icon>
                </router-link>
            </div>

            <router-link to="/" class="router">
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
    padding: 10px;
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
        :hover {
            color: black;
            background-color: white;
            transition: 0.2s ease-out;
        }
    }

    .logo {
        width: 100px;
    }
}

@media (max-width: 768px) {
    .container {
        width: 100px;
        height: 80vh;

        .router {
            width: 30px;
            height: 30px;
        }

        .logo {
            width: 80px;
        }
    }
}

@media (max-width: 480px) {
    .container {
        width: 60px;
        height: 70vh;

        .router {
            width: 25px;
            height: 25px;
        }

        .logo {
            width: 60px;
        }
    }
}
</style>
