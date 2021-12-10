const initstate = {
  list: [],
}

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "server_set_list": {
      console.log("server_set_list")
      return {
        ...state,
        list: action.list,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;