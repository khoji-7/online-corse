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
    margin: 0 auto;
  }
  .statTitle{
    font-size: 24px;
    font-weight: 900;
    margin: 10px;
  }
  .statNameTitle{
    font-size: 16px;
    font-weight: 600;
    margin: 10px;
  }
  .statName{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  select{
    width: 90px;
    height: 32px;
    border: none;
    border-radius: 5px;
    background-color: rgb(245, 245, 247);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buy{
    display: flex;
    width: 440px;
    height: 190px;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(245, 245, 247);
    border-radius: 10px;
    border: none;
  }
  .buyMainTitle{
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }
  .buyMainText{
    font-size: 16px;
  }
  .buyBtn{
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
</style>