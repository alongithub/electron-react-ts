const initstate = {
  list: [],
}

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "virtual_set_list": {
      return {
        ...state,
        list: action.list,
      }
    }
    default: {
      return initstate;
    }
  }
}

export default reducer;