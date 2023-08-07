// Import { Helmet } from 'react-helmet';
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

type Props = {
	description?: string
	children: React.JSX.Element | React.JSX.Element[]
	title?: string
}

const PageContainer = ({ title, description, children }: Props) => (
	<HelmetProvider>
		<div>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
			{children}
		</div>
	</HelmetProvider>
)

export default PageContainer
