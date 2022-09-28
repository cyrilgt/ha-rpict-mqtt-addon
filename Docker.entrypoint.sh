#!/bin/sh
set -e

MQTT_URL="mqtt://10.113.1.2:1883"
MQTT_USER="mqttrpi"
MQTT_PASSWORD="ztFMl28r0Q5gWNuJDKHSDU2xW4VdlGvdx401CLvP5id1BM6"
ABSOLUTE_VALUES=true
SENSOR_VALUE_THRESHOLD=0

if [ $1 == "node" ] && [ $2 == "index" ] && [ ${LOG_FORMAT} != "json" ]; then
  exec "$@" | ./node_modules/.bin/bunyan -L  -o short
else
  exec "$@"
fi
