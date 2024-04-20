<template>

  <div class="container">
    <pv-card style="width: 25rem; overflow: hidden"
             role="grid" class="pv-card" v-for="bean in beans">
      <template #header aria-label="heading">
        <img :src="bean.image" alt="Bean" aria-label="image" role="img" width="250px"/>
      </template>

      <template #title aria-label="title">{{ bean.name }}</template>
      <template #subtitle aria-describedby="title">Ingredients: {{ bean.ingredients.join(", ") }}</template>

      <template #content>
        <p class="m-0" role="contentinfo">Gluten free: {{(bean.glutenFree)? "Yes" : "No"}}</p>
        <p class="m-0" role="contentinfo">Sugar free: {{(bean.sugarFree)? "Yes" : "No"}}</p>
        <p class="m-0" role="contentinfo">Seasonal: {{(bean.seasonal)? "Yes" : "No"}}</p>
        <p class="m-0" role="contentinfo">Kosher: {{(bean.kosher)? "Yes" : "No"}}</p>
      </template>

    </pv-card>

  </div>

</template>

<script>
import BeanService from "@/commerce/services/bean.service.js";
import BeanEntity from "@/commerce/entities/bean.entity.js";

export default {
  name: "card-bean-component",
  data() {
    return {
      beanService: new BeanService(),
      beans: []
    }
  },
  mounted() {
    this.getBeans();
  },
  methods: {
    getBeans() {
      this.beanService.getBeans()
          .then((r) => {
            const data = r.data.items;

            for(let i=0; i<data.length; ++i) {
              const bean = new BeanEntity(
                  data[i].flavorName,
                  data[i].ingredients,
                  data[i].glutenFree,
                  data[i].sugarFree,
                  data[i].seasonal,
                  data[i].kosher,
                  data[i].imageUrl
              );

              this.beans.push(bean);
            }
          })
          .catch((e) => {
            console.error('todo mal', e);
          })
    }
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .pv-card {
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
  }
</style>