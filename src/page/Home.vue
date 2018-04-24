<template>

  <el-container class="section">
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-container>
        <el-main class="main">Main</el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Home",
    components: {
      Header,
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .section {
    height: 100%;
  }

  .header {
    border: 1px #f1f2f1 solid;
  }

  .aside {
    border: 1px #f1f2f1 solid;
  }

  .main {

    border: 1px #f1f2f1 solid;
  }

  .footer {
    border: 1px #f1f2f1 solid;
  }
</style>
