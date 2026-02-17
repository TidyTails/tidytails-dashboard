#!/usr/bin/env node
// Update Franklin's dashboard status
// Usage: node update-status.js <state> [task]
// States: idle, working, thinking

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const statusFile = path.join(__dirname, '../dashboard/status.json');
const state = process.argv[2] || 'idle';
const task = process.argv[3] || null;

const status = {
  state: state,
  currentTask: task,
  lastUpdate: new Date().toISOString()
};

fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
console.log(`Status updated: ${state}${task ? ' - ' + task : ''}`);

// Push to GitHub if working/thinking
if (state !== 'idle') {
  try {
    execSync('cd ' + path.join(__dirname, '../dashboard') + ' && git add status.json && git commit -m "Status: ' + state + '" && git push', { stdio: 'pipe' });
    console.log('Pushed to GitHub');
  } catch (e) {
    // Ignore git errors (nothing to commit, etc.)
  }
}
