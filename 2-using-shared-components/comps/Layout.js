import Header from './Header'

const layoutStyle = {
  color: 'red',
  margin: 20,
  padding: 20,
  border: '1px solid black'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout