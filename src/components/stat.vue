<script lang="ts" setup>

</script>

<template>
    <div class="statsContainer">
        <p class="statTitle">
            Your statistics
        </p>
        <div class="statName">
            <p class="statNameTitle">
            Learning Hours
        </p>

        <select name="" id="">
        <option value=""> Daily</option>
            <option value="">Weekly</option>
            <option value="">Monthly</option>
            
        </select>
        </div>
        <img src="../assets/stat.png" alt="">
        <div class="buy">
            <div class="buyMain">
            <p class="buyMainTitle">
                Lern even more!
            </p>
            <p class="buyMainText">
                Unlock premium features <br>
only for $9.99 per month.
            </p>
            <button class="buyBtn">
                go premium
            </button>
            </div>
            <img src="../assets/book.png" alt="">
        </div>
    </div>
</template>

<style>
.statsContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 440px;
}

.statTitle {
    font-family: "Baloo Bhai 2";
    font-size: 24px;
    font-weight: 900;
    margin: 10px;
}

.statNameTitle {
    font-family: "Baloo Bhai 2";
    font-size: 16px;
    font-weight: 600;
    margin: 10px;
}

.statName {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

select {
    width: 90px;
    height: 32px;
    border: none;
    border-radius: 5px;
    background-color: rgb(245, 245, 247);
    display: flex;
    justify-content: center;
    align-items: center;
}

.buy {
    display: flex;
    width: 440px;
    height: 190px;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(245, 245, 247);
    border-radius: 10px;
    border: none;
}

.buyMainTitle {
    font-family: "Baloo Bhai 2";
    font-size: 24px;
    font-weight: 800;
    margin: 0;
}

.buyMainText {
    font-family: "Roboto";
    font-size: 16px;
}

.buyBtn {
    width: 120px;
    font-family: "Roboto";
    text-transform: capitalize;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    border-radius: 10px;
}

/* 960px - 1140px */


/* 320px - 540px */
@media (max-width: 540px) {
    .statTitle {
        font-size: 16px;
    }

    .statNameTitle {
        font-size: 12px;
    }

    .buy {
        width: 280px;
        height: 150px;
    }

    .buyMainTitle {
        font-size: 16px;
    }

    .buyMainText {
        font-size: 12px;
    }

    .buyBtn {
        width: 80px;
        height: 32px;
    }
}

/* 320px va undan kichik ekranlar uchun */
@media (max-width: 320px) {
    .statTitle {
        font-size: 14px;
    }

    .statNameTitle {
        font-size: 11px;
    }

    .buy {
        width: 240px;
        height: 140px;
    }

    .buyMainTitle {
        font-size: 14px;
    }

    .buyMainText {
        font-size: 11px;
    }

    .buyBtn {
        width: 70px;
        height: 30px;
    }
}
</style>
