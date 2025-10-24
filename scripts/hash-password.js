#!/usr/bin/env node

/**
 * Password Hashing Helper for Sanity Studio
 *
 * This script generates bcrypt password hashes for client accounts.
 *
 * Usage:
 *   node scripts/hash-password.js "your-password"
 *
 * Copy the generated hash and paste it into the client's passwordHash field in Sanity Studio.
 */

const bcrypt = require('bcryptjs')

const password = process.argv[2]

if (!password) {
  console.error('❌ Error: Please provide a password as an argument')
  console.log('\nUsage:')
  console.log('  node scripts/hash-password.js "your-password"')
  console.log('\nExample:')
  console.log('  node scripts/hash-password.js "SecurePass123!"')
  process.exit(1)
}

async function hashPassword() {
  try {
    console.log('🔐 Generating password hash...\n')

    const hash = await bcrypt.hash(password, 10)

    console.log('✅ Password hash generated successfully!\n')
    console.log('📋 Copy this hash to the passwordHash field in Sanity Studio:')
    console.log('━'.repeat(80))
    console.log(hash)
    console.log('━'.repeat(80))
    console.log('\n📝 Instructions:')
    console.log('1. Go to Sanity Studio (http://localhost:3333)')
    console.log('2. Create or edit a Client document')
    console.log('3. Paste this hash into the "passwordHash" field')
    console.log('4. Save the document')
    console.log('5. The client can now log in with their email and password\n')

  } catch (error) {
    console.error('❌ Error generating hash:', error.message)
    process.exit(1)
  }
}

hashPassword()
