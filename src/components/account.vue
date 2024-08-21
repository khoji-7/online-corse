<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { Search, Notification, UserFilled } from '@element-plus/icons-vue'
</script>

<template>
    <div class="accountContainer">
        <div class="accountNav">
            <div class="accountSear">
                <el-icon style="width: 30px;"><Search /></el-icon>
                <input type="text">
            </div>
            <el-icon style="width: 40px;"><Notification /></el-icon>
            <el-icon style="width: 40px;"><UserFilled /></el-icon>
        </div>
        <div class="accountNumPar">
            <div class="accountNum">
                <p class="accountNumTitle">11</p>
                <p class="accountNumText">Course <br> complete</p>
            </div>
            <div class="accountNum">
                <p class="accountNumTitle">4</p>
                <p class="accountNumText">Course <br> in progress</p>
            </div>
        </div>
    </div>
</template>

<style>
.accountContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 440px;
}

.accountSear {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    background-color: rgb(245, 245, 247);
}

.accountNav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

input {
    border: none;
    background-color: rgb(245, 245, 247);
    width: 250px;
}

.accountNumPar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
}

.accountNum {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 245, 247);
    border-radius: 10px;
    gap: 10px;
}

.accountNumTitle {
    font-family: "Baloo Bhai 2";
    font-size: 64px;
    font-weight: bold;
}

.accountNumText {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 300;
}

/* 320px va undan kichik ekranlar uchun */
@media (max-width: 320px) {
    .accountContainer {
        width: 100%;
    }
    .accountSear {
        width: 90%;
    }
   
    .accountNumTitle {
        font-size: 32px;
    }
    .accountNumText {
        font-size: 12px;
    }
    .accountNav el-icon {
        width: 20px;
    }
}


</style>
