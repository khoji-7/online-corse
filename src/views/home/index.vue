<script lang="ts" setup>
import CourseLang from "../../components/CourseLang.vue"
import CourseSec from "../../components/CourseSection.vue"
import Account from "../../components/account.vue"
import Stat from "../../components/Stat.vue"
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
        gap: 20px;
    }
</style>