<template>
  <div>
    <el-row type="flex" class="menu-view" justify="center">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeItem"
        mode="horizontal"
        @select="onSelect"
      >
        <el-menu-item index="geely"
          >浙江吉利控股集团汽车销售有限公司</el-menu-item
        >
        <el-menu-item index="zhengyin">广州市正印网络科技有限公司</el-menu-item>
      </el-menu>
    </el-row>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInLeft animate__fast"
      leave-active-class="animate__animated animate__fadeOutRight animate__fast"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: null,
    };
  },

  watch: {
    $route: {
      handler() {
        const str = this.$route.path;
        this.activeItem = str.match(/\w+$/)[0];
      },
      immediate: true,
    },
  },
  methods: {
    onSelect(val) {
      //相同路径不跳转
      if (val === this.activeItem) return;
      this.$router.push({
        path: `/${val}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-view {
  background-color: #545c64;
}
</style>
