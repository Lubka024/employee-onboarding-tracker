import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { employeeRole, personIdEmployeeVariable } from './acl'
import { OnboardingStatus } from './enum'
import { Task } from './Task'

@acl.allow(employeeRole, {
	when: { personId: personIdEmployeeVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	jobTitle = def.stringColumn()
	startDate = def.dateColumn()
	onboardingStatus = def.enumColumn(OnboardingStatus).notNull()
	tasks = def.oneHasMany(Task, 'employee')
}
