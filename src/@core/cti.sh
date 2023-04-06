#!/bin/sh

npm run cti create './src/@seedwork/application' -- -i '*spec.ts' -b && 
npm run cti create './src/@seedwork/domain' -- -i '*spec.ts' -e 'tests' -b && 
npm run cti create './src/@seedwork/infra' -- -i '*spec.ts' -i 'migrator-cli.ts' -b && 

npm run cti create './src/currency/application' -- -i '*spec.ts' -b && 
npm run cti create './src/currency/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/currency/infra' -- -i '*spec.ts' -b