import axios from 'axios'
// import router from '../../router/index'
export default {
  state: {
    isSearching: 'false',
    bus_data: {},
    data_from_home: []
  },
  mutations: {
    passDataHome(state, payload) {
      state.data_from_home = payload
      if (
        state.data_from_home[0].length === 0 ||
        state.data_from_home[1].length === 0 ||
        state.data_from_home[2].length === 0
      ) {
        state.isSearching = false
      } else {
        state.isSearching = true
      }
    },
    removeDataHome(state) {
      state.isSearching = 'false'
    }
  },
  actions: {
    requestData(context, state) {
      return new Promise((resolve, reject) => {
        axios
          .get('https://bdbusticket.firebaseio.com/buses.json')
          .then(response => {
            // cara buat ektrak nama object bentuk integer & uniqecode
            // cara.1.
            for (var key in response.data) {
              console.log(key)
            }

            // cara.2
            // ini arraynya
            console.log(Object.keys(response.data))
            //  ini mappingnya
            Object.keys(response.data).map(e => {
              console.log(e)
            })

            // context.state.bus_data = response.data
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  },
  getters: {
    getAccess(state) {
      return state.isSearching
    },
    getDataBus(state) {
      return state.bus_data
    },
    getDataFromHome(state) {
      return state.data_from_home
    }
  }
}
