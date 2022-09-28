#!/bin/sh
set -e

if [ $1 == "node" ] && [ $2 == "index" ] && [ ${LOG_FORMAT} != "json" ]; then
  exec "$@" | ./node_modules/.bin/bunyan -L  -o short
else
  exec "$@"
fi