<template>
<div>
<h1>Create Employee</h1>

<form v-on:submit.prevent="createEmployee">

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
<input type="number" v-model="employee.salary">
</p>

<p>
<button type="submit">Create Employee</button>
</p>

</form>
</div>
</template>

<script>
import EmployeesService from '../../services/EmployeesService'

export default {
data () {
return {
employee: {
firstName: '',
lastName: '',
email: '',
position: '',
salary: ''
}
}
},

methods: {
async createEmployee () {
try {
await EmployeesService.post(this.employee)

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