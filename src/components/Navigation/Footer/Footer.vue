<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_lift">
        <div class="item_wrap">
          <div class="">行业解决方案</div>
          <div class="">知识付费</div>
          <div class="">在线教育</div>
          <div class="">在线出版</div>
        </div>
        <div class="item_wrap">
          <div class="">联合分发</div>
          <div class="">内容分销</div>
          <div class="">广告分发</div>
        </div>
        <div class="item_wrap">
          <div class="">其他产品</div>
          <div class="">会议系统</div>
          <div class="">企业内训</div>
        </div>
        <div class="item_wrap">
          <div class="">场景解决方案</div>
          <div class="">在线直播</div>
        </div>
        <div class="item_wrap">
          <div class="">关于我们</div>
          <div class="">公司介绍</div>
          <div class="">加入我们</div>
          <div class="">帮助中心</div>
          <div class="">客户中心</div>
        </div>
        <div class="item_wrap">
          <div class="img_wrap">
            <img  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4137065271,2738895878&fm=26&gp=0.jpg" alt="">
          </div>
          <div class="">关于帆速</div>
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
    margin-top 100px
    background-color rgba(0, 0, 0, .8)
    .footer_content {
      padding 60px 300px
      display flex

      .footer_lift {
        flex 1
        display flex
        .item_wrap{
          flex 1
          div{
            line-height: 50px
            color white
          }
          .img_wrap{
            img{
              margin-top 20px
              width: 200px
              height auto
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
