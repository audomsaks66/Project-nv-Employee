module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    position: DataTypes.STRING,
    salary: DataTypes.FLOAT
  })
  return Employee
}
