<script lang="ts" setup>
</script>

<template>
    <div class="container">
        <div class="courseMain">
            <div class="courseMainText">
                <p class="courseMainTextTitle">Hello Josh!</p>
                <p class="courseMainTextTitleP">It’s good to see you again.</p>
            </div>
            <img src="../../public/aaa.png" alt="" class="courseMainImg">
        </div>
        <div class="courseLang">
            <div class="courseLangMain">
                <div class="courseLangMainImg">
                     <img src="../assets/esp.png" alt="">
                </div>
                <div>
                    <p class="courseLangMainTitle">Spanish B2</p>
                    <p class="courseLangMainText">by Alejandro Velazquez</p>
                </div>
                <p class="courseLangMainTitle">83%</p>
                <button class="courseLangMainBtn">Contunie</button>
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

/* Main course section */
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
    font-family:"Baloo Bhai 2";
    font-weight: 900;
    font-size: 36px;
    text-align: center;
}

.courseMainTextTitleP {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    text-align: center;
}

/* Language course section */
.courseLang {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 620px;
    width: 100%;
    justify-content: space-between;
}

.courseLangMain {
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

.courseLangMainImg {
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
}

.courseLangMainTitle {
    font-family: "Baloo Bhai 2";
    font-size: 16px;
    color: black;
    font-weight: 900;
}

.courseLangMainText {
    font-family: "Roboto";
    font-size: 13px;
    font-weight: 400;
}

.courseLangMainBtn {
    width: 120px;
    height: 42px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: "Roboto";
}

/* Responsive styles */
@media (max-width: 1140px) {
    .container {
        gap: 8px;
    }

    .courseMain {
        height: 140px;
    }

    .courseMainImg {
        top: -25px;
        left: 400px;
        width: 140px;
    }

    .courseMainTextTitle {
        font-size: 32px;
    }

    .courseMainTextTitleP {
        font-size: 15px;
    }

    .courseLangMain {
        height: 75px;
    }

    .courseLangMainImg {
        width: 56px;
        height: 56px;
    }

    .courseLangMainTitle {
        font-size: 14px;
    }

    .courseLangMainText {
        font-size: 12px;
    }

    .courseLangMainBtn {
        width: 110px;
        height: 40px;
    }
}

@media (max-width: 960px) {
    .container {
        gap: 7px;
    }

    .courseMain {
        height: 120px;
    }

    .courseMainImg {
        top: -20px;
        left: 350px;
        width: 120px;
    }

    .courseMainTextTitle {
        font-size: 28px;
    }

    .courseMainTextTitleP {
        font-size: 14px;
    }

    .courseLangMain {
        height: 70px;
    }

    .courseLangMainImg {
        width: 50px;
        height: 50px;
    }

    .courseLangMainTitle {
        font-size: 13px;
    }

    .courseLangMainText {
        font-size: 11px;
    }

    .courseLangMainBtn {
        width: 100px;
        height: 38px;
    }
}

@media (max-width: 720px) {
    .container {
        gap: 6px;
    }

    .courseMain {
        height: 100px;
    }

    .courseMainImg {
        top: -15px;
        left: 300px;
        width: 100px;
    }

    .courseMainTextTitle {
        font-size: 24px;
    }

    .courseMainTextTitleP {
        font-size: 13px;
    }

    .courseLangMain {
        height: 65px;
    }

    .courseLangMainImg {
        width: 44px;
        height: 44px;
    }

    .courseLangMainTitle {
        font-size: 12px;
    }

    .courseLangMainText {
        font-size: 10px;
    }

    .courseLangMainBtn {
        width: 90px;
        height: 36px;
    }
}

@media (max-width: 540px) {
    .container {
        gap: 5px;
    }

    .courseMain {
        height: 90px;
    }

    .courseMainImg {
        top: -12px;
        left: 230px;
        width: 80px;
    }

    .courseMainTextTitle {
        font-size: 20px;
    }

    .courseMainTextTitleP {
        font-size: 12px;
    }

    .courseLangMain {
        height: 60px;
    }

    .courseLangMainImg {
        width: 38px;
        height: 38px;
    }

    .courseLangMainTitle {
        font-size: 11px;
    }

    .courseLangMainText {
        font-size: 9px;
    }

    .courseLangMainBtn {
        width: 80px;
        height: 34px;
    }
}

@media (max-width: 320px) {
    .container {
        gap: 4px;
    }

    .courseMain {
        height: 80px;
    }

    .courseMainImg {
        top: -10px;
        left: 180px;
        width: 70px;
    }

    .courseMainTextTitle {
        font-size: 18px;
    }

    .courseMainTextTitleP {
        font-size: 11px;
    }

    .courseLangMain {
        height: 55px;
    }

    .courseLangMainImg {
        width: 32px;
        height: 32px;
    }

    .courseLangMainTitle {
        font-size: 10px;
    }

    .courseLangMainText {
        font-size: 8px;
    }

    .courseLangMainBtn {
        width: 70px;
        height: 32px;
    }
}
</style>
