<template>
  <div id="printpage">
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

    <b-row class="shedule" style="border: 1px solid black;">
      <b-col md="12">
        <p>
          {{ getDataFromHome[1] }} - {{ getDataFromHome[0] }} On
          {{ getDataFromHome[2] }}
        </p>
        <b-row class="filter " style="">
          <b-col md="4" style="text-align: right;">
            <h5>Filter By</h5>
          </b-col>
          <b-col md="4" style="">
            <label for="bybus" style="margin-right: 10px;">By Bus</label>
            <select name="bybus" id="bybus" style="">
              <option value="1">By Bus</option>
            </select>
          </b-col>
          <b-col md="4" style="text-align: left;">
            <label for="bytype" style="margin-right: 10px;">By Type</label>
            <select name="" id="bytype">
              <option value="2">By Type</option>
            </select>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="12">
        <b-row>
          <b-col md="8" style="border: 1px solid black; margin: 0 auto;">
            <b-row>
              <b-col md="2">Bus Name</b-col>
              <b-col md="2">Dept. Time</b-col>
              <b-col md="2">Coach Type</b-col>
              <b-col md="2">Seat available</b-col>
              <b-col md="4">fare</b-col>
            </b-row>
          </b-col>
          <b-col
            md="8"
            v-for="(item, index) in 5"
            :key="index"
            style="border: 1px solid black; margin: 0 auto;"
          >
            <h6>Hey</h6>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row cols="12" class="footer">
      <b-col class="footer-col">
        <footer class="footer-inside">
          <img src="../../assets/image/footer.png" alt="" />
        </footer>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'print',
  data() {
    return {}
  },
  components: {},
  mounted() {
    if (this.getAccess !== true) {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['getAccess', 'getDataFromHome'])
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),

    goto_home() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" src="../../assets/css/print.scss"></style>
