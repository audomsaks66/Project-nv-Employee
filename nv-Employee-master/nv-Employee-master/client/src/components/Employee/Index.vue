<template>
  <div>
    <h1>Employees</h1>

    <router-link :to="{ name: 'employee-create' }">
      Create Employee
    </router-link>

    <table border="1">
      <tr>
        <th>ID</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Position</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>

      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.firstName }}</td>
        <td>{{ employee.lastName }}</td>
        <td>{{ employee.email }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.salary }}</td>

        <td>
          <router-link :to="{ name: 'employee-show', params: { employeeId: employee.id }}">
            Show
          </router-link>

          |

          <router-link :to="{ name: 'employee-edit', params: { employeeId: employee.id }}">
            Edit
          </router-link>

          |

          <button v-on:click="deleteEmployee(employee)">
            Delete
          </button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import EmployeesService from '../../services/EmployeesService'

export default {
  data () {
    return {
      employees: []
    }
  },

  async created () {
    this.employees = (await EmployeesService.index()).data
  },

  methods: {

    async deleteEmployee (employee) {

      //เพิ่ม dialog box ยืนยันการลบ
      let result = confirm("Want to delete?")
      if (!result) {
        return
      }
      

      try {
        await EmployeesService.delete(employee)
        this.refreshData()
      } catch (err) {
        console.log(err)
      }
    },

    async refreshData () {
      this.employees = (await EmployeesService.index()).data
    }
  }
}
</script>