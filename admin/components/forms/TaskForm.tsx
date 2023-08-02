import { Component, DateField, SelectField, TextField } from '@contember/admin'

export const TaskForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="dueDate" label="Due date" />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'completed', label: 'completed' }]}
		allowNull={false}
	/>
	<SelectField field="employee" label="Employee" lazy options="User.name" allowNull />
</>)
