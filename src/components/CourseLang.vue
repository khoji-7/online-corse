<script lang="ts" setup>

</script>

<template>
    <div class="container">
        <div class="courseMain">
            <div class="courseMainText">
                <p class="courseMainTextTitle">
                    Hello Josh!
                </p>
                <p class="courseMainTextTitleP">
                    It’s good to see you again.
                </p>
            </div>
            <img src="../../public/aaa.png" alt="" class="courseMainImg">
        </div>
        <div class="courseLang">
            <div class="courseLangMain">
                <div class="courseLangMainImg">
                     <img src="../assets/esp.png" alt="">
                </div>
                <div>
                    <p class="courseLangMainTitle">
                        Spanish B2
                    </p>
                    <p class="courseLangMainText">
                        by Alejandro Velazquez
                    </p>
                </div>
                <p class="courseLangMainTitle">
                    83%
                </p>

                <button class="courseLangMainBtn">
                    contunie
                </button>
            </div>
            <img src="../assets/strel.svg" alt="">
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    max-width: 620px;
    gap: 10px;
    height: auto;
}

.courseMain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 15px;
    width: 100%;
    margin: 0 auto;
    height: 160px;
    background-color: rgb(245, 245, 247);
    position: relative;
}

.courseMainImg {
    position: absolute;
    top: -30px;
    left: 340px;
}

.courseMainTextTitle {

    font-weight: 400;
    font-size: 36px;
    text-align: center;
}

.courseMainTextTitleP {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
}
.courseLang{
   display: flex;
   flex-direction: row;
   align-items: center;
    max-width: 620px;
    width: 100%;
    justify-content: space-between;
   
}
.courseLangMain{
    background-color: rgb(245, 245, 247);
    max-width: 500px;
    width: 100%;
    height: 85px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

}
.courseLangMainImg{
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
}
.courseLangMainTitle{
    font-size: 16px;
    color: black;
    font-weight: 900;
}
.courseLangMainText{
    font-size: 13px;
    font-weight: 400;
}
.courseLangMainBtn{
    width: 120px;
    height: 42px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

</style>