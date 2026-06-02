<template>
    <div>
        <h1>🚆 Create BookingTrin Ticket</h1>

        <p>ชื่อผู้โดยสาร:
            <input v-model="booking.passengerName">
        </p>

        <p>ขบวน:
            <input v-model="booking.trainNumber">
        </p>

        <p>ต้นทาง:
            <input v-model="booking.origin">
        </p>

        <p>ปลายทาง:
            <input v-model="booking.destination">
        </p>

        <p>เวลา:
            <select v-model="booking.departureTime">
                <option disabled value="">-- เลือกเวลา --</option>
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

        <!-- 🔥 เลือกที่นั่ง -->
        <p>เลือกที่นั่ง:</p>

        <div class="train">
            <div v-for="row in 20" :key="row" class="seat-row">

                <!-- ฝั่งซ้าย -->
                <button v-for="col in ['A', 'B']" :key="col + row" :disabled="bookedSeats.includes(col + row)"
                    :class="seatClass(col + row)" @click="selectSeat(col + row)">
                    {{ col + row }}
                </button>

                <!-- ทางเดิน -->
                <span class="aisle"></span>

                <!-- ฝั่งขวา -->
                <button v-for="col in ['C', 'D']" :key="col + row" :disabled="bookedSeats.includes(col + row)"
                    :class="seatClass(col + row)" @click="selectSeat(col + row)">
                    {{ col + row }}
                </button>

            </div>
        </div>
        <br>

        <button @click="create">🎟️ Book Ticket</button>
    </div>
</template>

<script>
import BookingService from '../../services/BookingService'

export default {
    data() {
        return {
            booking: {
                passengerName: '',
                trainNumber: '',
                origin: '',
                destination: '',
                departureTime: '',
                seatNumber: '',
                status: 'booked'
            },
            bookedSeats: []
        }
    },

    created() {
        // 🔥 สร้างที่นั่ง A1 - A10
        this.seats = Array.from({ length: 10 }, (_, i) => 'A' + (i + 1))
    },

    watch: {
        'booking.trainNumber'() {
            this.loadSeats()
        },
        'booking.departureTime'() {
            this.loadSeats()
        }
    },

    methods: {
        async loadSeats() {
            if (!this.booking.trainNumber || !this.booking.departureTime) return

            try {
                const res = await BookingService.seats(
                    this.booking.trainNumber,
                    this.booking.departureTime
                )

                this.bookedSeats = res.data

            } catch (err) {
                console.log(err)
            }

        },

        selectSeat(seat) {
            this.booking.seatNumber = seat
        },

        async create() {
            try {
                if (!this.booking.seatNumber) {
                    alert('⚠️ กรุณาเลือกที่นั่ง')
                    return
                }

                await BookingService.post(this.booking)

                alert('✅ จองสำเร็จ')

                this.$router.push({ name: 'bookings' })

            } catch (err) {
                alert('❌ ที่นั่งนี้ถูกจองไปแล้ว')
                console.log(err)
            }
        },
        seatClass(seat) {
            return {
                seat: true,
                booked: this.bookedSeats.includes(seat),
                selected: this.booking.seatNumber === seat
            }
        }
    }
}
</script>

<style scoped>
.seats {
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;
}

.seats button {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
}

/* 🔴 ที่นั่งไม่ว่าง */
.booked {
    background-color: red;
    color: white;
    cursor: not-allowed;
}

/* 🟢 ที่นั่งที่เลือก */
.selected {
    background-color: green;
    color: white;
}
.train {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.seat-row {
  display: flex;
  justify-content: center;
}

.seat {
  width: 50px;
  height: 40px;
  margin: 3px;
}

.aisle {
  width: 30px;
}

.booked {
  background: red;
  color: white;
}

.selected {
  background: green;
  color: white;
}
</style>