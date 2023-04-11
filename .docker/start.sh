#!/bin/bash

npm install

echo "###### Building @core ######"

npm run build -w sbf-converter

# tail -f /dev/null

# npm run start:dev

echo "###### Building nestjs ######"

npm run build -w nestjs

echo "###### Running application ######"

npm run start:prod -w nestjs
