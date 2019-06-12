<template>
  <div class="hello">
    测试
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getorglist } from '@/api/api';
@Component
export default class HelloWorld extends Vue {
  @Prop(String) private readonly msg!: string | undefined;
  private created() {
    getorglist().then((res) => {
      console.log(res, '数据');
    });
  }
}
</script>
