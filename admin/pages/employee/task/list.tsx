import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Tasks
			</SlotSources.Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Task" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="employee/task/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="title" header="Title" />
				<DateCell field="dueDate" header="Due date" />
				<EnumCell options={{ pending: 'pending', completed: 'completed' }} field="status" header="Status" />
				<HasOneSelectCell field="employee" header="employee" options="User.name" />
			</DataGridScope>
		</>
	)
}
