<template>
  <div class="landing">
    <!-- first-row-start -->
    <el-row>
      <el-col :span="12">
        <div class="left_banner">
          <div class="left_banner_contents">
            <h1>Get Some Help today and leave that financial burden to us.</h1>
            <p>
              Get Some Help was initially introduced as an administrative arm to Renting 2 Buy. Renting 2 Buy is a consulting firm designed to help Australians purchase a property with a zero to little deposit. As the client approaches with the intention to purchase of the property, we soon found out that a large portion required debt reduction in order to be able to service and afford the debt comfortably.
              We work with third party legal firms who specialise in contract negotiation and debt negotiation. As a result, all clients who have gone through this process have reduced debts substantially with a large portion having more than 50% reduced.
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right_img">
          <img src="../assets/imgs/landing-img1@2x.png" alt />
        </div>
      </el-col>
    </el-row>
    <!-- first-row-end -->

    <!-- second-row-start -->
    <el-row>
      <el-col :span="12">
        <div class="left_img">
          <img src="../assets/imgs/landing-img2@2x.png" alt />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right_banner">
          <div class="right_banner_contents">
            <h1>Who We Are？</h1>
            <p>
              Get Some Help is the premiere debt reduction agency. We were founded initially as an arm of Renting 2 Buy. We would help Australians day in day out reduce their non-deductible unsecured debt by up to 50% with an objective of not only reducing debt but improving their credit file. Unlike most credit negotiating agencies, we refuse to go down the part 9/part 10 debt agreement path. We refuse to position clients to banks and financial institutions as delinquent debt or as bankrupt debt. Instead, we work with banks to allow them to understand that if you are in a hardship position, then you are in need of assistance, which is the bank's obligation to provide. 

Alternatively, if you were never in a position to service that debt when you first got it, that you had been a victim of irresponsible lending if that was the case. We work with third party legal firms to issue these complaints directly with the bank. We ensure that we go through every single possible method at our fingertips to represent you the client, to minimize your debt by up to 50%. A large number of clients have had their debt reduced by more than 50% of their balance. Along with that, we assist our clients to have that remaining balance of the debt owing to their financial institutions to be paid off over a set period of time through instalments. 

Our legal partners ensure that you don't just reduce your debt, but you change your life. Get out of the burden of debt together! Start your first step into financial freedom and unleash the shackles of debt.
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- second-row-end -->

    <!-- third-row-start -->
    <el-row>
      <el-col :span="12">
        <div class="left_banner">
          <div class="left_banner_contents">
            <h1>Our Clients</h1>
            <p>Our clients in the past have come to us with every intention of getting their financial future on track but with the burden of debt already existing, they are unable to proceed. Our average client has debts significant to the point that it is almost impossible to pay down in advance. Allow us to talk with your financial institutions on your behalf and to have a solicitor talk on your behalf to reduce that debt to a point where it's not only manageable but also to a point where you can manage to move forward as opposed to standing still. Press the apply button now and make your first move to financial freedom!</p>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="right_img">
          <img src="../assets/imgs/landing-img3@2x.png" alt />
        </div>
      </el-col>
    </el-row>
    <!-- third-row-end -->
  </div>
</template>

<script>
export default {
  name: "landing"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .landing {
    .el-row {
      padding: 50px 33px;
    }
    .left_banner {
      padding-left: 90px;
      display: flex;
      align-items: center;
      height: 45vw;
      .left_banner_contents {
        padding-right: 50px;
        text-align: left;
        h1 {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.6px;
          color: #ffa136;
        }
        p {
          margin-top: 22px;
          font-family: Helvetica;
          font-size: 15px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.47;
          letter-spacing: 0.15px;
          color: #512d3d;
        }
      }
    }
    .right_img {
      width: 100%;
      img {
        width: 100%;
      }
    }

    .left_img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .right_banner {
      padding-right: 90px;
      display: flex;
      align-items: center;
      height: 35vw;
      .right_banner_contents {
        padding-left: 50px;
        text-align: left;
        h1 {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.6px;
          color: #ffa136;
        }
        p {
          margin-top: 22px;
          font-family: Helvetica;
          font-size: 15px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.47;
          letter-spacing: 0.15px;
          color: #512d3d;
        }
      }
    }
  }
}
</style>
