<template>
  <div>
    <div class="swiper_wrap">
      <swiper :options="swiperOption">
        <swiper-slide class="img_wrap" v-for="(item, index) in swiperImg" :key="index">
          <img :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="case">
      <div class="case_title">项目案例</div>
      <div class="case_wrap">
        <div class="case_item" v-for="(item, index) in caseList" @mouseover="mouseover(index)"
             @mouseout="mouseout(index)">
          <div class="case_top"></div>
          <div class="case_name">滴答小镇</div>
          <div class="case_mark" v-show="item.isShow">
            滴答小镇
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="service-title">我们的服务</div>
      <div class="service-wrap">
        <div class="item_wrap">
          <div class="item uneven">
            <div class="item_top">
              <div class="corner"></div>
            </div>
            <div class="bottom_wrap">
              <div class="item_bottom">
                <div class="bottom_inside"></div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item_top">
              <div class="corner"></div>
            </div>
            <div class="bottom_wrap">
              <div class="item_bottom">
                <div class="bottom_inside"></div>
              </div>
            </div>
          </div>
          <div class="item uneven">
            <div class="item_top">
              <div class="corner"></div>
            </div>
            <div class="bottom_wrap">
              <div class="item_bottom">
                <div class="bottom_inside"></div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item_top">
              <div class="corner"></div>
            </div>
            <div class="bottom_wrap">
              <div class="item_bottom">
                <div class="bottom_inside"></div>
              </div>
            </div>
          </div>
          <div class="item uneven">
            <div class="item_top">
              <div class="corner"></div>
            </div>
            <div class="bottom_wrap">
              <div class="item_bottom">
                <div class="bottom_inside"></div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item_top">
              <div class="corner"></div>
            </div>
            <div class="bottom_wrap">
              <div class="item_bottom">
                <div class="bottom_inside"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scheme">
      <div class="scheme_title">解决方案</div>
      <div class="scheme_wrap">
        <div class="scheme_lift">
          <div class="lift_time"></div>
        </div>
        <div class="scheme_right">
          <div class="item_wrap">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
          <div class="item_wrap">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "Home",
    data() {
      return {
        swiperImg: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555130361480&di=f568dbfca2e145409ad5503d26d9cf62&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F30%2F20151130190150_T5A3i.jpeg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555726149&di=0955e618c286bca3b0e4561b0f839cc9&imgtype=jpg&er=1&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F024f78f0f736afc321789432b119ebc4b7451274.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555131500209&di=fab97edc435f2aeddc779f92df523a78&imgtype=0&src=http%3A%2F%2Fimg.lelezone.com%2Fthumb%2Fp%2Fallimg%2F150520%2F1-150520120T4.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555131522775&di=82294c7f950871484abb9e655acf8570&imgtype=0&src=http%3A%2F%2Fimg.lelezone.com%2Fthumb%2Fp%2Fallimg%2F150520%2F1-150520120T3.jpg'
        ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          observer: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop: true,
        },
        caseList: [
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
          {
            isShow: false
          },
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      mouseover(index) {
        this.$set(this.caseList[index], "isShow", true)
      },
      mouseout(index) {
        this.$set(this.caseList[index], "isShow", false)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper_wrap {
    .img_wrap {
      height: 800px;
      overflow: hidden;

      img {
        width: 100%
        height: 800px;
      }
    }
  }

  .case {
    padding: 50px 180px 0 200px

    .case_title {
      font-size: 40px
      font-weight 500
    }

    .case_wrap {
      height: 900px
      padding 40px 50px
      text-align left

      .case_item {
        display inline-block
        width: 300px
        height: 200px
        position relative
        margin-left 20px
        margin-bottom 20px
        text-align center

        .case_top {
          height: 150px
          background-color black
        }

        .case_name {
          height: 50px
          line-height: 50px
        }

        .case_mark {
          width: 300px
          height: 200px
          background-color rgba(255, 35, 67, .5)
          position absolute
          top: 0
          z-index 2

        }
      }
    }
  }

  .service {
    .service-title {
      font-size: 40px
      font-weight 500
    }

    .service-wrap {
      padding 40px 0
      .item_wrap{
        display flex
        justify-content:center
        .item {
          width: 150px
          height: 300px
          margin-right 30px
          padding-top 20px
          border-radius 10px
          position relative
          .item_top{
            width: 150px
            height: 170px
            position relative
            background-color red
            border-radius 10px
            .corner{
              width: 10px
              height: 10px
              background-color: red
              transform translateX(-50%) rotate(45deg)
              position absolute
              bottom -5px
              left 50%
            }
          }
          .bottom_wrap{
            padding-top: 20px
            .item_bottom{
              width: 23px
              height: 20px
              margin 0 auto
              background-color #7e8c8d
              border-radius 50%
              padding-top 3px
              .bottom_inside{
                width: 16px
                height: 16px
                background-color red
                border-radius 50%
                margin 0 auto
              }
            }
          }

        }
        .uneven{
          margin-top: 40px
        }
      }
    }
  }
  .scheme{
   .scheme_title{
     font-size: 40px
     font-weight 500
   }
   .scheme_wrap{
     margin 0 auto
     padding 20px 0
     width: 1200px
     display flex
     .scheme_lift{
       flex 1
       height 260px
       display flex
       flex-direction:column
       padding-right 10px
       .lift_time{
         width: 200px
         height: 260px
         align-self:flex-end
         border-radius 20px
         background-color gold
       }
     }
     .scheme_right{
       flex 4
       .item_wrap{
         text-align left
         .item{
           display inline-block
           margin-right 10px
           margin-bottom 10px
           width: 200px
           height: 126px
           border-radius 10px
           background-color goldenrod
         }
       }

     }
   }
  }
</style>
