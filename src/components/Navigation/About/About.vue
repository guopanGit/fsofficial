<template>
  <div>
    <div class="content">
      <div class="About_top"></div>
      <div class="About_item">
        <div class="About_title">
          <div class="title_name">联系我们</div>
          <div class="icon_wrap">
            <div class="top_wrap">
              <div class="icon_top"></div>
            </div>
            <div class="icon_bottom"></div>
          </div>
        </div>
        <div class="map_wrap">
          <baidu-map v-bind:style="mapStyle" class="bm-view" ak="Ym7eQ6BTYKpIvGAPzEkq0sTWFcANBaun" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
            <bm-view style="width: 100%; height:600px;"></bm-view>
            <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            </bm-marker>
            <bm-local-search :keyword="keyword" :auto-viewport="true" style="width:0px;height:0px;overflow: hidden;"></bm-local-search>
          </baidu-map>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>

</template>

<script>
  import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch, BmMarker} from 'vue-baidu-map'
  export default {
    name: "About",
    data: function () {
      return {
        showMapComponent: this.value,
        keyword: '',
        mapStyle: {
          width: '100%',
          height: this.mapHeight + 'px'
        },
        center: {lng: 116.299155, lat: 39.953506},
        zoom: 17
      }
    },
    components: {
      BaiduMap,
      BmControl,
      BmView,
      BmAutoComplete,
      BmLocalSearch,
      BmMarker
    },
    watch: {
      value: function (currentValue) {
        this.showMapComponent = currentValue
        if (currentValue) {
          this.keyword = ''
        }
      }
    },
    methods: {

    }
  }

</script>

<style scoped lang="stylus">
  .content{
    .About_top{
      height 300px
    }
    .About_item{
      .About_title{
        position relative
        .title_name{
          font-size: 32px
          font-weight 400
        }
        .icon_wrap{
          width: 200px
          margin auto
          height: 100px
          padding-top 50px
          .top_wrap{
            width: 60px
            height 60px
            position absolute
            top 70px
            left 50%
            transform: translateX(-50%)
            background-color white
            padding-top 15px
            padding-left:25px
            .icon_top{
              margin-left 15px
              transform: translateX(-50%) rotate(45deg)
              width: 30px
              height 30px
              outline none
              background-color #7e8c8d
              z-index 2
            }
          }
          .icon_bottom{
            margin-top 20px
            height: 2px
            background-color #7e8c8d
          }
        }
      }
      .map_wrap{
        padding 0 300px
        height 600px
        overflow hidden
      }
    }
  }
  .footer{
    height 400px
    padding-top 100px
  }

</style>
