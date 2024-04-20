<template>
  <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem" role="toolbar" class="pv-toolbar">
    <template #start>
      <h1 aria-label="title" class="title">Jelly Bean Peru Store</h1>
      
      <img src="../assets/logo.png" alt="Wonka Logo" role="img" aria-describedby="image" width="130px">
    </template>
  </pv-toolbar>
</template>

<script>
export default {
  name: "toolbar"
}

</script>

<style scoped>
  .pv-toolbar {
    background-color: #AAD7D9;
    color: #fff;
    margin: 1rem;
    position: relative;
    box-shadow: 0px 0px 10px 1px #92C7CF;

  }

  .title {
    font-weight: 400;
  }

</style>