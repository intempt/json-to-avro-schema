# JSON to AVRO schema

Converts JSON-schema definitions into Avro definitions.

## Install
To run converter you need to have `npm` and `node` installed, and also need
to install use next command with administrator rights:

`npm install -g`

# Using tool

To run json to avro schema converter use next command:

`json-to-avro -j example.json -a avro.json`

To include `"display": true` on all fields add:

`-d true`

## Test

    npm test

To run a single test, using the name of the sample:

    ONLY=optional npm test

## TODO

* Handle `anyOf` and `allOf`.
