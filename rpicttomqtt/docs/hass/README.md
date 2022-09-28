# Home Assistant integration

![logo](hass.png)

## Discovery

Home Assistant can automatically discover the RPICT sensors using [MQTT Discovery](https://www.home-assistant.io/docs/mqtt/discovery/).

?> Home Assistant Discovery is enabled by default. \
You can disable it by setting [`HASS_DISCOVERY=false`](configuration/)

?> Discovery can be customized using the env var [`HASS_DISCOVERY_PREFIX`](configuration/)

## Home Assistant Device

If you filter on `MQTT integrations`, you should see a `RPICT 11` (or other NodeId) device owning multiple sensors (1 sensor per measure, depending on your RPICT model).

![image](entities.png)
