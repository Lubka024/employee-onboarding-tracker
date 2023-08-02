import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TaskForm } from '../../../components/forms/TaskForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create task
			</SlotSources.Title>
			<CreateScope entity="Task" redirectOnSuccess="admin/task/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create task" labelSaved="Create task" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/task/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Tasks
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<TaskForm />
				</>
			</CreateScope>
		</>
	)
}
