<template>
  <div>
    <div class="row-view" v-for="(item, index) in list" :key="index">
      <div class="col-view col40" v-if="item.pcUrl" @click="onJump(item.pcUrl)">
        <div class="cover-view">
          <div
            class="cover"
            :style="`background-image:url(${
              publicPath + imgPath + item.pcImg
            })`"
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
            :style="`background-image:url(${publicPath + imgPath + item.mImg})`"
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
      :before-close="handleClose"
    >
      <div class="flex-view">
        <qriously :value="url" :size="200" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '星图LIVESHOW',
          pcImg: 'liveshow_pc.png',
          pcUrl: 'http://liveshow.ixingtu.com',
          mImg: 'liveshow_m.png',
          mUrl: 'http://liveshow.ixingtu.com',
        },
        {
          title: '梅洛迪 Melody',
          pcImg: 'melody_pc.png',
          pcUrl: 'http://melody.ixingtu.com',
          mImg: 'melody_m.png',
          mUrl: 'http://melody.ixingtu.com',
        },
        {
          title: '中国璀璨新偶像',
          pcImg: 'ccni_pc.png',
          pcUrl: 'http://ccni.ixingtu.com',
          mImg: 'ccni_m.png',
          mUrl: 'http://ccni.ixingtu.com',
        },
        {
          title: '星途年度金曲大赏2017',
          pcImg: 'goldenVoice2017_pc.png',
          pcUrl: 'http://center.ixingtu.com/page/goldenVoice2017/index.html',
          mImg: 'goldenVoice2017_m.png',
          mUrl: 'http://center.ixingtu.com/page/goldenVoice2017/index.html',
        },
        {
          title: '入驻成为音乐人',
          mImg: 'musician_m.jpeg',
          mUrl: 'http://m.ixingtu.com/musician/',
        },
        {
          title: '星途,数字发行推广服务',
          mImg: 'juhe_m.png',
          mUrl: 'https://m.ixingtu.com/juhe/',
        },
        {
          title: '申请版权备案',
          mImg: 'copyright_m.jpeg',
          mUrl: 'http://m.ixingtu.com/appH5/copyright/copyrightfiling',
        },
        {
          title: '麦王争霸—全球歌曲征集',
          pcImg: 'mickingS_pc.png',
          pcUrl: 'http://center.ixingtu.com/page/mickingS/index.html',
          mImg: 'mickingS_m.png',
          mUrl: 'http://center.ixingtu.com/page/mickingS/index.html',
        },
        {
          title: '2017周柏豪巡回演唱会-广州站',
          mImg: 'zhoubohao_m.png',
          mUrl: 'https://m.ixingtu.com/p/zhoubohao2.html',
        },
        {
          title: '母亲节&父亲节歌曲征集',
          pcImg: 'singLove_pc.png',
          pcUrl: 'http://center.ixingtu.com/page/singLove/',
          mImg: 'singLove_m.png',
          mUrl: 'http://center.ixingtu.com/page/singLove/',
        },
        {
          title: '有人传你一张小纸条',
          mImg: 'activity520_m.jpg',
          mUrl: 'http://m.ixingtu.com/p/activity520.html?source=1',
        },
        {
          title: '今天我要带爸爸上头条',
          mImg: 'fatherDay_m.jpeg',
          mUrl: 'https://m.ixingtu.com/p/fatherDay.html?makePage=&from=singlemessage&isappinstalled=0',
        },
        {
          title: '星途官网',
          pcImg: 'xingtu_pc.png',
          pcUrl: 'http://www.ixingtu.com',
        },
      ],
      imgPath: 'screenshot/zhengyin/',
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
    handleClose() {
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
