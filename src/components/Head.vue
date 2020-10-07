<template>
  <div class="head">
    <div class="left_logo">
      <img src="../assets/imgs/head-logo@2x.png" alt />
    </div>
    <div class="right_nav">
      <span><i class="cursor_pointer">FAQs</i></span>
      <span><i class="cursor_pointer">Login</i></span>
      <span class="cursor_pointer">Get Started</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "heads"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .head {
    height: 87px;
    box-sizing: border-box;
    box-shadow: 0 0 14px 0 #f2f2f2;
    background-color: #ffffff;
    padding: 25px 91px 25px 124px;
    .left_logo {
      float: left;
      display: inline-block;
      height: 36px;
      img {
        height: 100%;
      }
    }
    .right_nav {
      float: right;
      display: inline-block;
      height: 36px;
      // border: 1px solid red;
      span {
        display: inline-block;
        width: 121px;
        height: 36px;
        line-height: 36px;
        font-family: Helvetica;
        letter-spacing: -0.25px;
        font-size: 15px;
        color: #ffa136;
      }
      span:nth-child(3) {
        color: #fff;
        border-radius: 24.5px;
        box-shadow: 0 2px 15px 0 #feb563;
        background-color: #ffa136;
      }
    }
  }
}
</style>
