import { AclDefinition as acl } from '@contember/schema-definition'


export const employeeRole = acl.createRole('employee', { stages: '*', s3: { ['**']: { upload: true, read: true } } })
export const personIdEmployeeVariable = acl.createPredefinedVariable('personId', 'personID', employeeRole)
