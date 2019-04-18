<template>
  <div>
    <div class="swiper_wrap">
      <swiper :options="swiperOption">
        <swiper-slide class="img_wrap" v-for="(item, index) in swiperImg" :key="index">
          <img :src="item.img" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="case">
      <div class="case_title">
        <img src="./images/case.png" alt="项目案例">
      </div>
      <div class="case_wrap">
        <div class="case_item" v-for="(item, index) in caseList" @mouseover="mouseover(index)"
             @mouseout="mouseout(index)">
          <div class="case_top">
            <img v-lazy="item.img" :alt="item.name">
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
      <div class="service-title">
        <img src="./images/service.png" alt="我们的服务">
      </div>
      <div class="service-wrap">
        <div class="item_wrap">
          <div class="item uneven">
            <div class="item_top">
              <div class="top_a1"></div>
              <div class="top_b">战略咨询</div>
              <div class="top_c">多种主流付费形式</div>
              <div class="top_d">满足不同学习需求</div>
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
              <div class="top_a2"></div>
              <div class="top_b">战略咨询</div>
              <div class="top_c">多种主流付费形式</div>
              <div class="top_d">满足不同学习需求</div>
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
              <div class="top_a3"></div>
              <div class="top_b">战略咨询</div>
              <div class="top_c">多种主流付费形式</div>
              <div class="top_d">满足不同学习需求</div>
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
              <div class="top_a4"></div>
              <div class="top_b">战略咨询</div>
              <div class="top_c">多种主流付费形式</div>
              <div class="top_d">满足不同学习需求</div>
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
              <div class="top_a5"></div>
              <div class="top_b">战略咨询</div>
              <div class="top_c">多种主流付费形式</div>
              <div class="top_d">满足不同学习需求</div>
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
              <div class="top_a6"></div>
              <div class="top_b">战略咨询</div>
              <div class="top_c">多种主流付费形式</div>
              <div class="top_d">满足不同学习需求</div>
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
      <div class="scheme_title">
        <img src="./images/scheme.png" alt="解决方案">
      </div>
      <div class="scheme_wrap">
        <div class="scheme_lift">
          <div class="lift_time">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                 alt="">
          </div>
        </div>
        <div class="scheme_right">
          <div class="item_wrap">
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </div>
          <div class="item_wrap">
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=938625231,363586402&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join">
      <div class="join_title">
        <img src="./images/join.png" alt="参与案例">
      </div>
      <div class="item_wrap">
        <div class="item" v-for="(item) in joinList">
          <div class="item_top">{{item.num}}</div>
          <div class="item_bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="message_title">
        <img src="./images/message.png" alt="行业资讯"></div>
      <div class="message_wrap">
        <div class="message_item">
          <div class="item_img">
            <img src="./images/message_item.png" alt="">
          </div>
          <div class="text_wrap border0">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
        </div>
        <div class="message_item">
          <div class="item_img">
            <img src="./images/message_item.png" alt="">
          </div>
          <div class="text_wrap border0">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
        </div>
        <div class="message_item">
          <div class="item_img">
            <img src="./images/message_item.png" alt="">
          </div>
          <div class="text_wrap border0">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
          <div class="text_wrap">
            <div class="text_title">
              <div class="text_name">VR让你身临其境体验</div>
              <div class="text_date">2019-4-18</div>
            </div>
            <div class="text_bottom">微信、支付宝两家第三方平台</div>
          </div>
        </div>
      </div>
    </div>
    <div class="demand">
      <div class="demand_wrap">
        <div class="demand_title">在一切开始之前，先说说您的需求吧</div>
        <div class="demand_contact">
          <div class="contact">
            <div class="name">
              <span>您的姓名：</span>
              <input type="text" placeholder="请输入姓名" v-model="name">
            </div>
            <div class="phone">
              <span>联系电话：</span>
              <input type="text" placeholder="请输入姓名" v-model="phone">
            </div>
          </div>
          <div class="textarea">
            <div>您的需求：</div>
            <textarea name="demand" class="text_content" draggable="true"></textarea>
          </div>
          <div class="footer">
            <div class="verification_wrap">
              <span>验证码：</span>
              <input type="text" placeholder="请输入验证码" v-model="verification">
            </div>
            <div class="verification" @click="change" >
              <div class="code" v-for=" item in code">{{item}}</div>
            </div>
            <div class="submit">提交</div>
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
          {
            img: require('./images/slideshow.png'),
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555130361480&di=f568dbfca2e145409ad5503d26d9cf62&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F30%2F20151130190150_T5A3i.jpeg'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555130361480&di=f568dbfca2e145409ad5503d26d9cf62&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F30%2F20151130190150_T5A3i.jpeg'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555131500209&di=fab97edc435f2aeddc779f92df523a78&imgtype=0&src=http%3A%2F%2Fimg.lelezone.com%2Fthumb%2Fp%2Fallimg%2F150520%2F1-150520120T4.jpg'
          },

          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555131522775&di=82294c7f950871484abb9e655acf8570&imgtype=0&src=http%3A%2F%2Fimg.lelezone.com%2Fthumb%2Fp%2Fallimg%2F150520%2F1-150520120T3.jpg'
          },
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
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
          {
            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=895800172,2576710845&fm=26&gp=0.jpg',
            name: '滴答小镇',
            content: '1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。',
            isShow: false
          },
        ],
        joinList: [
          {
            num: '10000+',
            name: '千款移动应用开发'
          },
          {
            num: '500+',
            name: '50+移动合作伙伴'
          },
          {
            num: '50+',
            name: '服务于500+企业'
          },
          {
            num: '200',
            name: '200家开发供应商'
          },
          {
            num: '10000+',
            name: '千款移动应用开发'
          },
        ],
        code: [2, 4, 5, 5],
        name: '',
        phone: '',
        verification: ''
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
      change() {
        let arr = []
        for (let i = 0; i < 4; i++) {
          let a = Math.random() * 9
          a = Math.round(a)
          arr.push(a)
        }
        this.code = arr
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper_wrap {
    .img_wrap {
      height: 708px;
      overflow: hidden;

      img {
        width: 100%
        height: 708px;
      }
    }
  }

  .case {
    padding: 70px 180px 0 200px
    background-color rgba(245, 245, 245, 1)

    .case_title {
      width: 471px
      height: 84px
      margin 0 auto

      img {
        width: 471px
        height: 84px
      }
    }

    .case_wrap {
      padding 40px 360px 80px 360px
      text-align left

      .case_item {
        display inline-block
        width: 298px
        height: 254px
        position relative
        margin-left 20px
        margin-bottom 35px
        text-align center
        border-radius 4px
        box-shadow 10px 6px 5px rgba(230, 230, 230, 1)
        overflow hidden

        .case_top {
          height: 199px
          overflow hidden

          img {
            width: 300px
            height: 196px
          }
        }

        .case_name {
          height: 60px
          line-height: 60px
          font-size: 24px
          font-weight: 400
          background-color white
        }

        .case_mark {
          width: 325px
          height: 255px
          background-color rgba(10, 8, 23, .3)
          color #fff
          font-size: 13px
          font-weight bold
          border-radius 20px
          position absolute
          top: 0
          z-index 2

          .intro_top {
            line-height: 50px
            font-weight 500
            margin-top 20px
          }

          .intro_content {
            height: 110px
            line-height: 20px
            text-align left
            padding 0 25px
            overflow auto
            text-overflow: ellipsis
          }

          .intro_bottom {
            width: 32px
            height: 32px
            background url("./images/go.png") no-repeat
            background-size 32px 32px
            padding-right: 20px
            margin 20px auto
            cursor pointer
          }
        }
      }
    }
  }

  .service {
    background-color #7e8c8d
    padding-top: 69px

    .service-title {
      width: 620px
      height: 86px
      margin 0 auto

      img {
        width: 620px
        height: 86px
      }
    }

    .service-wrap {
      height: 518px
      padding 40px 0

      .item_wrap {
        display flex
        justify-content: center

        .item {
          width: 220px
          height: 245px
          margin-right 30px
          padding-top 80px
          border-radius 10px
          position relative

          .item_top {
            width: 220px
            height: 245px
            padding-top: 40px
            position relative
            background-color #ffffff
            border-radius 10px
            .top_a1{
              width: 64px
              height: 64px
              margin: 0 auto
              background url("./images/consult.png")no-repeat
              background-size 64px 64px
            }
            .top_a2{
              width: 64px
              height: 64px
              margin: 0 auto
              background url("./images/design.png")no-repeat
              background-size 64px 64px
            }

            .top_a3{
              width: 64px
              height: 64px
              margin: 0 auto
              background url("./images/research.png")no-repeat
              background-size 64px 64px
            }

            .top_a4{
              width: 64px
              height: 64px
              margin: 0 auto
              background url("./images/operation.png")no-repeat
              background-size 64px 64px
            }

            .top_a5{
              width: 64px
              height: 64px
              margin: 0 auto
              background url("./images/generalize.png")no-repeat
              background-size 64px 64px
            }

            .top_a6{
              width: 64px
              height: 64px
              margin: 0 auto
              background url("./images/outsourcing.png")no-repeat
              background-size 64px 64px
            }


            .top_b{
              margin 16px 0 18px 0
              font-size:20px;
              font-weight:bold;
              color:rgba(34,34,34,1);
            }
            .top_c,.top_d {
              font-size:14px
              font-weight:400
              line-height: 30px
              color:rgba(102,102,102,1)
            }
            .corner {
              width: 10px
              height: 10px
              background-color #ffffff
              transform translateX(-50%) rotate(45deg)
              position absolute
              bottom -4px
              left 50%
            }
          }

          .bottom_wrap {
            padding-top: 20px

            .item_bottom {
              width: 23px
              height: 20px
              margin 0 auto
              background-color #f1f2f3
              border-radius 50%
              padding-top 3px

              .bottom_inside {
                width: 16px
                height: 16px
                background-color red
                border-radius 50%
                margin 0 auto
              }
            }
          }

        }

        .uneven {
          margin-top: 90px
        }
      }
    }
  }

  .scheme {
    padding-top: 76px
    .scheme_title {
      width: 420px
      height: 105px
      margin 0 auto

      img {
        width: 420px
        height: 105px
      }
    }

    .scheme_wrap {
      padding 20px 520px
      display flex

      .scheme_lift {
        flex 1
        height 314px
        display flex
        flex-direction: column
        padding-right 10px

        .lift_time {
          width: 283px
          height: 314px
          align-self: flex-end
          border-radius 20px
          overflow hidden

          img {
            width: 283px
            height: 314px
            border-radius 20px
            transition: all 1s ease 0s
          }

          img:hover {
            transform scale(2)
          }
        }
      }

      .scheme_right {
        flex 10

        .item_wrap {
          text-align left

          .item {
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

            img:hover {
              transform scale(2)
            }
          }
        }

      }
    }
  }

  .join {
    background-color goldenrod
    padding-top: 34px
    padding-bottom: 20px

    .join_title {
      width: 493px
      height: 86px
      margin 0 auto

      img {
        width: 493px
        height: 86px
      }
    }

    .item_wrap {
      padding 0 500px
      text-align left
      margin: 20px 0

      .item {
        width: 235px
        height: 200px
        display inline-block
        margin-right 10px
        text-align center

        .item_top {
          width: 231px
          height: 123px
          margin 20px auto
          line-height 123px
          border-radius 5px
          color: #fe4716
          background-color rgba(255, 255, 255, 1)
          font-size: 66px
        }

        .item_bottom {
          font-size: 24px
          color: #ffffff
          font-weight 400
        }
      }
    }
  }

  .message {
    padding-top 50px

    .message_title {
      width: 420px
      height: 88px
      margin 0 auto

      img {
        width: 420px
        height: 88px
      }
    }

    .message_wrap {
      width: 1800px
      padding 50px 220px

      .message_item {
        display inline-block
        margin-right 30px

        .item_img {
          width: 380px
          height: 234px
          border-radius 8px
          overflow hidden

          img {
            width: 380px
            height: 234px
          }
        }

        .text_wrap {
          padding-bottom 20px
          border-top 2px dashed #B8B8B8

          .text_title {
            display flex
            justify-content: space-between
            padding-top 30px
            padding-bottom 13px
            font-size: 20px
            color: #333333
            font-weight: bold
          }

          .text_bottom {
            font-size: 18px
            color: #666666
            font-weight: 400
            text-align left
          }
        }

        .border0 {
          border 0
        }
      }
    }
  }

  .demand {
    padding 10px 200px

    .demand_title {
      font-size: 40px
      font-weight 500
    }

    .demand_contact {
      padding-left: 300px
      text-align left

      .contact {
        & div {
          display inline-block
        }

        .name {
          margin-top 20px
          margin-right 80px

          & input {
            width: 450px
            height: 60px
            outline: none
            font-size: 20px
            border 1px solid #7e8c8d
            border-radius 10px
            padding-left 10px
          }
        }

        .phone {
          margin-top 20px

          & input {
            width: 450px
            height: 60px
            outline: none
            font-size: 20px
            border 1px solid #7e8c8d
            border-radius 10px
            padding-left 10px
          }
        }
      }

      .textarea {
        margin-top 20px
        text-align top
        position relative

        div {
          display inline-block
          position absolute
          top: 10px
          left 0
        }

        .text_content {
          width: 1110px
          height: 215px
          margin-left 110px
          border-radius 10px
          outline: none
          padding 5px
        }
      }

      .footer {
        .verification_wrap {
          display inline-block
          margin-top: 20px

          input {
            width: 380px
            height: 60px
            padding 0 10px
            margin-left: 10px
            margin-right 20px
            border 1px solid #7e8c8d
            border-radius 10px
            outline: none
          }
        }

        .verification {
          display inline-block
          width: 180px
          height: 60px
          color #fff
          cursor pointer
          background-color red
          border-radius 10px
          margin-right 155px
          margin-left 20px
          line-height: 60px
          font-size: 26px

          .code {
            margin 0 14px
            display inline-block
          }

          .code:nth-child(1) {
            transform: rotate(-53deg)
          }

          .code:nth-child(2) {
            transform: rotate(45deg)
          }

          .code:nth-child(3) {
            transform: rotate(-25deg)
          }

          .code:nth-child(4) {
            transform: rotate(72deg)
          }
        }

        .submit {
          display inline-block
          width: 220px
          height: 60px
          color #fff
          background-color red
          border-radius 10px
          line-height: 60px
          font-size: 30px
          text-align center
        }
      }

    }

  }
</style>
