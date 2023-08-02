import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { DotIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<UsersIcon />
				<>
					Employees
				</>
			</Stack>}
			to="admin/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<DotIcon />
				<>
					Tasks
				</>
			</Stack>}
			to="admin/task/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('employee')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<DotIcon />
				<>
					Tasks
				</>
			</Stack>}
			to="employee/task/list"
		/>
	</HasRole>
</Menu>)
