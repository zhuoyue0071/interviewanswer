<template>
  <div>
    <el-container class="main">
      <el-aside class="leftInfo">
        <div class="dataInfo">
          <div class="box">
            <div class="title">
              <div class="tag"></div>
              <span class="name">预警信息</span>
            </div>
            <div class="infos">
              <div class="content">
                <div class="tagName">报警级别：</div>
                <span class="dangerous">{{ warningInfo.level }}</span>
              </div>
              <div class="content">
                <div class="tagName">起始时间：</div>
                {{ warningInfo.time }}
              </div>
              <div class="content">
                <div class="tagName">原因：</div>
                {{ warningInfo.cause }}
              </div>
              <div class="content">
                <div class="tagName">报警区域：</div>
                {{ warningInfo.area }}
              </div>
            </div>
          </div>
          <div class="box">
            <div class="title">
              <div class="tag"></div>
              <span class="name">设备信息</span>
            </div>
            <div class="infos">
              <div class="content">
                <div class="tagName">名称：</div>
                {{ deviceInfo.name }}
              </div>
              <div class="content">
                <div class="tagName">型号：</div>
                {{ deviceInfo.type }}
              </div>
              <div class="content">
                <div class="tagName">通道号：</div>
                {{ deviceInfo.channelNo }}
              </div>
              <div class="content">
                <div class="tagName">位置：</div>
                {{ deviceInfo.pos }}
              </div>
              <div class="content">
                <div class="tagName">监控方式：</div>
                {{ deviceInfo.pattern }}
              </div>
            </div>
          </div>
          <div class="box">
            <div class="title">
              <div class="tag"></div>
              <span class="name">应急处理</span>
            </div>
            <div class="infos">
              <div class="content">
                <div class="tagName">应急联系人：</div>
                {{ emergencyInfo.contact }}
              </div>
              <div class="content">
                <div class="tagName">联系方式：</div>
                {{ emergencyInfo.phone }}
              </div>
              <div class="content">
                <div class="tagName">所属部门：</div>
                {{ emergencyInfo.dep }}
              </div>
              <div class="content">
                <div class="tagName">服务：</div>
                {{ emergencyInfo.service }}
              </div>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="cameraOperation">
          <el-table
            :data="camera"
            :header-cell-style="myStyle"
            style="width: 100%"
            border
          >
            <el-table-column prop="name" label="区域1"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="ops" label="操作">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.ops"
                  active-color="rgb(101, 135, 230)"
                  inactive-color="grey"
                >
                </el-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-aside>
      <el-main class="rightScreen">
        <div class="mainScreen"></div>
        <div class="subScreen"></div>
        <div class="subScreen"></div>
        <div class="subScreen"></div>
        <div class="subScreen"></div>
        <div class="subScreen"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const warningInfo = {
  time: "2018/08/02 11:00",
  level: "高级",
  cause: "红外感应",
  area: "区域12",
};
const deviceInfo = {
  name: "摄像头12",
  type: "TCL007",
  channelNo: 123456789,
  pos: "区域12",
  pattern: "固定点监控",
};
const emergencyInfo = {
  contact: "摄像头12",
  phone: "TCL007",
  dep: 123456789,
  service: "区域12",
};
const camera = [
  { name: "摄像头1", status: "播放中", ops: true },
  { name: "摄像头1", status: "播放中", ops: true },
  { name: "摄像头1", status: "播放中", ops: true },
  { name: "摄像头1", status: "播放中", ops: true },
  { name: "摄像头1", status: "播放中", ops: true },
  { name: "摄像头1", status: "播放中", ops: true },
  { name: "摄像头1", status: "播放中", ops: false },
];
export default {
  name: "Three",
  data() {
    return {
      warningInfo,
      deviceInfo,
      emergencyInfo,
      camera,
      myStyle: {
        color: "rgb(101, 135, 230)",
        "background-color": "rgb(181, 222, 241)",
      },
    };
  },
};
</script>

<style  lang="scss" scoped>
.main {
  width: 110rem;
  height: 56rem;
  margin: 0 auto;
  //   display: flex;
  background-color: rgb(240, 243, 252);

  .leftInfo {
    width: 350px !important;
    background-color: #fff;
    border: 1px solid rgb(181, 222, 241);
    font-size: 12px;
    .dataInfo {
      width: 80%;
      margin: 0 auto;
      text-align: left;
      .box {
        margin-top: 1rem;
        .title {
          color: rgb(101, 135, 230);
          .tag {
            width: 1rem;
            height: 1rem;
            background-color: rgb(101, 135, 230);
            display: inline-block;
            margin-right: 0.5rem;
            margin-top: -0.5rem;
            vertical-align: text-bottom;
          }
          .name {
            font-weight: 500;
            font-size: 14px;
          }
        }
        .infos {
          margin-left: 1.5rem;
          margin-top: 0.5rem;
          .content {
            display: inline-block;
            margin-top: 0.5rem;
            .tagName {
              width: 5.5rem;
              display: inline-block;
            }
          }
        }
      }
    }
    .cameraOperation {
      padding: 0.5rem;
    }
  }
  .rightScreen {
    .mainScreen {
      width: 55rem;
      height: 31.25rem;
      background: rgb(177, 177, 177);
      float: left;
      position: relative;
      top: 0.5rem;
      left: 1.25rem;
      margin-right: 1rem;
    }
    .subScreen {
      width: 27rem;
      height: 15rem;
      background: rgb(177, 177, 177);
      margin: 0.5rem;
      display: inline-block;
    }
  }
}
.dangerous {
  color: red;
}
</style>