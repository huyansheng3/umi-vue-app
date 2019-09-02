
<template>
  <div>
    test
    <select
      v-model="select"
      @change="onChange"
    >
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
    </select>

    <div>
      <router-link :to="`test/${select}`">detail</router-link>
    </div>

  </div>
</template>
<script>
import { mapState, dispatch } from '@ddot/umi-vue';
export default {
  computed: {
    ...mapState({
      select: state => state.test.select,
    }),
    ...mapState('test', ['name']),
    ...mapState('global', ['lang']),
  },
  updated() {
    console.log(1);
  },
  methods: {
    onChange(e) {
      dispatch({ type: 'test/select', payload: { value: e.target.value } });
    },
  },
};
</script>
