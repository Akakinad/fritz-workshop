#!/usr/bin/env node

/**
 * Stage 0: Reboot FRITZ!Box via Serial UART
 */

const { SerialPort } = require('serialport');

// Configuration
const SERIAL_PORT = '/dev/tty.SLAB_USBtoUART4';
const BAUD_RATE = 115200;

/**
 * Send reboot command via serial connection
 */
async function rebootSerial() {
    console.log('=== FRITZ!Box Stage 0: Serial Reboot ===');
    
    try {
        // Open serial connection
        const port = new SerialPort({
            path: SERIAL_PORT,
            baudRate: BAUD_RATE
        });
        
        console.log(`[+] Connected to ${SERIAL_PORT}`);
        
        // Wait for port to open
        port.on('open', () => {
            console.log('[+] Serial port opened');
            
            // Send reboot command
            port.write('reboot\n', (err) => {
                if (err) {
                    console.error('[-] Error sending command:', err.message);
                    return;
                }
                
                console.log('[+] Reboot command sent!');
                
                // Close connection after 1 second
                setTimeout(() => {
                    port.close();
                    console.log('[+] Connection closed');
                }, 1000);
            });
        });
        
        // Handle errors
        port.on('error', (err) => {
            console.error('[-] Serial port error:', err.message);
        });
        
    } catch (error) {
        console.error('[-] Error:', error.message);
    }
}

// Run the function
rebootSerial();
