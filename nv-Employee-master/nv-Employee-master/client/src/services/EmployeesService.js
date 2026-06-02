import Api from '../services/Api'

export default {
  index () {
    return Api().get('employees')
  },

  show (employeeId) {
    return Api().get('employee/' + employeeId)
  },

  post (employee) {
    return Api().post('employee', employee)
  },

  put (employee) {
    return Api().put('employee/' + employee.id, employee)
  },

  delete (employee) {
    return Api().delete('employee/' + employee.id)
  }
}