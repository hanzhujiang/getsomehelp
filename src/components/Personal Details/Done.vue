<template>
  <div class="done">
    <div class="img_box_1">
      <!-- done-img@2x -->
      <img src="../../assets/imgs/done-img@2x.png" alt />
    </div>
    <p>
      Thank you (User`s full name)
      Your instalment has been successfully set up
    </p>
    <p>What`s Next ?</p>

    <ul>
      <li>1、We will contact you shortly to guide you through the process.</li>
      <li>2、We have sent you an engagement letter to your email {email address here}, which requires your and your guarantor's signatures.</li>
      <li>3、If you do not receive an email, or this is not the correct email, please contact us at support@getsomehelp.com.au for assistance.</li>
    </ul>

    <div class="pdf_download">
      <div class="img_box">
        <img src="../../assets/imgs/done-pdf-img@2x.png" alt />
      </div>
      <p>Engagement Letter.PDF</p>
    </div>
    <div class="done_btn">
      <span class="forward_btn cursor_pointer">Download PDF</span>
      <span class="back_btn cursor_pointer">Back to dashboard</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Done"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .done {
    width: 728px;
    margin: 16px auto;
    padding: 37px 49px 28px;
    font-family: Helvetica;
    background-color: #fff !important;
    text-align: center;
    .img_box_1 {
      width: 385px;
      height: 216px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    p:nth-child(2) {
      margin: 16px auto;
      font-size: 21px;
      font-weight: bold;
      letter-spacing: -0.29px;
      color: #512d3d;
    }
    p:nth-child(3) {
      font-size: 21px;
      font-weight: bold;
      letter-spacing: -0.29px;
      color: #512d3d;
      padding: 32px auto 35px auto;
    }

    ul {
      padding: 20px 50px;
      li {
        text-align: left;
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.21px;
        color: #512d3d;
        margin: 9px auto;
      }
    }
    .pdf_download {
      .img_box {
        width: 40px;
        height: 50px;
        object-fit: contain;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: -0.17px;
        text-align: center;
        color: #4a4a4a;
      }
    }
    .done_btn {
      .forward_btn {
        display: inline-block;
        width: 188px;
        height: 42px;
        line-height: 42px;
        border-radius: 21px;
        margin-right: 23px;
        box-shadow: 0 0 10px 0 #feb563;
        background-color: #ffa136;
        font-size: 15px;
        color: #fff;
      }
      .back_btn {
        display: inline-block;
        width: 188px;
        height: 42px;
        line-height: 42px;
        margin-left: 23px;
        border-radius: 21px;
        letter-spacing: -0.25px;
        border: solid 1px #ffa136;
        background-color: #fff;
        color: #ffa136;
      }
    }
  }
}
</style>
