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
.title{
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    margin: 5px;
}
.titleText{
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 5px;

}
.courseSecCardPar{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.courseSecCard{
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 80px;
    background-color: rgb(245, 245, 247);
    justify-content: space-between;
    align-items: center;
}
.courseSecCardImg{
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
}
.courseCardText{
    font-size: 13px;
    font-weight: 400;
}
.courseCardImg{
    display: flex;
    align-items: center;
    
}
.courseCardBtn{
    width: 120px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>