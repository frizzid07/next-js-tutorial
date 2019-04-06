import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>Welcome to my Blog</h1>
      <ul>
      	<PostLink title="Hello Next.js" />
      	<PostLink title="This is my blog page" />
      </ul>
    </Layout>
  )
}