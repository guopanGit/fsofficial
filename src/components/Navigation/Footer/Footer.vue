<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_lift">
        <div class="item_wrap">
          <div class="item_a">行业解决方案</div>
          <div class="item_b">知识付费</div>
          <div class="item_b">在线教育</div>
          <div class="item_b">在线出版</div>
        </div>
        <div class="item_wrap">
          <div class="item_a">联合分发</div>
          <div class="item_b">内容分销</div>
          <div class="item_b">广告分发</div>
        </div>
        <div class="item_wrap">
          <div class="item_a">其他产品</div>
          <div class="item_b">会议系统</div>
          <div class="item_b">企业内训</div>
        </div>
        <div class="item_wrap">
          <div class="item_a">场景解决方案</div>
          <div class="item_b">在线直播</div>
        </div>
        <div class="item_wrap">
          <div class="item_a">关于我们</div>
          <div class="item_b">公司介绍</div>
          <div class="item_b">加入我们</div>
          <div class="item_b">帮助中心</div>
          <div class="item_b">客户中心</div>
        </div>
        <div class="item_wrap">
          <div class="img_wrap">
            <img  src="./images/dimension.png" alt="">
          </div>
          <div class="item_b">关于帆速</div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <span>版权所有: </span>
      <span>北京帆速科技有限公司</span>
      <span>备案号：</span>
      <span>京ICP备18056755号</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="stylus">
  .footer {
    margin-top 40px
    background-color rgba(0, 0, 0, .8)
    .footer_content {
      padding 40px 300px
      display flex

      .footer_lift {
        flex 1
        display flex
        .item_wrap{
          flex 1
          color white
          text-align left
          .item_a{
            margin-bottom:35px
          }
          .item_b{
            line-height 40px
          }
          .img_wrap{
            width: 160px
            height 160px
            img{
              width: 160px
              height 160px
            }
          }
        }
      }
    }
    .footer_bottom{
      height: 80px
      color: #ffffff
    }
  }

</style>
