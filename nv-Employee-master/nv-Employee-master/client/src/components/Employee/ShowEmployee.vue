<template>
  <div>
    <h1>Employee Detail</h1>

    <p>ID: {{ employee.id }}</p>
    <p>First Name: {{ employee.firstName }}</p>
    <p>Last Name: {{ employee.lastName }}</p>
    <p>Email: {{ employee.email }}</p>
    <p>Position: {{ employee.position }}</p>
    <p>Salary: {{ employee.salary }}</p>

    <router-link :to="{ name: 'employees' }">
      Back
    </router-link>
  </div>
</template>

<script>
import EmployeesService from '../../services/EmployeesService'

export default {
  data () {
    return {
      employee: {}
    }
  },

  async created () {
    try {
      const employeeId = this.$route.params.employeeId
      this.employee = (await EmployeesService.show(employeeId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>