import Link from 'next/link'

const Index = () => (
	<div>
		<Link href="/about">
			<button title="About page">Go to about page</button>
		</Link>
		<p>This is the landing page</p>
	</div>
)

export default Index