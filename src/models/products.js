export default {
  namespace: 'products',
  state: [],
  reducers: {
    'deletes'(state, {
      payload: id
    }) {
      console.log(state);
      console.log(id);
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log(111);
      yield put({ type: 'deletes' , payload});
    },
  }
};
