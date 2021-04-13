#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
const yargs = require('yargs');
const converter = require('./converter')


const argv = yargs
	.option('avro', {
		alias: 'a',
		description: 'Output AVRO schema file',
		type: 'string',
	})
	.option('json', {
		alias: 'j',
		description: 'Input JSON schema file',
		type: 'string',
	})
	.help()
	.alias('help', 'h')
	.argv;

if (!argv.avro || !argv.json) {
	console.error('Both --json and --avro command required. Try --help for more information')
	return
}

console.log(chalk.blue(
	figlet.textSync('Intempt', { horizontalLayout: 'full' })
))

console.log('\n\nStarting converting JSON schema to AVRO schema...');

rawdata = fs.readFileSync(argv.json);
schema = JSON.parse(rawdata);

avro = converter.convert(schema)
data = JSON.stringify(avro, undefined, 4)
fs.writeFile(argv.avro, data, function (err, result) {
	if (err) console.log('Error', err);
});

console.log('Converting done!')