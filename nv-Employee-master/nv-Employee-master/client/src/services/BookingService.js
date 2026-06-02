import Api from '../services/Api'

export default {
    index() {
        return Api().get('bookings')
    },

    show(id) {
        return Api().get('booking/' + id)
    },

    post(data) {
        return Api().post('booking', data)
    },

    put(data) {
        return Api().put('booking/' + data.id, data)
    },

    delete(b) {
        return Api().delete('booking/' + b.id)
    },

    cancel(id) {
        return Api().put('booking/cancel/' + id)
    },
    seats(trainNumber, departureTime) {
        return Api().get('booking/seats', {
            params: { trainNumber, departureTime }
        })
    }
}