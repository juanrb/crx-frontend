import {
	Box,
	Chip,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'

const products = [
	{
		budget: '3.9',
		id: '1',
		name: 'Sunil Joshi',
		pbg: 'primary.main',
		pname: 'Elite Admin',
		post: 'Web Designer',
		priority: 'Low',
	},
	{
		budget: '24.5',
		id: '2',
		name: 'Andrew McDownland',
		pbg: 'secondary.main',
		pname: 'Real Homes WP Theme',
		post: 'Project Manager',
		priority: 'Medium',
	},
	{
		budget: '12.8',
		id: '3',
		name: 'Christopher Jamil',
		pbg: 'error.main',
		pname: 'MedicalPro WP Theme',
		post: 'Project Manager',
		priority: 'High',
	},
	{
		budget: '2.4',
		id: '4',
		name: 'Nirav Joshi',
		pbg: 'success.main',
		pname: 'Hosting Press HTML',
		post: 'Frontend Engineer',
		priority: 'Critical',
	},
]

// eslint-disable-next-line max-lines-per-function
const ProductPerformance = () => (
	<DashboardCard title="Product Performance">
		<Box sx={{ overflow: 'auto', width: { sm: 'auto', xs: '280px' } }}>
			<Table
				aria-label="simple table"
				sx={{
					mt: 2,
					whiteSpace: 'nowrap',
				}}
			>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography variant="subtitle2" fontWeight={600}>
								Id
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant="subtitle2" fontWeight={600}>
								Assigned
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant="subtitle2" fontWeight={600}>
								Name
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant="subtitle2" fontWeight={600}>
								Priority
							</Typography>
						</TableCell>
						<TableCell align="right">
							<Typography variant="subtitle2" fontWeight={600}>
								Budget
							</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map((product) => (
						<TableRow key={product.name}>
							<TableCell>
								<Typography
									sx={{
										fontSize: '15px',
										fontWeight: '500',
									}}
								>
									{product.id}
								</Typography>
							</TableCell>
							<TableCell>
								<Box
									sx={{
										alignItems: 'center',
										display: 'flex',
									}}
								>
									<Box>
										<Typography variant="subtitle2" fontWeight={600}>
											{product.name}
										</Typography>
										<Typography
											color="textSecondary"
											sx={{
												fontSize: '13px',
											}}
										>
											{product.post}
										</Typography>
									</Box>
								</Box>
							</TableCell>
							<TableCell>
								<Typography
									color="textSecondary"
									variant="subtitle2"
									fontWeight={400}
								>
									{product.pname}
								</Typography>
							</TableCell>
							<TableCell>
								<Chip
									sx={{
										backgroundColor: product.pbg,
										color: '#fff',
										px: '4px',
									}}
									size="small"
									label={product.priority}
								></Chip>
							</TableCell>
							<TableCell align="right">
								<Typography variant="h6">${product.budget}k</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	</DashboardCard>
)

export default ProductPerformance
