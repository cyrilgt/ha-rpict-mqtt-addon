/* eslint no-underscore-dangle: ["error", { "allow": ["__get__", "__set__"] }] */

const rewire = require('rewire');
const mqttAsync = require('async-mqtt');

mqttAsync.connectAsync = jest.fn(() => {
});
const mqtt = require('./index');

test('connect should be called as expected', async () => {
    const moduleToTest = rewire('./index');
    moduleToTest.__set__('client', {
        publish: jest.fn(() => {
        }),
    });
    await mqtt.connect();
    expect(mqttAsync.connectAsync).toHaveBeenCalledWith('mqtt://localhost:1883', {});
});

test('disconnect should be called as expected', async () => {
    const moduleToTest = rewire('./index');
    moduleToTest.__set__('client', {
        end: jest.fn(() => {
        }),
    });
    await moduleToTest.disconnect();
    expect(moduleToTest.__get__('client').end).toHaveBeenCalledTimes(1);
});
