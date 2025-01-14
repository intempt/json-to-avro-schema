const jsonSchemaAvro = require('../src/converter')
const assert = require('assert')
const fs = require('fs')

describe('index', () => {

	describe('convert()', () => {
		const sampleDir = './test/samples'
		const testDirs = fs.readdirSync(sampleDir)

		testDirs.forEach(dir => {
			if(process.env.ONLY && dir != process.env.ONLY){
				return
			}

			describe(dir, () => {
				const inJson = require(`../${sampleDir}/${dir}/input.json`)
				const expected = require(`../${sampleDir}/${dir}/expected.json`)
				let result

				before(() => {
					result = jsonSchemaAvro.convert(inJson)
				})

				it('converts to avro', () => {
					//console.log(JSON.stringify(result, null, 2))
					assert.deepEqual(result, expected)
				})
			})
			
		})

	})
})
