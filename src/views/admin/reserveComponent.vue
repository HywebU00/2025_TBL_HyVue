<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>
    <h2>預約取書</h2>
    <!-- 待取書架列表 start -->
    <v-row>
      <v-col cols="12"></v-col>
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
    <!-- 書架按鈕列 start -->
    <v-row>
      <v-col>
        <v-card class="bookshelfCard" variant="text">
          <!-- 切換按鈕class .bg-available /.bg-use /.bg-useless/.bg-stop -->
          <div class="">
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
                <v-btn class="bg-stop">
                  {{ 100 + j * 10 + i }}
                </v-btn>
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
      <v-col cols="12" class="d-flex justify-center mt-2 btnGrp">
        <v-btn variant="flat" color="secondary" class="btnWidth">取消</v-btn>
        <v-btn color="primary" variant="flat"> 變更書格狀態 </v-btn>
      </v-col>
    </v-row>
    <!-- 書架按鈕列 end -->
    <!-- 書架table start -->
    <v-row>
      <v-col class="bookshelfTable">
        <dataTableServer />
      </v-col>
    </v-row>
    <!-- 書架table end -->
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
  components: {
    dataTableServer,
  },
};
</script>
<style scoped></style>
