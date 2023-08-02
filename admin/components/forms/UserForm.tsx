import { Component, DateField, HiddenField, SelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="jobTitle" label="Job title" />
	<DateField field="startDate" label="Start date" />
	<SelectField
		field="onboardingStatus"
		label="Onboarding status"
		required
		options={[{ value: 'inProgress', label: 'inProgress' }, { value: 'completed', label: 'completed' }]}
		allowNull={false}
	/>
</>)
