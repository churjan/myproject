<template>
  <div>
    <div class="row-view" v-for="(item, index) in list" :key="index">
      <div class="col-view col40" v-if="item.pcUrl" @click="onJump(item.pcUrl)">
        <div class="cover-view">
          <div
            class="cover"
            :style="`background-image:url(${require('@/assets/images/screenshot' +
              imgPath +
              item.pcImg)})`"
          ></div>
          <div class="mask-view">
            <div class="enter-btn">进入项目</div>
          </div>
        </div>
        <div class="title-view">{{ item.title }}</div>
      </div>
      <div
        class="col-view col30"
        v-if="item.mUrl"
        @click="onOpen(item.title, item.mUrl)"
      >
        <div class="cover-view">
          <div
            class="cover"
            :style="`background-image:url(${require('@/assets/images/screenshot' +
              imgPath +
              item.mImg)})`"
          ></div>
          <div class="mask-view">
            <div class="enter-btn">进入项目</div>
          </div>
        </div>
        <div class="title-view">{{ item.title }}</div>
      </div>
    </div>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      width="350px"
      :before-close="onClose"
    >
      <div class="flex-view">
        <qriously :value="url" :size="200" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { imgPath, list } from '@/configs/zhengyin.json';
console.log(imgPath, list);
export default {
  data() {
    return {
      imgPath,
      list,
      title: '',
      url: '',
      visible: false,
    };
  },
  methods: {
    onJump(url) {
      window.open(url);
    },
    onOpen(title, url) {
      this.visible = true;
      this.title = title;
      this.url = url;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.row-view {
  margin: 40px 0;
  display: flex;
  justify-content: space-evenly;
}
.col40 {
  width: 40vw;
}
.col30 {
  width: 30vw;
}
.cover-view {
  height: 30vw;
  overflow: hidden;
  position: relative;
  .cover {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.5s;
  }
}

.mask-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .enter-btn {
    border-radius: 50px;
    text-align: center;
    background-color: #846af8;
    color: #fff;
    padding: 15px 20px;
    transition: 0.5s;
    &:hover {
      opacity: 0.9;
    }
  }
}
.title-view {
  background-color: #f3f3f3;
  text-align: center;
  font-size: 18px;
  padding: 15px 0;
}
.col-view:hover {
  cursor: pointer;
  .mask-view {
    opacity: 1;
  }
  .cover {
    transform: scale(1.1);
  }
  .title-view {
    color: #846af8;
  }
}
</style>
