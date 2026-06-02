<template>
    <div>
        <h1>Bookings Trinticket</h1>

        <router-link :to="{ name: 'booking-create' }">Create</router-link>

        <table border="1">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Train</th>
                    <th>Time</th>
                    <th>Seat</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="b in bookings" :key="b.id">
                    <td>{{ b.passengerName }}</td>
                    <td>{{ b.trainNumber }}</td>
                    <td>{{ b.departureTime }}</td>
                    <td>{{ b.seatNumber }}</td>
                    <td>{{ b.status }}</td>

                    <td>
                        <button class="btn show" @click="goShow(b.id)">Show</button>
                        <button class="btn show" @click="goEdit(b.id)">Edit</button>
                        <button @click="del(b)">Delete</button>
                        <button @click="cancel(b)">Cancel</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import BookingService from '../../services/BookingService'

export default {
    data() {
        return { bookings: [] }
    },

    async created() {
        this.load()
    },

    methods: {
        async load() {
            this.bookings = (await BookingService.index()).data
        },

        async del(b) {
            await BookingService.delete(b)
            this.load()
        },

        async cancel(b) {
            let confirmCancel = confirm('ต้องการยกเลิกการจองใช่ไหม?')

            if (confirmCancel) {
                await BookingService.cancel(b.id)

                alert('🚫 ยกเลิกการจองเรียบร้อย')

                this.load() // รีเฟรชข้อมูล
            }
        },
        goShow(id) {
            this.$router.push({ name: 'booking-show', params: { id } })
        },

        goEdit(id) {
            this.$router.push({ name: 'booking-edit', params: { id } })
        }
    }
}
</script>