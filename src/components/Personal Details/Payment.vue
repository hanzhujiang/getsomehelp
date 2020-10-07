<template>
  <div class="payment">
    <div class="payment_title">Choose Your Package</div>
    <div class="payment_contents">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <p>
            <img src="../../assets/imgs/payment_icon2@2x.png" alt />
          </p>
          <p>Option 1</p>
          <p>1500 + GST</p>
          <p>
            One time
            <span></span>
          </p>
        </el-col>
        <el-col class="active" :span="6">
          <p>
            <img src="../../assets/imgs/payment_icon2@2x.png" alt />
          </p>
          <p>Option 2</p>
          <p>500 + GST per month</p>
          <p>3 times, total 1500</p>
        </el-col>
        <el-col :span="6">
          <p>
            <img src="../../assets/imgs/payment_icon2@2x.png" alt />
          </p>
          <p>Option 3</p>
          <p>125 + GST per week</p>
          <p>12 times, total 1500</p>
        </el-col>
      </el-row>
      <div class="middle_title">Payment</div>
      <div class="inputs">
        <p>Start Date of Subscription (Choose a date within 2 weeks)</p>
        <el-input></el-input>
      </div>
      <div class="inputs">
        <p>Start Date of Subscription (Choose a date within 2 weeks)</p>
        <el-input></el-input>
      </div>
    </div>
    <div class="payment_btn">
       <span class="forward_btn cursor_pointer">Submit</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .payment {
    width: 728px;
    margin: 16px auto;
    padding: 37px 49px 28px;
    font-family: Helvetica;
    background-color: #fff !important;
    .payment_title {
      font-size: 21px;
      font-weight: bold;
      letter-spacing: -0.29px;
      color: #512d3d;
    }
    .payment_contents {
      padding: 41px 0 45px 0;
      .el-col {
        text-align: center;
        width: 205px;
        height: 212px;
        border-radius: 2px;
        // background-color:;
        p {
          margin: 15px 0;
        }
        p:nth-child(1) {
          width: 76px;
          height: 76px;
          margin: 0 auto;
          margin-top: 21px;
          img {
            width: 100%;
          }
        }
        p:nth-child(2) {
          font-size: 15px;
          font-weight: bold;
          letter-spacing: -0.21px;
          color: #ffa136;
        }
        p:nth-child(3) {
          font-size: 15px;
          font-weight: bold;
          letter-spacing: -0.21px;
          color: #512d3d;
        }
        p:nth-child(4) {
          font-size: 15px;
          letter-spacing: -0.21px;
          color: #512d3d;
        }
      }
      .active {
        border: solid 1px #ffa136;
        background-color: #fcf1e5;
      }
      .middle_title {
        margin: 76px auto 52px auto;
        font-size: 21px;
        font-weight: bold;
        letter-spacing: -0.29px;
        color: #512d3d;
      }
      .inputs {
        margin: 23px 100px;
        text-align: left;
        p {
          font-size: 15px;
          font-weight: bold;
          letter-spacing: -0.25px;
          color: #512d3d;
        }
        .el-input {
          margin-top: 17px;
        }
      }
    }
    .payment_btn{
            padding: 0 0 28px 0;
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
