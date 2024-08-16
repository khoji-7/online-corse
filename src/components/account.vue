<script setup lang="ts">
import { ElIcon } from 'element-plus'
import {Search,Notification,UserFilled} from '@element-plus/icons-vue'

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
                        <p class="accountNumTitle">
                        11
                        </p>
                        <p class="accountNumText">
                            course <br> complete
                        </p>
                    </div>
                    <div class="accountNum">
                        <p class="accountNumTitle">
                        4
                        </p>
                        <p class="accountNumText">
                            course <br> active
                        </p>
                    </div>
            </div>
        
    </div>

    
</template>

<style>
.accountContainer{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 440px;
    margin: 0 auto;
}
.accountSear{
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    background-color: rgb(245, 245, 247);
}
.accountNav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
}
input{
    border: none;
    background-color: rgb(245, 245, 247);
    width: 250px;
}
.accountNumPar{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
}
.accountNum{
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 245, 247);
    border-radius: 10px;

}
.accountNumTitle{
    font-size: 64px;
    font-weight: bold;
}
.accountNumText{
    font-size: 18px;
    font-weight: 400;

}



</style>