# Phase 3: CLI Development - FRITZ!Box Control Tool

## Team Members
- Akinshola Akinade
- [Team members]

## Date
April 29, 2026 - Full Day Session

---

## Project Overview

Built a command-line tool in JavaScript (Node.js) to control the FRITZ!Box router through both serial (hardware) and HTTP (network) interfaces.

---

## Technology Stack

- **Language:** JavaScript (Node.js)
- **Libraries:**
  - `serialport` - Serial UART communication
  - `axios` - HTTP requests
  - `querystring` - Form data encoding

---

## Expansion Stages Completed

### ✅ Stage 0: Reboot via Serial (COMPLETE)

**Purpose:** Send reboot command through USB-to-TTL serial adapter

**Implementation:**
```javascript
const { SerialPort } = require('serialport');

const port = new SerialPort({
    path: '/dev/tty.SLAB_USBtoUART4',
    baudRate: 115200
});

port.write('reboot\n');
```

**Test Result:**
=== FRITZ!Box Stage 0: Serial Reboot ===
[+] Connected to /dev/tty.SLAB_USBtoUART4
[+] Serial port opened
[+] Reboot command sent!
[+] Connection closed

**Status:** ✅ Working!

---

### ✅ Stage 1: Reboot via HTTP (COMPLETE)

**Purpose:** Send reboot command through web API

**Implementation:**
```javascript
const axios = require('axios');

const response = await axios.post(
    'http://192.168.178.1/data.lua',
    'xhr=1&sid=9b114769a365438f&reboot=1',
    {
        headers: {
            'Authorization': 'AVM-SID 9b114769a365438f',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
);
```

**Test Result:**
=== FRITZ!Box Stage 1: HTTP Reboot ===
[+] Sending HTTP reboot to 192.168.178.1...
[+] Reboot command sent successfully!
[+] Response: <!DOCTYPE html>...

**Status:** ✅ Working!

---

## Project Structure
phase3-cli/
├── stage0_serial_reboot.js   ✅ Complete
├── stage1_http_reboot.js     ✅ Complete
├── package.json              (Project config)
├── package-lock.json         (Dependency lock)
└── node_modules/             (Libraries)

---

## Key Learnings

### Serial Communication
- Direct hardware access via UART
- No authentication required (physical security)
- Baud rate: 115200 (must match FRITZ!Box settings)
- One program can access serial port at a time

### HTTP API
- Session-based authentication (SID tokens)
- Form-urlencoded data format
- Authorization header required
- Can work remotely over network

### Connection to Phase 2
- Used session ID discovered in Phase 2: `9b114769a365438f`
- Used API endpoint from Phase 2: `/data.lua`
- Applied authentication mechanism learned in Phase 2

---

## Next Steps

- ⏳ Stage 2: Device information display
- ⏳ Stage 3: WLAN control (on/off, SSID/password)
- ⏳ Stage 4: Custom feature (network device list)

---

## Usage

```bash
# Install dependencies
npm install

# Stage 0: Serial reboot
node stage0_serial_reboot.js

# Stage 1: HTTP reboot
node stage1_http_reboot.js
```

---

## Commands Used

```bash
# Setup
npm init -y
npm install serialport axios

# Create files
nano stage0_serial_reboot.js
nano stage1_http_reboot.js

# Make executable
chmod +x stage0_serial_reboot.js
chmod +x stage1_http_reboot.js

# Test
node stage0_serial_reboot.js
node stage1_http_reboot.js
```
