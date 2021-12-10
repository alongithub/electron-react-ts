
import ENV from '../../../ENV';
const ElectronStore = window.require('electron-store');

// const ElectronStore = class {
//   set()  {}
//   get()  {}
// };


// const ElectronStore = window.ElectronStore;

const virtualStore = new ElectronStore({
  name: ENV.VIRTUAL_STORE,
})

window.virtualStore = virtualStore

export const setVirtualList = (list) => {
  virtualStore.set('list', list);
  return {
    type: 'virtual_set_list',
    list,
  }
}

export const getVirtualList = () => {
  return (dispatch) => {
    let list = virtualStore.get('list') || []
    return dispatch(setVirtualList(list));
  }
}