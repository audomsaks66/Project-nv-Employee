const { Booking } = require('../models')

module.exports = {

    // 🔍 ดูทั้งหมด
    async index(req, res) {
        const data = await Booking.findAll()
        res.send(data)
    },

    // 🔍 ดูทีละรายการ (SHOW)
    async show(req, res) {
        const data = await Booking.findByPk(req.params.id)
        res.send(data)
    },

    // ➕ สร้าง
    async create(req, res) {
        const exist = await Booking.findOne({
            where: {
                trainNumber: req.body.trainNumber,
                departureTime: req.body.departureTime,
                seatNumber: req.body.seatNumber,
                status: 'booked'
            }
        })

        if (exist) {
            return res.status(400).send({ error: 'seat taken' })
        }

        const data = await Booking.create(req.body)
        res.send(data)
    },

    // ✏️ แก้ไข
    async update(req, res) {
        await Booking.update(req.body, {
            where: { id: req.params.id }
        })
        res.send(req.body)
    },

    // ❌ ลบ
    async remove(req, res) {
        const data = await Booking.findByPk(req.params.id)
        await data.destroy()
        res.send(data)
    },

    // 🚫 ยกเลิก (ไม่ลบ)
    async cancel(req, res) {
        await Booking.update(
            { status: 'cancelled' },
            { where: { id: req.params.id } }
        )
        res.send({ status: 'cancelled' })
    },
    async seats(req, res) {
        try {
            const { trainNumber, departureTime } = req.query

            const bookings = await Booking.findAll({
                where: {
                    trainNumber,
                    departureTime,
                    status: 'booked'
                }
            })

            const bookedSeats = bookings.map(b => b.seatNumber)

            res.send(bookedSeats)

        } catch (err) {
            res.status(500).send({ error: 'Get seats failed' })
        }
    }
}