<template>
  <div class="engagement_letter">
    <div class="letter_title">Engagement Letter</div>
    <div class="letter_contents">
      <span class="right_arrow">
        <i class="el-icon-arrow-right"></i>
      </span>
      <span class="left_arrow">
        <i class="el-icon-arrow-left"></i>
      </span>
    </div>

    <div class="letter_btn">
      <span class="forward_btn cursor_pointer">Continue Sign up</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EngagementLetter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .engagement_letter {
    width: 728px;
    margin: 16px auto;
    padding: 37px 49px 28px;
    background-color: #fff !important;
    .letter_title {
      font-size: 21px;
      font-weight: bold;
      letter-spacing: -0.29px;
      color: #512d3d;
    }
    .letter_contents {
      position: relative;
      // width: 418px;
      height: 594px;
      margin: 20px auto;
      // background-color: #999;
      .right_arrow {
        position: absolute;
        right: 20px;
        top: 50%;
        i {
          font-size: 26px;
        }
      }
      .left_arrow {
        position: absolute;
        left: 20px;
        top: 50%;
        i {
          font-size: 26px;
        }
      }
    }
    .letter_btn {
      padding: 31px 0 28px 0;
      .forward_btn {
        display: inline-block;
        width: 188px;
        height: 42px;
        line-height: 42px;
        border-radius: 21px;
        box-shadow: 0 0 10px 0 #feb563;
        background-color: #ffa136;
        font-size: 15px;
        letter-spacing: -0.25px;
        color: #ffffff;
      }
    }
  }
}
</style>
