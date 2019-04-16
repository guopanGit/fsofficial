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
          <div class="case_top">
            <img :src="item.img" :alt="item.name">
          </div>
          <div class="case_name">{{item.name}}</div>
          <div class="case_mark" v-show="item.isShow">
            <div class="intro_top">{{item.name}}</div>
            <div class="intro_content">{{item.content}}</div>
            <div class="intro_bottom"></div>
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
          <div class="lift_time">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
          </div>
        </div>
        <div class="scheme_right">
          <div class="item_wrap">
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
          </div>
          <div class="item_wrap">
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join">
      <div class="join_title">参与案例</div>
      <div class="item_wrap">
        <div class="item" v-for="(item) in joinList">
          <div class="item_top">{{item.num}}</div>
          <div class="item_bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="message_title">行业资讯</div>
        <div class="message_wrap">
          <div class="message_item"></div>
          <div class="message_item"></div>
          <div class="message_item"></div>
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
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name:'滴答小镇',
            content:'1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
        ],
        joinList:[
          {
            num:'10000+',
            name:'千款移动应用开发'
          },
          {
            num:'500+',
            name:'50+移动合作伙伴'
          },
          {
            num:'50+',
            name:'服务于500+企业'
          },
          {
            num:'200',
            name:'200家开发供应商'
          },
          {
            num:'10000+',
            name:'千款移动应用开发'
          },
        ],
        schemeLift: 3
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
      },
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
    background-color #7e8c8d

    .case_title {
      font-size: 40px
      font-weight 500
    }

    .case_wrap {
      padding 40px 50px 80px 50px
      text-align left

      .case_item {
        display inline-block
        width: 300px
        height: 255px
        position relative
        margin-left 20px
        margin-bottom 35px
        text-align center
        border-radius 20px
        box-shadow 10px 6px 5px #888
        overflow hidden

        .case_top {
          height: 195px
          border-radius 20px 20px 0 0
          overflow hidden
          img{
            width: 300px
            height: 195px
          }
        }

        .case_name {
          height: 60px
          line-height: 60px
          background-color white
          border-radius 0 0 20px 20px
        }

        .case_mark {
          width: 325px
          height: 255px
          background-color rgba(255, 35, 67, .5)
          border-radius 20px
          position absolute
          top: 0
          z-index 2
          .intro_top{
            line-height: 50px
            font-weight 500
            margin-top 20px
          }

          .intro_content{
            height: 110px
            line-height: 20px
            text-align left
            padding 0 25px
            overflow auto
            text-overflow: ellipsis
          }
          .intro_bottom{
            width: 50px
            height: 50px
            background-color goldenrod
            margin 10px auto
            cursor pointer
          }
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
      height: 518px
      padding 40px 0
      .item_wrap{
        display flex
        justify-content:center
        .item {
          width: 190px
          height: 300px
          margin-right 30px
          padding-top 80px
          border-radius 10px
          position relative
          .item_top{
            width: 190px
            height: 245px
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
          margin-top: 90px
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
     padding 20px 300px
     display flex
     .scheme_lift{
       flex 1
       height 314px
       display flex
       flex-direction:column
       padding-right 10px
       .lift_time{
         width: 283px
         height: 314px
         align-self:flex-end
         border-radius 20px
         overflow hidden
        img{
          width: 283px
          height: 314px
          border-radius 20px
          transition: all 1s ease 0s
        }
         img:hover{
           transform scale(2)
         }
       }
     }
     .scheme_right{
       flex 10
       .item_wrap{
         text-align left
         .item{
           display inline-block
           margin-right 10px
           margin-bottom 10px
           width: 225px
           height: 150px
           border-radius 10px
           overflow hidden
           img {
             width: 225px
             height: 150px
             margin-right 10px
             transition: all 1s ease 0s
           }
           img:hover{
             transform scale(2)
           }
         }
       }

     }
   }
  }
  .join{
    background-color goldenrod
    .join_title{
      font-size: 40px
      font-weight 500
    }
    .item_wrap{
      width: 1400px
      margin: 20px auto
      .item{
        width: 235px
        height: 200px
        display inline-block
        margin-right 10px
        .item_top{
          width: 235px
          height: 125px
          margin  20px 0
          line-height 120px
          border-radius 20px
          color: #fe4716
          background-color white
          font-size: 60px
        }
      }
    }
  }
  .message{
    .message_title{
      font-size: 40px
      font-weight 500
    }
    .message_wrap{
      width: 1300px
      padding 50px 0
      margin 0 auto
      .message_item{
        width: 380px
        height: 500px
        display inline-block
        margin-right 20px
        background-color goldenrod
        border-radius 10px
      }
    }
  }
</style>
