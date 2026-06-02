const { Employee } = require('../models')

module.exports = {
  // get all employee
  async index (req, res) {
    try {
      const employees = await Employee.findAll()
      res.send(employees)
    } catch (err) {
      res.status(500).send({
        error: 'The employees information was incorrect'
      })
    }
  },

  // create employee
  async create (req, res) {
    try {
      const employee = await Employee.create(req.body)
      res.send(employee.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create employee incorrect'
      })
    }
  },

  // edit employee, suspend, active
  async put (req, res) {
    try {
      await Employee.update(req.body, {
        where: {
          id: req.params.employeeId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update employee incorrect'
      })
    }
  },

  // delete employee
  async remove (req, res) {
    try {
      const employee = await Employee.findOne({
        where: {
          id: req.params.employeeId
        }
      })

      if (!employee) {
        return res.status(403).send({
          error: 'The employee information was incorrect'
        })
      }

      await employee.destroy()
      res.send(employee)
    } catch (err) {
      res.status(500).send({
        error: 'The employee information was incorrect'
      })
    }
  },

  // get employee by id
  async show (req, res) {
    try {
      const employee = await Employee.findByPk(req.params.employeeId)
      res.send(employee)
    } catch (err) {
      res.status(500).send({
        error: 'The employee information was incorrect'
      })
    }
  }
}
