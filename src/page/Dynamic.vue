<template>
  <div class="dynamic">
    <Header title="动态"/>
    <SearchBox/>
    <div>this is dynamic</div>
    <!--<BottomNav/>-->
  </div>
</template>

<script>
  import Header from '../components/Header';
  import SearchBox from '../components/SearchBox';
  import BottomNav from '../components/BottomNav'


  export default {
    name: "Dynamic",
    components: {
      Header,
      SearchBox,
      BottomNav
    },
    data() {
      return {}
    },
    methods: {
      clickSearch(){
        alert(3)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
