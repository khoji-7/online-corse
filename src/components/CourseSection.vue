<script lang="ts" setup>
import { ElIcon } from 'element-plus'
import {Clock,TrendCharts} from '@element-plus/icons-vue'

</script>


<template>
    <div class="container">
        <p class="title">
            cource
        </p>
        <p class="titleText">
            All Course 
        </p>
        <div class="courseSecCardPar">
            <div class="courseSecCard">
                <div class="courseSecCardImg">
                    <img src="../assets/Frame.png" alt="">
                </div>
                <div>
                    <p class="titleText">
                        Learn Figma
                    </p>
                    <p class="courseCardText">
                        by Christopher Morgan
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><Clock /></el-icon>
                    <p>
                        6h 30min
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><TrendCharts /></el-icon>              
                    <p>
                        7,9
                    </p>
                </div>
                <button class="courseCardBtn">
                    View Course
                </button>
            </div>
            <div class="courseSecCard">
                <div class="courseSecCardImg">
                    <img src="../assets/Frame.png" alt="">
                </div>
                <div>
                    <p class="titleText">
                        Learn Figma
                    </p>
                    <p class="courseCardText">
                        by Christopher Morgan
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><Clock /></el-icon>
                    <p>
                        6h 30min
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><TrendCharts /></el-icon>              
                    <p>
                        7,9
                    </p>
                </div>
                <button class="courseCardBtn">
                    View Course
                </button>
            </div>
            <div class="courseSecCard">
                <div class="courseSecCardImg">
                    <img src="../assets/Frame.png" alt="">
                </div>
                <div>
                    <p class="titleText">
                        Learn Figma
                    </p>
                    <p class="courseCardText">
                        by Christopher Morgan
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><Clock /></el-icon>
                    <p>
                        6h 30min
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><TrendCharts /></el-icon>              
                    <p>
                        7,9
                    </p>
                </div>
                <button class="courseCardBtn">
                    View Course
                </button>
            </div>
            <div class="courseSecCard">
                <div class="courseSecCardImg">
                    <img src="../assets/Frame.png" alt="">
                </div>
                <div>
                    <p class="titleText">
                        Learn Figma
                    </p>
                    <p class="courseCardText">
                        by Christopher Morgan
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><Clock /></el-icon>
                    <p>
                        6h 30min
                    </p>
                </div>
                <div class="courseCardImg">
                    <el-icon style="width: 30px"><TrendCharts /></el-icon>              
                    <p>
                        7,9
                    </p>
                </div>
                <button class="courseCardBtn">
                    View Course
                </button>
            </div>
        </div>
    </div>
</template>


<style>
.title {
    font-family: "Baloo Bhai 2";
    font-size: 24px;
    font-weight: bolder;
    text-transform: capitalize;
    margin: 5px;
}

.titleText {
    font-family: "Baloo Bhai 2";
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 5px;
}

.courseSecCardPar {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.courseSecCard {
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 80px;
    background-color: rgb(245, 245, 247);
    justify-content: space-between;
    align-items: center;
}

.courseSecCardImg {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
}

.courseCardText {
    font-family: "Roboto";
    font-size: 13px;
    font-weight: 400;
}

.courseCardImg {
    display: flex;
    align-items: center;
}

.courseCardBtn {
    width: 120px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

/* 960px - 1140px */
@media (max-width: 1140px) {
    .title {
        font-size: 22px;
    }

    .titleText {
        font-size: 16px;
    }

    .courseSecCard {
        width: 550px;
        height: 75px;
    }

    .courseCardText {
        font-size: 12px;
    }

    .courseCardBtn {
        width: 110px;
        height: 38px;
        padding: 5px;

    }
}

/* 720px - 960px */
@media (max-width: 960px) {
    .title {
        font-size: 20px;
    }

    .titleText {
        font-size: 15px;
    }

    .courseSecCard {
        width: 500px;
        height: 70px;
    }

    .courseCardText {
        font-size: 11px;
    }

    .courseCardBtn {
        width: 100px;
        height: 36px;
        padding: 5px;

    }
}

/* 540px - 720px */
@media (max-width: 720px) {
    .title {
        font-size: 18px;
    }

    .titleText {
        font-size: 14px;
    }

    .courseSecCard {
        width: 450px;
        height: 65px;
    }

    .courseCardText {
        font-size: 10px;
    }

    .courseCardBtn {
        width: 90px;
        height: 34px;
        padding: 5px;

    }
}

/* 320px - 540px */
@media (max-width: 540px) {
    .title {
        font-size: 16px;
    }

    .titleText {
        font-size: 13px;
    }

    .courseSecCard {
        width: 400px;
        height: 60px;
    }

    .courseCardText {
        font-size: 9px;
    }

    .courseCardBtn {
        width: 80px;
        height: 32px;
        font-size: 9px;

    }
}

/* 320px va undan kichik ekranlar uchun */
@media (max-width: 320px) {
    .title {
        font-size: 14px;
    }

    .titleText {
        font-size: 12px;
    }

    .courseSecCard {
        width: 350px;
        height: 55px;
    }

    .courseCardText {
        font-size: 8px;
    }

    .courseCardBtn {
        width: 70px;
        height: 30px;
        padding: 5px;
        font-size: 8px;


    }
}
</style>
