import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { employeeRole, personIdEmployeeVariable } from './acl'
import { TaskStatus } from './enum'
import { User } from './User'


@acl.allow(employeeRole, {
	when: { employee: { personId: personIdEmployeeVariable } },
	read: true,
	update: true,
})
export class Task {
	title = def.stringColumn()
	description = def.stringColumn()
	dueDate = def.dateColumn()
	status = def.enumColumn(TaskStatus).notNull()
	employee = def.manyHasOne(User, 'tasks')
}
