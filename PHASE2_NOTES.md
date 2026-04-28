---

## Network Devices API Discovery

### Endpoint: `/data.lua?page=netDev`

**Purpose:** Retrieve all connected devices on the network

**Response Structure:**
```json
{
  "landevice": [
    {
      "UID": "landevice5043",
      "name": "Akinsholas-MacBook-Air",
      "friendly_name": "Akinsholas-MacBook-Air",
      "ip": "192.168.178.22",
      "mac": "D2:DA:D1:A2:7A:A3",
      "active": "1",
      "online": "0",
      "speed": "1201",
      "flags": "wlan,randommac,requestclient",
      "connection": "AP:5G:0 (5GHz WiFi)",
      "dhcp": "1"
    }
  ]
}
```

### Devices Discovered:
1. **Akinshola's MacBook Air**
   - IP: 192.168.178.22
   - MAC: D2:DA:D1:A2:7A:A3 (randomized)
   - Connection: 5GHz WiFi (1201 Mbps)
   
2. **MacBook Pro** 
   - IP: 192.168.178.21
   - MAC: 52:49:A4:D5:FF:9A (randomized)
   - Connection: 5GHz WiFi (1201 Mbps)

3. **Unknown Device**
   - IP: 192.168.178.20
   - MAC: 9C:69:D3:66:19:99
   - Connection: Ethernet LAN:2 (1000 Mbps)

4. **FRITZ!Box itself**
   - IP: 192.168.178.1
   - MAC: 00:7A:A4:C4:70:7F
   - Multiple interfaces (LAN + WLAN)

### Key API Parameters Discovered:
- `iplist[]` - IPv4 and IPv6 addresses per device
- `link_list[]` - Connection topology (uplink/downlink)
- `wlan_UIDs` - WiFi interface identifiers
- `mesh_UIDs` - Mesh network topology
- `flags` - Device capabilities (wlan, ethernet, randommac)

### CLI Implementation Insight (Phase 3):
**To list network devices:**
```python
response = requests.post(
    'http://192.168.178.1/data.lua',
    data={'sid': session_id, 'page': 'netDev'}
)
devices = response.json()['landevice']
for device in devices:
    print(f"{device['name']}: {device['ip']} ({device['mac']})")
```

---
