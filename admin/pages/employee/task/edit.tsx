import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TaskForm } from '../../../components/forms/TaskForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit task
			</SlotSources.Title>
			<EditScope entity="Task(id=$id)" redirectOnSuccess="employee/task/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="employee/task/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<TaskForm />
			</EditScope>
		</>
	)
}
