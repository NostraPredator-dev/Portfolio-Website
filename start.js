const { spawn } = require('child_process');
const { existsSync } = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Check if all required email environment variables are set
function checkEmailEnvVars() {
  const requiredVars = ['EMAIL_USER', 'EMAIL_PASS'];
  let allSet = true;
  
  console.log(`${colors.cyan}Checking email configuration:${colors.reset}`);
  
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      console.log(`${colors.red}✘ ${varName} is not set${colors.reset}`);
      allSet = false;
    } else {
      console.log(`${colors.green}✓ ${varName} is set${colors.reset}`);
    }
  }
  
  // EMAIL_TO is optional but recommended
  if (!process.env.EMAIL_TO) {
    console.log(`${colors.yellow}⚠ EMAIL_TO is not set (will use EMAIL_USER as default)${colors.reset}`);
  } else {
    console.log(`${colors.green}✓ EMAIL_TO is set${colors.reset}`);
  }
  
  return allSet;
}

// Start a child process with output streaming to console
function startProcess(command, args, name, color) {
  console.log(`${color}Starting ${name}...${colors.reset}`);
  
  const child = spawn(command, args, { 
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true
  });
  
  child.stdout.on('data', (data) => {
    const lines = data.toString().split('\n');
    for (const line of lines) {
      if (line.trim()) {
        console.log(`${color}[${name}] ${colors.reset}${line}`);
      }
    }
  });
  
  child.stderr.on('data', (data) => {
    const lines = data.toString().split('\n');
    for (const line of lines) {
      if (line.trim()) {
        console.log(`${color}[${name}] ${colors.red}${line}${colors.reset}`);
      }
    }
  });
  
  child.on('close', (code) => {
    if (code !== 0) {
      console.log(`${color}[${name}] ${colors.red}Process exited with code ${code}${colors.reset}`);
    } else {
      console.log(`${color}[${name}] ${colors.green}Process exited successfully${colors.reset}`);
    }
  });
  
  return child;
}

// Main function to start all services
async function main() {
  console.log(`${colors.green}Starting NostraPredator's Portfolio...${colors.reset}`);
  
  // Start frontend/Vite server
  const frontendProcess = startProcess('npm', ['run', 'dev'], 'Frontend', colors.magenta);
  
  // Start email service if email environment variables are configured
  if (checkEmailEnvVars()) {
    console.log(`${colors.green}Email configuration is valid, starting email service...${colors.reset}`);
    const emailProcess = startProcess('node', ['emailService.js'], 'Email Service', colors.cyan);
    
    // Optional: Send a test email on startup
    console.log(`${colors.yellow}Sending test email to verify configuration...${colors.reset}`);
    startProcess('node', ['test-email.js'], 'Test Email', colors.yellow);
  } else {
    console.log(`${colors.red}Email configuration is incomplete. Email functionality will not work.${colors.reset}`);
    console.log(`${colors.yellow}Please set the required environment variables to enable email functionality.${colors.reset}`);
  }
  
  console.log(`${colors.green}All services started successfully!${colors.reset}`);
  console.log(`${colors.yellow}Press Ctrl+C to stop all services${colors.reset}`);
}

// Run the main function
main().catch(err => {
  console.error(`${colors.red}Error starting services:${colors.reset}`, err);
  process.exit(1);
});