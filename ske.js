const exec = require('child_process').exec
const args = process.argv.slice(2)

exec(['./bin/ske', ...args].join(' '), (error, stdout, stderr) => {
	if (error !== null) {
		console.error(error)
	}
	else if (stderr) {
		console.error(stderr)
	}
	else if (stdout) {
		console.log(stdout)
	}
	else {
		process.exit(0)
	}
})
