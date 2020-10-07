<template>
  <div class="footers">
        <ul>
          <li>Copyright 2020 © Get Some Help</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Refund Policy</li>
          <li>134/7 Hoyle Avenue, Castle Hill , New South Wales, 2154, Australia</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "footers"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@media screen and (max-width: 768px) {
}
@media screen and (min-width: 768px) {
  .footers {
  height: 96px;
  padding: 40px 6px;
  text-align: left;
  box-shadow: 0 0 14px 0 #f2f2f2;
  background-color: #ffa136;
  ul{
    height: 28px;    
    li{
      display: inline-block;
    height: 28px; 
    line-height: 28px;
      font-size: 14px;
      color: #fff;
      padding: 0 22px;
      border-right: 1px solid #fff;
    }
    li:nth-child(5){
      border-right: none;
    }
  }
  }
}
</style>
