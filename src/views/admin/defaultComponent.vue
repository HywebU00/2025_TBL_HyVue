<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>

    <h2>活動管理</h2>
    <!-- 篩選器 start -->
    <v-form class="mb-3">
      <v-row class="formGrp filterList">
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部行政區"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部村里"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="formGrp filterList">
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部行政區"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部村里"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部行政區"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部村里"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部行政區"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" lg="6" class="pt-0">
          <v-select
            label="全部村里"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="formGrp filterList">
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="全部行政區"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="全部村里"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="所有活動類型"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="所有規則"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="所有審核狀態"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="效期(2)"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select> </v-col
      ></v-row>
      <!-- 篩選器 end -->
      <!-- 篩選器2 start -->
      <v-row class="formGrp filterList">
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="層級"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="行政區"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="村里"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="4" md="4" lg="2" class="pt-0">
          <v-select
            label="角色"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col class="pt-0">
          <v-text-field
            label="姓名"
            density="compact"
            single-line
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- 篩選器2 end -->
      <!-- 篩選器3 start -->
      <v-row class="formGrp filterList">
        <v-col cols="6" sm="6" md="6" lg="2" class="pt-0">
          <v-select
            label="歷史活動管理機制"
            single-line
            density="compact"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4" class="pt-0 mx-lg-auto pr-3">
          <div class="d-flex align-center">
            <v-select
              class="mx-2"
              label="行政區"
              single-line
              density="compact"
              hide-details="auto"
              :items="['選項ㄧ', '選項二', '選項三']"
            ></v-select>
            <v-select
              label="村里"
              single-line
              density="compact"
              hide-details="auto"
              :items="['選項ㄧ', '選項二', '選項三']"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4" class="pt-0">
          <div class="d-flex align-center mr-2 mr-sm-0">
            <label class="px-2 mb-0" for="">From</label>
            <datepickerModalVue> </datepickerModalVue>
            <label class="px-2 mb-0" for="">To</label>
            <datepickerModalVue> </datepickerModalVue>
          </div>
        </v-col>
      </v-row>
      <!-- 篩選器3 end -->
      <!-- 按鈕列 start -->
      <v-row>
        <!-- 搜尋列 start -->
        <v-col cols="auto" class="py-0 d-flex align-center formGrp searchList">
          <v-text-field
            label="標題"
            density="compact"
            single-line
            hide-details="auto"
          ></v-text-field>
          <v-btn variant="flat" class="btn">查詢</v-btn>
        </v-col>
        <!-- 搜尋列 end -->
        <v-col class="py-0 d-flex align-center" cols="auto">
          <v-btn variant="flat" color="secondary" class="mr-2">
            刪除已選取帳號(0)</v-btn
          >
        </v-col>
        <v-col class="py-0 ml-auto btnList" cols="auto">
          <div class="justify-end d-flex flex-wrap">
            <v-btn variant="flat" class="mx-1 my-1"> 下載里長名單範本</v-btn>
            <v-btn variant="flat" class="mx-1 my-1">上傳里長名單</v-btn>
            <v-dialog class="dialogCard" max-width="500" scrollable>
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn variant="flat" class="mx-1 my-1" v-bind="activatorProps"
                  >新增帳號</v-btn
                >
              </template>
              <template v-slot:default="{ isActive }">
                <v-card title="新增帳號">
                  <v-card-text class="px-4">
                    <div>
                      <v-form>
                        <v-container>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >驗證方式
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                                error-messages="錯誤錯誤錯錯誤"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >帳號1
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-text-field
                                placeholder="文字標準表單"
                                density="compact"
                                single-line
                                details="文字標準表單"
                                error-messages="錯誤錯誤錯錯誤"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for="">
                                姓名<abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-text-field
                                placeholder="文字標準表單"
                                density="compact"
                                single-line
                                hide-details="auto"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >層級
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >角色設定
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >行政區
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                      <h4 class="text-primary subtitle my-3 ml-3">
                        -新增發放-
                      </h4>
                      <v-form>
                        <v-container>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >活動日期
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <datepickerModalVue> </datepickerModalVue>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >標題
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-text-field
                                placeholder="文字標準表單"
                                density="compact"
                                single-line
                                hide-details="auto"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >規則
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col
                              class="pb-2 justify-space-between d-flex"
                              cols="12"
                            >
                              <label class="text-gray font-weight-bold" for=""
                                >指定名單
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                >
                              </label>
                              <v-btn
                                size="small"
                                text="下載範本"
                                variant="text"
                              ></v-btn>
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-file-input
                                prepend-icon=""
                                append-inner-icon="mdi-file-upload-outline"
                                hide-details
                              ></v-file-input>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >經費來源
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="formGrp">
                            <v-col class="pb-2" cols="12" lg="">
                              <label class="text-gray font-weight-bold" for=""
                                >發放區域
                                <abbr
                                  class="necessary"
                                  title="為必填(選)欄位,不能為空白。"
                                  >*</abbr
                                ></label
                              >
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-select
                                placeholder="文字標準表單"
                                single-line
                                density="compact"
                                hide-details="auto"
                                :items="['選項ㄧ', '選項二', '選項三']"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </div>
                  </v-card-text>
                  <v-card-actions class="d-block">
                    <div class="d-flex justify-center pa-4 pt-2">
                      <v-btn
                        class="bg-secondary btn mx-2"
                        text="取消"
                        variant="flat"
                        @click="isActive.value = false"
                      ></v-btn>
                      <v-btn
                        text="確認新增"
                        class="btn mx-2"
                        variant="flat"
                        @click="isActive.value = false"
                      ></v-btn>
                    </div>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </v-form>
    <!-- 按鈕列 end -->
    <v-row>
      <v-col cols="12">
        <dataTableServer class="dataTable py-3" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataTableServer from "@/components/dataTableServer.vue";
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
  components: {
    dataTableServer,
    datepickerModalVue,
  },
};
</script>
<style scoped></style>
