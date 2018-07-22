const chalk = require('chalk')
const clear = require('clear')
const minimist = require('minimist')

const classes = require('./classes')
const codes = require('./codes')

const wrongFormat = (code) => !(/^[1-5]{1}\d{2}$/g).test(code)

const arg = process.argv[2]
if (wrongFormat(arg)) {
  console.log(`Error: ${arg} is not a valid status-code`)
  return 1
}

const code = codes[arg]
if (!code) {
  console.log(
    `${chalk.red.bold('Error:')} ${chalk.bold(arg)} is not a valid status-code`
  )
  return 1
}

const origin = "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"
const klass = classes[`${arg[0]}xx`]

console.log(chalk.bold(`${arg} ${code.name}\n`))
console.log(`${code.description}\n`)
console.log(`More info at ${origin}\n`)

// console.log(klass)

return 0
