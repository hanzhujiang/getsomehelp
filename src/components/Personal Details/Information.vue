<template>
  <div class="information">
    <div class="information_title">
      <div class="titles">Personal Details</div>
      <span class="title_bottom_line"></span>
    </div>
    <div class="information_contents">
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="form_col">
            <p>Client Name</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form_col">
            <p>DOB</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="form_col">
            <p>Address</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form_col">
            <p>Suburb</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="form_col">
            <p>State</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form_col">
            <p>Client Name</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="form_col">
            <p>Postcode</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form_col">
            <p>Phone</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="form_col">
            <p>Client Name</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form_col">
            <p>Email</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="12">
          <div class="form_col">
            <p>Driver's License No</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="form_col">
            <p>Expiry Date</p>
            <el-input type="text" clearable></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="information_btn">
      <span class="forward_btn cursor_pointer">Continue Sign up</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .information {
    width: 768px;
    margin: 16px auto;
    padding: 37px 49px 28px;
    background-color: #fff !important;
    .information_title {
      text-align: left;
      .titles {
        font-size: 21px;
        font-weight: bold;
        letter-spacing: -0.29px;
        color: #512d3d;
      }
      .title_bottom_line {
        display: inline-block;
        width: 33px;
        height: 5px;
        background-color: #ffa136;
      }
    }
    .information_contents {
      text-align: left;
      .form_col {
        width: 303px;
        p {
          height: 18px;
          font-size: 15px;
          letter-spacing: -0.25px;
          color: #83757b;
          margin: 21px 0 14px 0;
        }
      }
    }

    .information_btn {
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

<style lang="scss">
.information_contents {
  .el-input--suffix .el-input__inner {
    background: #f8f8f8; //fill-in background
    color: #512d3d; //font color inside
    border-radius: 0px;
    height: 50px;
    font-size: 18px;
  }
}
.input-with-select .el-select .el-input {
  width: 130px;
  // height: 60px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
  border-radius: 0px;
}

@media screen and (max-width: 768px) {
  .el-message-box {
    width: 280px;
  }
}
.el-message-box {
  .el-message-box__btns {
    text-align: center;
  }
  .el-button--primary {
    background: #262f3d;
  }
}
// .el-message-box
</style>
