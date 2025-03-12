<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '節點', '節點']"></v-breadcrumbs>

    <h2>活動管理</h2>
    <!-- 篩選器 start -->
    <v-row class="formGrp filterList d-sm-flex">
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
      <!-- <v-col class="py-0 d-flex align-center" cols="auto">
        <v-btn variant="flat" color="secondary" class="mr-2">
          刪除已選取帳號(0)</v-btn
        >
      </v-col> -->
      <v-col class="py-0 ml-auto btnList" cols="auto">
        <div class="justify-end d-flex flex-wrap">
          <v-dialog class="dialogCard" max-width="500" scrollable>
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn variant="flat" class="mx-1 my-1" v-bind="activatorProps"
                >新增發放</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card title="新增發放">
                <v-card-text class="px-4">
                  <div>
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
                              label="文字標準表單"
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
                              label="下拉式選單"
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
                              label="下拉式選單"
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
                            <p class="px-2">大安區- 光信里</p>
                          </v-col>
                        </v-row>
                        <v-expansion-panels class="formExpansion">
                          <v-expansion-panel>
                            <v-expansion-panel-title elevation-0
                              >進階選項</v-expansion-panel-title
                            >
                            <v-expansion-panel-text>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >名額限制
                                    <abbr
                                      class="necessary"
                                      title="為必填(選)欄位,不能為空白。"
                                      >*</abbr
                                    ></label
                                  >
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-text-field
                                    label="文字標準表單"
                                    density="compact"
                                    single-line
                                    hide-details="auto"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >一般民眾年齡限制
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-row>
                                    <v-col>
                                      <v-select
                                        label="最小年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                    <v-col>
                                      <v-select
                                        label="最大年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >原住民年齡限制
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-row>
                                    <v-col>
                                      <v-select
                                        label="最小年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                    <v-col>
                                      <v-select
                                        label="最大年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >性別限制
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-select
                                    label="性別"
                                    single-line
                                    density="compact"
                                    hide-details="auto"
                                    :items="['選項ㄧ', '選項二', '選項三']"
                                  ></v-select>
                                </v-col>
                              </v-row>
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                        <v-row class="formGrp">
                          <v-col class="pb-2" cols="12" lg="">
                            <label class="text-gray font-weight-bold" for=""
                              >啟用拍照
                            </label>
                          </v-col>
                          <v-col cols="12" class="pt-0">
                            <v-switch
                              class="ml-2"
                              color="primary"
                              inset
                              hide-details="auto"
                              single-line
                            ></v-switch>
                          </v-col>
                        </v-row>
                        <v-row class="formGrp">
                          <v-col class="pb-2" cols="12" lg="">
                            <label class="text-gray font-weight-bold" for=""
                              >啟用電子簽名
                            </label>
                          </v-col>
                          <v-col cols="12" class="pt-0">
                            <v-switch
                              class="ml-2"
                              color="primary"
                              hide-details="auto"
                              inset
                            ></v-switch>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </div>
                </v-card-text>
                <v-card-actions class="d-block">
                  <div class="d-flex justify-center pa-4 pt-2 flex-wrap">
                    <v-btn
                      class="bg-secondary btn mx-2 mb-2 mb-sm-0"
                      text="取消"
                      variant="flat"
                      @click="isActive.value = false"
                    ></v-btn>
                    <v-btn
                      text="確認送審"
                      class="btn mx-2 mb-2 mb-sm-0"
                      variant="flat"
                      @click="isActive.value = false"
                    ></v-btn>
                    <v-btn
                      text="暫存草稿"
                      class="btn mx-2 mb-2 mb-sm-0"
                      variant="flat"
                      @click="isActive.value = false"
                    ></v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-dialog class="dialogCard" max-width="500" scrollable>
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn variant="flat" class="mx-1 my-1" v-bind="activatorProps"
                >新增報名</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card title="新增報名">
                <v-card-text class="px-4">
                  <div>
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
                              label="文字標準表單"
                              density="compact"
                              single-line
                              hide-details="auto"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="formGrp">
                          <v-col class="pb-2" cols="12" lg="">
                            <label class="text-gray font-weight-bold" for=""
                              >是否收費
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col cols="12" class="pt-0">
                            <v-select
                              label="下拉式選單"
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
                              >費用設定-里民
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col cols="12" class="pt-0">
                            <v-text-field
                              placeholder="0"
                              density="compact"
                              single-line
                              hide-details="auto"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="formGrp">
                          <v-col class="pb-2" cols="12" lg="">
                            <label class="text-gray font-weight-bold" for=""
                              >費用設定-非里民
                              <abbr
                                class="necessary"
                                title="為必填(選)欄位,不能為空白。"
                                >*</abbr
                              ></label
                            >
                          </v-col>
                          <v-col cols="12" class="pt-0">
                            <v-text-field
                              placeholder="0"
                              density="compact"
                              single-line
                              hide-details="auto"
                            ></v-text-field>
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
                              label="下拉式選單"
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
                            <p class="px-2">大安區- 光信里</p>
                          </v-col>
                        </v-row>
                        <v-expansion-panels class="formExpansion">
                          <v-expansion-panel>
                            <v-expansion-panel-title elevation-0
                              >進階選項</v-expansion-panel-title
                            >
                            <v-expansion-panel-text>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >名額限制
                                    <abbr
                                      class="necessary"
                                      title="為必填(選)欄位,不能為空白。"
                                      >*</abbr
                                    ></label
                                  >
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-text-field
                                    label="文字標準表單"
                                    density="compact"
                                    single-line
                                    hide-details="auto"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >一般民眾年齡限制
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-row>
                                    <v-col>
                                      <v-select
                                        label="最小年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                    <v-col>
                                      <v-select
                                        label="最大年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >原住民年齡限制
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-row>
                                    <v-col>
                                      <v-select
                                        label="最小年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                    <v-col>
                                      <v-select
                                        label="最大年齡"
                                        single-line
                                        density="compact"
                                        hide-details="auto"
                                        :items="['選項ㄧ', '選項二', '選項三']"
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >性別限制
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-select
                                    label="性別"
                                    single-line
                                    density="compact"
                                    hide-details="auto"
                                    :items="['選項ㄧ', '選項二', '選項三']"
                                  ></v-select>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >啟用拍照
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-switch
                                    class="ml-2"
                                    color="primary"
                                    inset
                                    hide-details="auto"
                                    single-line
                                  ></v-switch>
                                </v-col>
                              </v-row>
                              <v-row class="formGrp">
                                <v-col class="pb-2" cols="12" lg="">
                                  <label
                                    class="text-gray font-weight-bold"
                                    for=""
                                    >啟用電子簽名
                                  </label>
                                </v-col>
                                <v-col cols="12" class="pt-0">
                                  <v-switch
                                    class="ml-2"
                                    color="primary"
                                    hide-details="auto"
                                    inset
                                  ></v-switch>
                                </v-col>
                              </v-row>
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
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
                      text="確認送審"
                      class="btn mx-2"
                      variant="flat"
                      @click="isActive.value = false"
                    ></v-btn>
                    <v-btn
                      text="暫存草稿"
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
    <!-- 按鈕列 end -->
    <v-row class="cardGrp">
      <template v-for="i in 3" :key="i">
        <v-col md="6" lg="4" sm="6" cols="12">
          <v-card class="itemCard">
            <div class="cardContainer">
              <div class="info">
                <v-card-item>
                  <v-card-title class="mt-3">光信里中元普渡活動</v-card-title>
                </v-card-item>
                <v-card-text>
                  <v-divider class="mb-2"></v-divider>
                  <ul>
                    <li><span>類型</span>物資發放</li>
                    <li><span>規則</span>每戶每人領取一份</li>
                    <li><span>發放人員</span>透過里辦</li>
                    <li><span>經費來源</span>里鄰建設服</li>
                    <li><span>區域</span>內湖區西康里</li>
                    <li><span>已簽收/上線人數</span>32/無</li>
                    <li><span>啟用拍照</span>Yes</li>
                    <li><span>啟用電子簽名</span>32/無</li>
                    <li><span>審核</span>No</li>
                    <li><span>發放日期</span>2024/9/10</li>
                  </ul>
                </v-card-text>
                <v-card-actions class="d-flex justify-center mb-6 btnGrp">
                  <v-btn variant="flat" color="primary"> 活動內容</v-btn>

                  <v-dialog class="dialogCard" max-width="500" scrollable>
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        variant="flat"
                        color="primary"
                        v-bind="activatorProps"
                      >
                        匯出名單
                      </v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card title="匯出名單">
                        <v-card-text class="px-4">
                          <div>
                            <h4 class="text-gray subtitle ml-3">
                              名單將以加密壓縮檔案下載，請設定您的密碼！
                            </h4>
                            <v-form>
                              <v-container>
                                <v-row class="formGrp">
                                  <v-col class="pb-2" cols="12" lg="">
                                    <label
                                      class="text-gray font-weight-bold"
                                      for=""
                                      >檔案格式
                                      <abbr
                                        class="necessary"
                                        title="為必填(選)欄位,不能為空白。"
                                        >*</abbr
                                      ></label
                                    >
                                  </v-col>
                                  <v-col cols="12" class="pt-0">
                                    <v-select
                                      label="下拉式選單"
                                      single-line
                                      density="compact"
                                      hide-details="auto"
                                      :items="[
                                        'Microsoft Excel(.xlsx)',
                                        'OpenDocument 試算表(.ods) ',
                                      ]"
                                    ></v-select>
                                  </v-col>
                                </v-row>
                                <v-row class="formGrp">
                                  <v-col class="pb-2" cols="12" lg="">
                                    <label
                                      class="text-gray font-weight-bold"
                                      for=""
                                      >密碼設定
                                      <abbr
                                        class="necessary"
                                        title="為必填(選)欄位,不能為空白。"
                                        >*</abbr
                                      ></label
                                    >
                                  </v-col>
                                  <v-col cols="12" class="pt-0">
                                    <v-text-field
                                      label="文字標準表單"
                                      density="compact"
                                      single-line
                                      hide-details="auto"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row class="formGrp">
                                  <v-col class="pb-2" cols="12" lg="">
                                    <label
                                      class="text-gray font-weight-bold"
                                      for=""
                                      >再次確認密碼
                                      <abbr
                                        class="necessary"
                                        title="為必填(選)欄位,不能為空白。"
                                        >*</abbr
                                      ></label
                                    >
                                  </v-col>
                                  <v-col cols="12" class="pt-0">
                                    <v-text-field
                                      label="文字標準表單"
                                      density="compact"
                                      single-line
                                      hide-details="auto"
                                    ></v-text-field>
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
                              text="確認匯出"
                              class="btn mx-2"
                              variant="flat"
                              @click="isActive.value = false"
                            ></v-btn>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col md="6" lg="4" sm="6" cols="12">
          <v-card class="itemCard">
            <div class="cardContainer">
              <div class="info h-100">
                <v-card-item>
                  <v-card-title class="mt-3">光信里中元普渡活動</v-card-title>
                </v-card-item>
                <v-card-text>
                  <v-divider class="mb-2"></v-divider>
                  <ul>
                    <li><span>類型</span>物資發放</li>
                    <li><span>規則</span>每戶每人領取一份</li>
                    <li><span>發放人員</span>透過里辦</li>
                    <li><span>經費來源</span>里鄰建設服</li>
                    <li><span>區域</span>內湖區西康里</li>
                    <li><span>已簽收/上線人數</span>32/無</li>
                  </ul>
                </v-card-text>
                <v-card-actions class="d-flex justify-center mb-6 btnGrp">
                  <v-btn variant="flat" color="secondary">編輯草稿</v-btn>

                  <v-btn color="error" variant="flat" class="btnWidth">
                    刪除
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </template>
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
