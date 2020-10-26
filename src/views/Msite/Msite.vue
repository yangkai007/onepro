<!--  -->
<template>
  <div>
    <!-- 头部样式插槽 -->
    <HeaderTop :title="address.name">
      <template v-slot:left>
        <span class="header_search">
          <i class="iconfont icon-bianji"></i>
        </span>
      </template>
      <template v-slot:right>
        <span class="header_login">
         
        </span>
      </template>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav">
      <!-- Swiper轮播 -->
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(categorys, index) in categorysArr" :key="index">
          <a
            href="javascript:"
            class="link_to_food"
            v-for="(item, index) in categorys"
            :key="index"
          >
            <div class="food_container">
              <img :src="baseImageUrl + item.image_url" />
            </div>
            <span>{{ item.title }}</span>
          </a>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </nav>
    <!--首页附近商家-->
    <Shoping></Shoping>
    
    <!-- <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/1.jpg" />
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">3.6</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">美团专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/2.jpg" />
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">4.1</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">美团专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/3.jpg" />
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">3.2</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">美团专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/4.jpg" />
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">3.6</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">美团专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
// 引入头部
import HeaderTop from "../../components/HeaderTop/HeaderTop";
//引入商品
import Shoping from "../../components/Shoping/Shoping";

// 导入轮播 Swiper
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css"; // Package.json中 swiper版本6.0之后 引入这个
//1.导入mapState 辅助函数
import { mapState } from "vuex";
export default {
  components: {
    HeaderTop, //注册组件
    Shoping, //注册商品组件
    // 注册轮播组件
    Swiper,
    SwiperSlide,
  },
  //配置轮播信息
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        }, //配置小圆点
        // 额外配置
        loop: true,
      },
      // 引入图片需要的链接
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  directives: {
    //自定义指令
    swiper: directive,
  },
  computed: {
    //2从store取出数据
    ...mapState(["address","categorys"]), //address数据可以用了  从store去除存储好的数据  映射 this.address 为 store.state.address
    // ...mapState([]),
  
  //   async mounted(){
  // this.$store.dispatch('')
  //   },
  categorysArr() {
    let arr = [];
    // 遍历categorysArr16条
    // 添加到二维数组
    let minarr = [];
    this.categorys.forEach((element) => {
      // 如果小数组满八个 放进大数组
      if (minarr.length == 8) {
        minarr = [];
      }
      if (minarr.length == 0) {
        arr.push(minarr);
      }
      minarr.push(element);
    });
    console.log(1);
    return arr;
  },
  },
};
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

.msite_nav {
  bottom-border-1px(#e4e4e4);
  margin-top: 45px;
  height: 200px;
  background: #fff;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        .link_to_food {
          width: 25%;

          .food_container {
            display: block;
            width: 100%;
            text-align: center;
            padding-bottom: 10px;
            font-size: 0;

            img {
              display: inline-block;
              width: 50px;
              height: 50px;
            }
          }

          span {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }

    .swiper-pagination {
      >span.swiper-pagination-bullet-active {
        background: $dColor;
      }
    }
  }
}
</style>