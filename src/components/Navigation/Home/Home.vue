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
      <div class="case_wrap" >
        <div class="case_item" v-for="(item, index) in caseList" @mouseover="mouseover(index)" @mouseout="mouseout(index)">
          <div class="case_top"></div>
          <div class="case_name">滴答小镇</div>
          <div class="case_mark" v-show="item.isShow">
            滴答小镇
          </div>
        </div>
      </div>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "Home",
    data(){
      return {
        swiperImg:[
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
        caseList:[
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
          {
            isShow:false
          },
        ]
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    methods:{
      mouseover(index){
        this.$set(this.caseList[index],"isShow",true)
      },
      mouseout(index){
        this.$set(this.caseList[index],"isShow",false)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper_wrap{
  .img_wrap{
    height: 800px;
    overflow: hidden;
    img {
      width: 100%
      height: 800px;
    }
  }
}
  .case{
    padding: 50px 180px 0 200px
    .case_title{
      font-size:40px
      font-weight 500
    }
    .case_wrap{
      height: 900px
      padding 40px 50px
      text-align left
      .case_item{
        display inline-block
        width: 300px
        height: 200px
        position relative
        margin-left 20px
        margin-bottom 20px
        text-align center
        .case_top{
          height: 150px
          background-color black
        }
        .case_name{
          height: 50px
          line-height: 50px
        }
        .case_mark{
          width: 300px
          height: 200px
          background-color rgba(255,35,67,.5)
          position absolute
          top: 0
          z-index 2

        }
      }
    }
  }
</style>
