<template>
  <!-- NAVBAR -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="logo--lodur">
      <a href="index.html"><img src="../assets/images/logo-dark.png" alt="Klorofil Logo" class="img-responsive logo"></a>
    </div>
    <div class="container-fluid">
      <!-- <div class="navbar-btn">
        <button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
      </div> -->
      <form style="margin-left: 4rem; float: left;" class="navbar-form">
        <div class="input-group">
          <input type="text" value="" class="form-control" placeholder="Search...">
          <span class="input-group-btn"><button type="button" class="btn btn-primary">Go</button></span>
        </div>
      </form>
    </div>
  </nav>
  <!-- END NAVBAR -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
