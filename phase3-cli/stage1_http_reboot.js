#!/usr/bin/env node

/**
 * Stage 1: Reboot FRITZ!Box via HTTP API
 */

const axios = require('axios');
const querystring = require('querystring');

// Configuration
const FRITZBOX_HOST = '192.168.178.1';
const SESSION_ID = '9b114769a365438f';  // From Phase 2

/**
 * Send reboot command via HTTP API
 */
async function rebootHTTP() {
    console.log('=== FRITZ!Box Stage 1: HTTP Reboot ===');
    
    try {
        const url = `http://${FRITZBOX_HOST}/data.lua`;
        
        // Prepare request headers
        const headers = {
            'Authorization': `AVM-SID ${SESSION_ID}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        
        // Prepare request body (form data)
        const data = querystring.stringify({
            xhr: '1',
            sid: SESSION_ID,
            reboot: '1'
        });
        
        console.log(`[+] Sending HTTP reboot to ${FRITZBOX_HOST}...`);
        
        // Send POST request
        const response = await axios.post(url, data, { 
            headers: headers,
            timeout: 5000
        });
        
        // Check response
        if (response.status === 200) {
            console.log('[+] Reboot command sent successfully!');
            console.log(`[+] Response: ${response.data.substring(0, 100)}`);
            return true;
        } else {
            console.log(`[-] Failed with status code: ${response.status}`);
            return false;
        }
        
    } catch (error) {
        console.error('[-] Error:', error.message);
        return false;
    }
}

// Run the function
rebootHTTP();
