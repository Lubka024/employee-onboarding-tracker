import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				User detail
			</SlotSources.Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="employee/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="employee/user/edit(id: $entity.id)">
						Edit user
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="jobTitle" label="Job title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="startDate" label="Start date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="onboardingStatus" label="Onboarding status" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Tasks
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Task[employee.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="employee/task/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
							<DateCell field="dueDate" header="Due date" />
							<EnumCell options={{ pending: 'pending', completed: 'completed' }} field="status" header="Status" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
