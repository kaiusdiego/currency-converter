#!/bin/bash

npm install

echo "###### Building @core ######"
npm run build -w sbf-converter

tail -f /dev/null

# npm run start:dev