<template>
  <b-container fluid id="home">
    <b-row cols="12" class="header">
      <b-col class="header-col">
        <header class="header-inside">
          <b-img
            style="width:100px;"
            left
            src="http://192.168.1.100:85/assets/img/redbus_india_logo.png"
            alt="Center imag"
          ></b-img>
          <b-button variant="outline-warning">Sign Up</b-button>
          <b-button variant="outline-warning">login</b-button>
        </header>
      </b-col>
    </b-row>

    <b-row cols="12" class="navbar">
      <b-col class="navbar-col">
        <nav class="navbar-inside">
          <a href="/" @click.prevent="goto_home()">Home</a>
        </nav>
      </b-col>
    </b-row>

    <b-row cols="12" class="main">
      <b-col class="main-col">
        <main class="main-inside">
          <div class="form-ticket">
            <div class="departing_place">
              <p>Leaving from</p>
              <select v-model="departing_place">
                <option value="Dhaka">Dhaka</option>
                <option value="Comilla">Comilla</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>
            <div class="goint_to">
              <p>Goint To</p>
              <select v-if="departing_place === 'Dhaka'" v-model="goint_to">
                <option
                  v-for="(item, index) in dhaka"
                  :key="index"
                  :value="item"
                  >{{ item }}</option
                >
              </select>
              <select v-if="departing_place === 'Comilla'" v-model="goint_to">
                <option
                  v-for="(item, index) in comilla"
                  :key="index"
                  :value="item"
                  >{{ item }}</option
                >
              </select>
              <select
                v-if="departing_place === 'Chittagong'"
                v-model="goint_to"
              >
                <option
                  v-for="(item, index) in chittagong"
                  :key="index"
                  :value="item"
                  >{{ item }}</option
                >
              </select>
            </div>
            <div class="departing_on">
              <p>Departing On</p>
              <b-form-datepicker
                id="example-datepicker"
                v-model="value"
                class="mb-2"
              ></b-form-datepicker>
            </div>
            <b-button variant="outline-warning" @click="searchBus()"
              >Search bus</b-button
            >
          </div>
          <img src="../assets/image/backgr.png" alt="" />
        </main>
      </b-col>
    </b-row>

    <b-row cols="12" class="footer">
      <b-col class="footer-col">
        <footer class="footer-inside">
          <img src="../assets/image/footer.png" alt="" />
        </footer>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import firebase from 'firebase'
export default {
  name: 'home',
  data() {
    return {
      dhaka: ['Comilla', 'Chittagong', 'KuaKata', 'Coxs Bazar', 'Rajshahi'],
      comilla: ['Chittagong', 'Dhaka', 'Rajshahi'],
      chittagong: ['Mymensingh', 'Dhaka', 'Sylet'],
      departing_place: '',
      goint_to: '',
      value: ''
    }
  },
  components: {},
  mounted() {
    this.triggerApi()
  },
  computed: {
    ...mapGetters(['getDataBus'])
  },
  methods: {
    ...mapActions(['requestData']),
    ...mapMutations(['passDataHome']),
    triggerApi() {
      this.requestData()
        .then(response => {})
        .catch(error => {
          console.log(error)
        })
    },
    searchBus() {
      this.passDataHome([this.departing_place, this.goint_to, this.value])
      this.$router.push('/print')
    },
    goto_home() {}
  }
}
</script>

<style lang="scss" src="../assets/css/home.scss"></style>
