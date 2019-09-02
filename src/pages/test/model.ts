export default {
  namespace: 'test',
  state: {
    select: 'a',
    name: 'dasdasd',
  },
  reducers: {
    changeAuth(state) {
      state.select = state.value;
    },
  },
  effects: {
    *select({ payload }, { call, put }) {
      yield put({
        type: 'changeAuth',
        payload: payload
      });
    },
  },
};
