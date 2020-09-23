<!--  -->
<template>
  <!--搜索-->
  <section class="search">
    <HeaderTop title="你好">
      <template v-slot:left>內容</template>
    </HeaderTop>
  </section>
</template>

<script>
// import HeaderTop from "@/components/HeaderTop/HeaderTop.vue";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  components: {
    HeaderTop,
  },
};
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

&.search {
  width: 100%;

  .search_form {
    clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid $dColor;
        font-size: 16px;
        color: #fff;
        background-color: $dColor;
      }
    }
  }
}
</style>