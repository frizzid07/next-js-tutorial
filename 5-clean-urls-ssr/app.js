const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const server = next({dev})
const handle = server.getRequestHandler()

server
	.prepare()
	.then(() => {
		const app = express()

		app.get('/p/:id', (req, res) => {
			const actualPage = '/post'
			const queryParams = {title: req.params.id}
			server.render(req, res, actualPage, queryParams)
		})

		app.get('*', (req, res) => {
			return handle(req, res)
		})

		app.listen(3000, err => {
			if (err) throw err
			console.log('Server active on port 3000')
		})
	})

	.catch(ex => {
		console.error(ex.stack)
		process.exit(1)
	})