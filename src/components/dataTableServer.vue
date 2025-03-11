<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    show-select
    :loading="loading"
    item-value="name"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
  >
    <template v-slot:item.export="{ item }">
      <v-dialog class="dialogCard" max-width="500" scrollable>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            elevation="0"
            color="primary"
            class="mr-1"
            variant="text"
            v-bind="activatorProps"
            icon="mdi-tray-arrow-down"
          ></v-btn>
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
                        <label class="text-gray font-weight-bold" for=""
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
                        <label class="text-gray font-weight-bold" for=""
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
                        <label class="text-gray font-weight-bold" for=""
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
    </template>

    <template v-slot:item.edit="{ item }">
      <v-dialog class="dialogCard" max-width="600" scrollable>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="elevation-0 text-subtitle-2 ml-3"
            v-bind="activatorProps"
            icon="mdi-pencil"
            variant="text"
          ></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card title="編輯人員">
            <v-card-text class="px-4 mt-0">
              <div class="editInfoList">
                <ul>
                  <li class="">
                    <div class="text-gray mx-3 font-weight-bold title">
                      層級
                    </div>
                    <div class="">里辦公室</div>
                  </li>
                  <li class="">
                    <div class="text-gray mx-3 font-weight-bold title">
                      區里
                    </div>
                    <div class="">松山區-東榮里</div>
                  </li>
                  <li class="">
                    <div class="text-gray mx-3 font-weight-bold title">
                      管理人員
                    </div>
                    <div class="">
                      <v-btn variant="flat" class="my-1">新增人員</v-btn>
                      <v-table class="table">
                        <thead class="bg-thead">
                          <tr>
                            <th class="">帳號</th>
                            <th class="">姓名</th>
                            <th class="">角色</th>
                            <th class="" style="width: 50px">移除</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in 3" :key="item">
                            <td class="">A2*******7</td>
                            <td class="">鄭玉梅</td>
                            <td class="">里長</td>
                            <td>
                              <v-btn
                                icon="mdi-trash-can-outline"
                                variant="text"
                              ></v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                  </li>
                </ul>
              </div>
            </v-card-text>
            <v-card-actions class="d-block">
              <div class="d-flex justify-center pa-4 pt-2">
                <v-btn
                  text="關閉"
                  class="btn"
                  variant="flat"
                  @click="isActive.value = false"
                ></v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
    <template v-slot:item.delete="{ item }">
      <v-dialog class="dialogCard" max-width="360" scrollable>
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            elevation="0"
            color="primary"
            class="mr-1"
            variant="text"
            v-bind="activatorProps"
            icon="mdi-trash-can-outline"
          ></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="pt-6" title="">
            <v-card-text class="px-4">
              <div>
                <h4 class="text-gray subtitle ml-3 text-center">
                  確認解刪除？
                </h4>
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
                  text="確定"
                  class="btn mx-2"
                  variant="flat"
                  @click="isActive.value = false"
                ></v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-data-table-server>
</template>
<script>
const desserts = [
  {
    id: "001",
    time: "2024/08/27",
    name: "113年9/4銀髮體適能班1",
    class: "報名",
    rule: "事務員",
    admin: "萬華區",
    village: "和德里",
    status: "待審核",
    num: 65,
    note: "",
    selectable: false,
  },
  {
    id: "002",
    time: "2024/08/27",
    name: "113年9/4銀髮體適能班2",
    class: "報名",
    rule: "事務員",
    admin: "萬華區",
    village: "和德里",
    status: "待審核",
    num: 65,
    note: "",
  },
  {
    id: "003",
    time: "2024/08/27",
    name: "113年9/4銀髮體適能班3",
    class: "報名",
    rule: "事務員",
    admin: "萬華區",
    village: "和德里",
    status: "待審核",
    num: 65,
    note: "",
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    selected: [],
    headers: [
      {
        title: "帳號",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "活動日期", key: "time", align: "start", sortable: false },
      {
        title: "標題",
        key: "name",
        align: "start",
        sortable: false,
        width: "20%",
      },
      {
        title: "表單類型",
        key: "class",
        align: "start",
        sortable: false,
        width: "8%",
      },
      {
        title: "規則",
        key: "rule",
        align: "start",
        sortable: false,
        width: "8%",
      },
      {
        title: "行政區",
        key: "admin",
        align: "start",
        sortable: false,
        width: "8%",
      },
      {
        title: "村里",
        key: "village",
        align: "start",
        sortable: false,
        width: "8%",
      },
      {
        title: "審核",
        key: "status",
        align: "start",
        sortable: false,
        width: "8%",
      },
      {
        title: "登記人數",
        key: "num",
        align: "end",
        sortable: false,
      },
      { title: "匯出名單", key: "export", align: "start", sortable: false },
      { title: "編輯", key: "edit", align: "center", sortable: false },
      { title: "刪除", key: "delete", align: "start", sortable: false },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>
