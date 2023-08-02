import { SchemaDefinition as def } from '@contember/schema-definition'


export const OnboardingStatus = def.createEnum('inProgress', 'completed')
export const TaskStatus = def.createEnum('pending', 'completed')
