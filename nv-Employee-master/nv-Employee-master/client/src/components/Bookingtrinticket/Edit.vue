<template>
    <div>
        <h1>Edit Booking</h1>

        <p>ชื่อ: <input v-model="b.passengerName"></p>
        <p>ขบวน: <input v-model="b.trainNumber"></p>
        <p>ต้นทาง: <input v-model="b.origin"></p>
        <p>ปลายทาง: <input v-model="b.destination"></p>

        <p>เวลา:
            <select v-model="b.departureTime">
                <option>09:00น.</option>
                <option>10:00น.</option>
                <option>11:00น.</option>
                <option>12:00น.</option>
                <option>13:00น.</option>
                <option>14:00น.</option>
                <option>15:00น.</option>
                <option>16:00น.</option>
                <option>17:00น.</option>
                <option>18:00น.</option>
                <option>19:00น.</option>
                <option>20:00น.</option>
                <option>21:00น.</option>
                <option>22:00น.</option>
                <option>23:00น.</option>
                <option>00:00น.</option>
            </select>
        </p>

        <p>ที่นั่ง: <input v-model="b.seatNumber"></p>

        <button @click="update">💾 Save</button>
    </div>
</template>

<script>
import BookingService from '../../services/BookingService'

export default {
    data() {
        return {
            b: {}
        }
    },

    async created() {
        const id = this.$route.params.id
        this.b = (await BookingService.show(id)).data
    },

    methods: {
        async update() {
            try {
                await BookingService.put(this.b)
                alert('✅ แก้ไขสำเร็จ')
                this.$router.push({ name: 'bookings' })
            } catch (err) {
                alert('❌ แก้ไขไม่สำเร็จ')
                console.log(err)
            }
        }
    }
}
</script>