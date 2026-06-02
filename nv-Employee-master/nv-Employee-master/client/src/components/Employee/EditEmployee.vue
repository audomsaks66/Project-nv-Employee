<template>
  <div>
    <h1>Edit Employee</h1>

    <form v-on:submit.prevent="editEmployee">

      <p>First Name:
        <input type="text" v-model="employee.firstName">
      </p>

      <p>Last Name:
        <input type="text" v-model="employee.lastName">
      </p>

      <p>Email:
        <input type="text" v-model="employee.email">
      </p>

      <p>Position:
        <input type="text" v-model="employee.position">
      </p>

      <p>Salary:
        <input type="text" v-model="employee.salary">
      </p>

      <p>
        <button type="submit">Update Employee</button>
      </p>

    </form>
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
  },

  methods: {
    async editEmployee () {
      try {
        await EmployeesService.put(this.employee)

        this.$router.push({
          name: 'employees'
        })

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>