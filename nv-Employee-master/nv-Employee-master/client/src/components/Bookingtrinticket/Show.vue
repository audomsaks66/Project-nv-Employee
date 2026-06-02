<template>
<div>
  <h1>Booking Detail</h1>

  <p>{{ b.passengerName }}</p>
  <p>{{ b.trainNumber }}</p>
  <p>{{ b.origin }} → {{ b.destination }}</p>
  <p>{{ b.departureTime }}</p>
  <p>{{ b.seatNumber }}</p>
  <p>{{ b.status }}</p>
</div>
</template>

<script>
import BookingService from '../../services/BookingService'

export default {
  data () {
    return { b: {} }
  },

  async created () {
    this.b = (await BookingService.show(this.$route.params.id)).data
  }
}
</script>