<script lang="ts" setup>
import CourseLang from "../../components/CourseLang.vue"
import CourseSec from "../../components/CourseSection.vue"
import Account from "../../components/account.vue"
import Stat from "../../components/stat.vue"
</script>

<template>
    <div class="content">
        <div>
            <CourseLang />
            <CourseSec />
        </div>
        <div>
            <Account />
            <Stat />
        </div>
    </div>
</template>

<style>
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 60px;
        
    }
    @media (max-width:1140px){
        .content{
            display: flex;
            flex-direction: column;
        }
    }
</style>