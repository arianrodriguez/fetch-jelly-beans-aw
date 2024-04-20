<template>
  <footer class="footer" role="doc-footnote">
    <p>Copyright &copy; 2024 Jelly Bean Peru Store, inc. All rights reserved</p>
    <p>Developed by arigeimpleis 💙</p>
  </footer>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>
  .footer {
    padding: 5rem;
    background-color: #92C7CF;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    flex-direction: column;
    margin-top: 2rem;
  }

  .footer p:nth-child(1) {
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>