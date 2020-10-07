<template>
  <div class="personal_details">
    <div class="menu_content">
      <el-row>
        <el-col :span="8">
          <div class="static" :class="{ active: isActive}">
            <div class="icon_left_img">
              <img src="../../assets/imgs/personalDetails-icon1@2x.png" alt />
            </div>
            <span class="icon_text">Fill Details</span>
            <!-- <div class="icon_text">Fill Details</div> -->
            <div class="icon_right">
              <i></i>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
                    <div class="static">
            <div class="icon_left_img">
              <img src="../../assets/imgs/personalDetails-icon2@2x.png" alt />
            </div>
            <span class="icon_text">Confirm T&C</span>
            <!-- <div class="icon_text">Fill Details</div> -->
            <div class="icon_right">
              <i></i>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          
                              <div class="static">
            <div class="icon_left_img">
              <img src="../../assets/imgs/personalDetails-icon3@2x.png" alt />
            </div>
            <span class="icon_text">Payment</span>
            <!-- <div class="icon_text">Fill Details</div> -->
            <div class="icon_right">
              <i></i>
            </div>
          </div>

        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PersonalDetails",
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .menu_content {
    height: 64px;
    background-color: #fff2e4;
    box-shadow: 0 7px 7px 0 #f2f2f2;
    .static {
      color: #512d3d;
      height: 64px;
      display: flex;
      justify-content: center;
      .icon_left_img {
        display: inline-block;
        height: 64px;
        padding-top: 20px;
        width: 22px;
        img {
          width: 100%;
          color: #fff;
        }
      }
      .icon_text {
        display: inline-block;
        height: 64px;
        line-height: 64px;
        font-size: 15px;
        letter-spacing: -0.25px;
        margin: 0 37px 0 14px;
      }
      .icon_right {
        display: inline-block;
        padding-top: 25px;
        i {
          display: inline-block;
          width: 15px;
          height: 15px;
          border: solid 2px #feb563;
          border-radius: 50%;
        }
      }
    }
    .active {
      background-color: #ffa136;
      height: 64px;
      color: #fff;
      border-radius: 2px;
      box-shadow: 0 0 10px 0 #feb563;
      i {
          border: solid 2px #fff!important;
        }
    }
  }
}
</style>
