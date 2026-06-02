module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    passengerName: DataTypes.STRING,
    trainNumber: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    departureTime: DataTypes.STRING,
    seatNumber: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'booked'
    }
  })
  return Booking
}