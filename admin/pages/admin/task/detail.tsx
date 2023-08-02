import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Task detail
			</SlotSources.Title>
			<DetailScope entity="Task(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/task/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Tasks
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/task/edit(id: $entity.id)">
						Edit task
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="dueDate" label="Due date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="status" label="Status" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="employee.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
