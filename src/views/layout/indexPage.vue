<template>
  <div class="index_bg" width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center">
          <img
            class="mr-5"
            style="width: 200px"
            src="~@/assets/images/logo.png"
            alt=""
          />
          <p class="text-h5">數位學習系統</p>
        </h3>
        <v-btn color="primary"
          ><a href="https://github.com/HywebU00/2025_TBL_HyVue"
            >檔案下載</a
          ></v-btn
        >
      </div>
      <div class="d-flex mb-2 justify-center">
        <div style="width: 75%" class="mt-1">
          <h3 class="text-center mb-3 text-primary">後台頁面列表</h3>
          <v-card>
            <v-table>
              <thead class="bg-primary">
                <tr>
                  <th class="text-left">編號</th>
                  <th class="text-left">頁面名稱</th>
                  <th class="text-left">連結</th>
                  <th class="text-left width">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in desserts" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <td><div v-html="item.note"></div></td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </div>
      <div class="d-flex mb-2 justify-center mt-6">
        <div style="width: 75%" class="mt-1">
          <h3 class="text-center mb-3 text-secondary">前台頁面列表</h3>
          <v-card>
            <v-table>
              <thead class="bg-secondary">
                <tr>
                  <th class="text-left">編號</th>
                  <th class="text-left">頁面名稱</th>
                  <th class="text-left">連結</th>
                  <th class="text-left width">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in front" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <td>
                    <div v-html="item.note"></div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "後台首頁",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/",
          note: "【視窗】新增帳號按鈕可點擊 <br>",
        },
        {
          name: "後台登入頁",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/login",
          note: "",
        },
        {
          name: "後台活動內容",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/event",
          note: "",
        },
      ],
      front: [
        {
          name: "前台_管理表單",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/front",
          note: "【視窗】匯出名單按鈕可點擊 <br>【視窗】新增發放按鈕可點擊 <br>【視窗】新增報名按鈕可點擊",
        },
        {
          name: "前台_授權管理",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/front/auth",
          note: "【視窗】新增授權按鈕可點擊 <br>",
        },
        {
          name: "前台_簽收紀錄",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/front/card",
          note: "【視窗】匯出名單按鈕可點擊  <br> 【視窗】編輯 刪除按鈕可點擊 ",
        },
        {
          name: "前台_簽收作業",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/front/method",
          note: "【視窗】讀取身分證按鈕可點擊  <br> 【視窗】編輯 讀取台北通按鈕可點擊 <br> 【視窗】編輯 讀取敬老卡按鈕可點擊 <br> 【視窗】編輯 讀取健保卡按鈕可點擊 <br> 【視窗】編輯 新增手動名單按鈕可點擊 ",
        },
        {
          name: "前台_報名紀錄",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/front/event",
          note: "",
        },
        {
          name: "前台_報名作業",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/front/form",
          note: "【視窗】讀取身分證按鈕可點擊  <br> 【視窗】編輯 讀取台北通按鈕可點擊 <br> 【視窗】編輯 讀取敬老卡按鈕可點擊 <br> 【視窗】編輯 讀取健保卡按鈕可點擊 <br> 【視窗】編輯 新增手動名單按鈕可點擊 ",
        },
        {
          name: "前台_登入頁",
          link: "https://hywebu00.github.io/2024_taipel_digital_village/#/mplogin",
          note: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #e9ecef;
}
.index_container {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.index_title {
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0.5rem;
  h3 {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
    p {
      font-weight: bolder;
    }
  }
  button.v-btn {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.index_table {
  thead {
    background: #17214c;
    tr > th {
      font-size: 1rem !important;
      color: #fff !important;
      white-space: nowrap;
    }
    .width {
      width: 100px;
    }
  }
  tbody {
    tr > td {
      &:nth-child(2) {
        min-width: 250px;
      }
    }
  }
}
</style>
