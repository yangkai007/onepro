<!--  -->
<template>
 <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px" v-for="(item,index) in shoplist" :key="index"
          @click="$router.push('/shop')">
            <a>
              <div class="shop_left">
                <img class="shop_img" :src="baseImgUrl+index+'.jpg'"  />
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">{{ item.name }}</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <!-- 星星组件 -->
                      <Starxx :rating='item.rating'></Starxx>

                    <div class="rating_section">{{item.rating}}</div>
                    <div class="order_section">月售106单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">
                      {{item.delivery_mode.text}}</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥{{ item.piecewise_agent_fee.tips }}</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
      
        </ul>
      </div>

      <!-- {{shoplist}} -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
// 导入子 星星组件
import Starxx from "../../components/Starsxx/Starxx";

export default {
     computed:{//  2从store取出数据
      ...mapState(['shoplist']),//address数据可以用了  从store去除存储好的数据  映射 this.address 为 store.state.address
  },
  data () {
      return {
        baseImgUrl: 'https://argice.github.io/assets/'
      }
    },
  components:{
    // 注册组件
    Starxx //星星组件
  }
}
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

.msite_shop_list {
  top-border-1px(#e4e4e4);
  margin-top: 10px;
  background: #fff;

  .shop_header {
    padding: 10px 10px 0;

    .shop_icon {
      margin-left: 5px;
      color: #999;
    }

    .shop_header_title {
      color: #999;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .shop_container {
    margin-bottom: 50px;

    .shop_list {
      .shop_li {
        bottom-border-1px(#f1f1f1);
        width: 100%;

        >a {
          clearFix();
          display: block;
          box-sizing: border-box;
          padding: 15px 8px;
          width: 100%;

          .shop_left {
            float: left;
            box-sizing: border-box;
            width: 23%;
            height: 50px;
            padding-right: 10px;
            border-radius: 6px;

            .shop_img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }

          .shop_right {
            float: right;
            width: 77%;

            .shop_detail_header {
              clearFix();
              width: 100%;

              .shop_title {
                float: left;
                width: 200px;
                color: #333;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;

                &::before {
                  content: '品牌';
                  display: inline-block;
                  font-size: 11px;
                  line-height: 11px;
                  color: #333;
                  background-color: #ffd930;
                  padding: 2px 2px;
                  border-radius: 2px;
                  margin-right: 5px;
                }
              }

              .shop_detail_ul {
                float: right;
                margin-top: 3px;

                .supports {
                  float: left;
                  font-size: 10px;
                  color: #999;
                  border: 1px solid #f1f1f1;
                  padding: 0 2px;
                  border-radius: 2px;
                }
              }
            }

            .shop_rating_order {
              clearFix();
              width: 100%;
              margin-top: 18px;
              margin-bottom: 8px;

              .shop_rating_order_left {
                float: left;
                color: #ff9a0d;

              

                .rating_section {
                  float: left;
                  font-size: 10px;
                  color: #ff6000;
                  margin-left: 4px;
                }

                .order_section {
                  float: left;
                  font-size: 10px;
                  color: #666;
                  transform: scale(0.8);
                }
              }

              .shop_rating_order_right {
                float: right;
                font-size: 0;

                .delivery_style {
                  transform-origin: 35px 0;
                  transform: scale(0.7);
                  display: inline-block;
                  font-size: 12px;
                  padding: 1px;
                  border-radius: 2px;
                }

                .delivery_left {
                  color: #fff;
                  margin-right: -10px;
                  background-color: $dColor;
                  border: 1px solid $dColor;
                }

                .delivery_right {
                  color: $dColor;
                  border: 1px solid $dColor;
                }
              }
            }

            .shop_distance {
              clearFix();
              width: 100%;
              font-size: 12px;

              .shop_delivery_msg {
                float: left;
                transform-origin: 0;
                transform: scale(0.9);
                color: #666;
              }

              .segmentation {
                color: #ccc;
              }
            }
          }
        }
      }
    }
  }
}
</style>