<template>
  <v-container class="container bookshelfContainer">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <h2>
      預約取書
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-icon icon="mdi-help-circle" size="x-small" v-bind="props"></v-icon>
        </template>
        <v-card class="pa-2 helpCard">
          <v-card-text>
            <div class="title">操作說明</div>
            <ul>
              <li>雙擊書格以切換「可使用」與「不可用」書格狀態。</li>
              <li>「停用」與「使用中」不可變更書格狀態。</li>
              <li>編輯完書格狀態後，點選「變更書格狀態」即保存設定。</li>
            </ul>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="bg-primary" color="white">關閉</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </h2>

    <!-- 待取書架列表 start -->
    <v-row class="">
      <!-- 開始上架、機器人上架 按鈕列 start -->
      <v-col cols="12" class="d-flex justify-end btnGrp">
        <v-btn variant="flat" color="secondary" class="btnWidth"
          >開始上架</v-btn
        >
        <v-btn color="primary" variant="flat"> 機器人上架 </v-btn>
      </v-col>
      <!-- 開始上架、機器人上架 按鈕列 end -->
      <!-- alert start -->
      <v-col v-if="alertHandle" cols="12" class="d-flex justify-end alert">
        <div class="alertCard">
          <v-icon icon="mdi-alert"></v-icon>
          <span class="text">上架作業進行中，暫時無法操作</span>
          <v-btn
            icon="mdi-close"
            @click="alertHandle = !alertHandle"
            size="small"
            variant="text"
          ></v-btn>
        </div>
      </v-col>
      <!-- alert end -->
      <!-- <v-col cols="12"></v-col> -->
      <div class="bookshelfStatus">
        <ul>
          <li class="available">可使用</li>
          <li class="use">使用中</li>
          <li class="useless">不可用</li>
          <li class="stop">停用</li>
        </ul>
      </div>

      <v-col class="d-flex pageLinkBtn">
        <v-card>
          <v-tabs show-arrows>
            <v-tab :ripple="false" key="待取書架Ａ" value="待取書架Ａ">
              待取書架Ａ
            </v-tab>
            <v-tab :ripple="false" key="待取書架Ｂ" value="待取書架Ｂ">
              待取書架Ｂ
            </v-tab>
            <v-tab :ripple="false" key="待取書架Ｃ" value="待取書架Ｃ">
              待取書架Ｃ
            </v-tab>
            <v-tab :ripple="false" key="待取書架Ｄ" value="待取書架Ｄ">
              待取書架Ｄ
            </v-tab>
            <v-tab :ripple="false" v-for="i in 12" :key="i" :value="'tab-' + i">
              待取書架{{ i }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
    <!-- 待取書架列表 end -->
    <!-- <div class="scrollContent"> -->
    <!-- 書架按鈕列 start -->
    <v-row class="scrollContent">
      <v-col>
        <!-- 增加 has-no-allowed class切換 cursor樣式 -->
        <v-card class="bookshelfCard has-no-allowed" variant="text">
          <!-- 切換按鈕class .bg-available /.bg-use /.bg-useless/.bg-stop -->
          <div class="grp">
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <v-btn class="bg-available">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <v-btn class="bg-use">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 8" :key="i">
                <v-btn class="bg-useless">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 6" :key="i">
                <!-- 增加 disabled 標籤 start-->
                <v-btn class="bg-stop">
                  {{ 10 + i }}
                  <!-- {{ 100 + j * 10 + i }} -->
                </v-btn>
                <!-- 增加 disabled 標籤 end-->
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 4" :key="i">
                <v-btn class="bg-available">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <!-- test -->
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <v-btn class="bg-available">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <v-btn class="bg-use">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <v-btn class="bg-useless">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <!-- 增加 disabled 標籤 start-->
                <v-btn class="bg-stop">
                  {{ 100 + j * 10 + i }}
                </v-btn>
                <!-- 增加 disabled 標籤 end-->
              </template>
            </div>
            <div v-for="j in 1" :key="j" class="item">
              <template v-for="i in 14" :key="i">
                <v-btn class="bg-available">
                  {{ 100 + j * 10 + i }}
                </v-btn>
              </template>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center mt-2 btnGrp">
        <v-btn variant="flat" color="secondary" class="btnWidth">取消</v-btn>
        <v-btn color="primary" variant="flat"> 變更書格狀態 </v-btn>
      </v-col>
    </v-row>
    <!-- 書架按鈕列 end -->
    <!-- </div> -->
    <!-- 書架table start -->
    <!-- <v-row>
      <v-col class="bookshelfTable">
        <dataTableServer />
      </v-col>
    </v-row> -->

    <!-- 書架table end -->
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";
export default {
  data: () => ({
    alertHandle: true,
  }),
  methods: {},
  mounted() {},
  components: {
    dataTableServer,
  },
};
</script>
<style scoped></style>
