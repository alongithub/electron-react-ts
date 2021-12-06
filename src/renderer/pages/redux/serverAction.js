
import ENV from '../../ENV';
const ElectronStore = window.require('electron-store');

const serverStore = new ElectronStore({
  name: ENV.SERVER_STORE,
})

export const setServerList = (list) => {
  serverStore.set('list', list);
  return {
    type: 'server_set_list',
    list,
  }
}

export const getServerList = () => {
  return (dispatch) => {
    let list = serverStore.get('list') || []
    return dispatch(setServerList(list));
  }
}