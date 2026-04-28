# Phase 1: Hardware Reverse Engineering

## Team Members
- Akinshola Akinade
- [Partner name]

## Serial Connection Setup
- **Device:** `/dev/tty.SLAB_USBtoUART`
- **Baud rate:** 115200
- **Terminal:** BusyBox v1.36.1 (ash shell)
- **TTY:** `/dev/ttyAMA0`
- **Connection tool:** screen

## Access Level
- ✅ **ROOT ACCESS ACHIEVED**
- ✅ No password required on serial console
- ✅ Full filesystem access

## System Information

### Commands to document:
(Run these in serial terminal and paste outputs here)


# Phase 1: Hardware Reverse Engineering - FRITZ!Box Workshop

## Team Members
- Akinshola Akinade
- [Partner name]

## Date
April 28, 2026 - Morning Session

---

## Serial Connection Setup

### Hardware
- **Serial Adapter:** USB-to-TTL (CP210x chipset)
- **Mac Device:** `/dev/tty.SLAB_USBtoUART`
- **Baud Rate:** 115200
- **Connection Tool:** `screen`

### Connection Command
```bash
screen /dev/tty.SLAB_USBtoUART 115200
```

### Access Achievement
✅ **ROOT SHELL ACCESS** - No password required!  
✅ **Terminal:** BusyBox v1.36.1 (ash shell)  
✅ **TTY:** `/dev/ttyAMA0`

---

## System Information

### Device Identity
- **Hostname:** `HELLO_42Berlin` (customized for workshop)
- **Kernel:** Linux 4.19.183 #1 SMP PREEMPT 2025-08-21
- **Architecture:** ARMv7l

### CPU Details
- **Processor:** ARMv7 Cortex-A7 (rev 5)
- **Cores:** 3 processors (0, 1, 2)
- **Features:** NEON, VFPv4, Thumb-2, Hardware Division
- **BogoMIPS:** 100.00 per core

### Memory
- **Total RAM:** 433 MB (433224 kB)
- **Free RAM:** 181 MB (181780 kB)
- **Available:** 278 MB (278336 kB)
- **Swap:** None configured

### Network Interfaces
- **lan:** 192.168.178.1/24 (main LAN)
- **guest:** 192.168.179.1/24 (guest WiFi)
- **wl0:** WiFi 2.4GHz interface
- **wl1:** WiFi 5GHz interface
- **lo:** 127.0.0.1 (loopback)

---

## File System Analysis

### Mounted Filesystems
/dev/root       → /              (squashfs, read-only)
devtmpfs        → /dev           (tmpfs, read-write)
tmpfs           → /var           (tmpfs, read-write)
/dev/ubi0_1     → /var/media/ftp (ubifs, read-write)

### Key Configuration Files (`/var/flash/`)
- **SSL Certificates:** `websrv_ssl_cert.pem`, `letsencrypt_cert.pem`
- **Network:** `wlan.cfg`, `vpn.cfg`, `broadband.cfg`
- **VoIP:** `voip.cfg`, `telefon_misc`
- **Smart Home:** `aha.cfg`, `ahadect.cfg`
- **User Data:** `user.cfg`, `phonebook`, `calllog`

---

## Running Services

### Key Processes
- **configd** - Configuration daemon
- **ctlmgr** - Control manager (web interface backend)
- **upnpd** - UPnP daemon
- **dsld** - DSL daemon
- **wland** - WLAN daemon
- **telefon** - Telephony service
- **voipd** - VoIP daemon
- **multid** - DHCP server

---

## Interesting Discoveries

### LED Control Commands Available
Found extensive LED control via `/usr/bin/led-ctrl`:
- Temperature warnings
- WiFi status
- DECT status
- Power LED control
- Socket control
- LTE indicators

### Security Note
- ⚠️ **No password on serial console!**
- ⚠️ **Full root access via hardware**
- ⚠️ **SSL private keys accessible in `/var/flash/`**

---

## Next Steps for Phase 2
- Access web interface at `http://192.168.178.1`
- Analyze HTTP API calls using browser DevTools
- Map serial commands to web interface actions
- Identify authentication mechanisms

---

## Commands Used
```bash
# System info
uname -a
cat /proc/cpuinfo
cat /proc/meminfo
hostname

# Network
ifconfig
mount

# File exploration
ls -la /var/flash/
ps

# Connection
screen /dev/tty.SLAB_USBtoUART 115200
```
