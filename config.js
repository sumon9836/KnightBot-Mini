/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUy46jRhT9lai2tsYGYzBIHQVjjHnYxuAXjmZRNgWmeZoqwHhkaT4hirJqqT8gySaLLCLlb/IF/QkR7u6ZWSSTzq6qbuncc8+5934ASRpgpKMaCB9AlgclJKg5kjpDQADDwvNQDtrAhQQCAWw0a5OWBuVsHZpYm5wEy0HExj1/LbtHxR1xw/1GtqcBtcV34NoGWbGPgsNXAGG8X/J13zrbSLM6EGmTVu2V7lTjIqpfVIajTVamJK3G0uEOXBtEGORB4svZEcUoh5GOahMG+dvoOyO30rSdqCjjsXzi4KJnUJdeIg9H82KklpfZ/kz0kldEavo2+ue5xUasqJlqZ8gN3RJ1e7zOGaN79bD09J1/6Uc7w+/aufJCHwd+glzVRQkJSP1m3UXxYkLrfr+a2xUJl/2U3raUbdRZ9bcyNuc4CG254s7+mJbfqPty45wSj9cH6sk/6yeuf6nLSzRhti4JyGTd99gxeyxnMV19SdzMX3sl/D+6MzJBXOr4PaXTmcXOVFsZE2ch8ffD7UDiT9idUVFa+etTT3wb/dLQhwurNCyttXCmh+Pe8qOkzruhV6B0UB23Wq5fqGhU3vR4oQ9JkX+VJXE0zOqjfGjoS19ns22Kfdtg9cQSC8bmB+J5qckFtcRFuLtUipV1+unIVNn5fXet7Ayu0xp6TMhZUzcUo5m7hXnvuLi7VRSiWnWBQF3bIEd+gEkOSZAmzdtg0AbQLW10yBG5qQvEmqZkab5kJpY6dVszI++6mrIc0eFOUhkjNSmdGR3N1o5N70AbZHl6QBgjdxJgkub1FGEMfYSB8P37NkjQmTz71mTrUW3gBTkmq6TIohS6r6a+BuHhkBYJsevkIDUHlAOh+/kZERIkPm5kLBKYH45BiaQjJBgIHoww+lQgypELBJIX6NPQSqnb6D4YOrQ9ZDTQBvHNj8AFAuApvsvSNDNgOE6g+O/wu6qBhVn2LkEEtEECm9/g26fHh9+eHh/+fHr84cdvnh4f/nh6fPjl6fHh16fHh59fgr//9fEn0AbRDZni+vSA5WmWo/s99gbeBK6fimo4uIjAIMJAAJJuahgfJrK6YcIpoyii7IuSL4LPIrw207NbDiedp8nO2CvWClLb+aQ6VOIiirRuHa9KQh/EZLY5Bym9GNz9AwgQQGt6qjLOXoxgbQ581qfXOGT4TsGf3IGCT4GZiprS9zWGdzw29VUrozxrmC/2wdjcnbj1kZIc09vGkkhOjKoxIu1GUnXXZHNRGRzQl8kMeJE6sY2iRdia9bCVnNKQ4dmxGtRne78ovYLy4fFSnVN9R/cSvRV3z2PHXy87GnHkIyO20tluOqT2l5JmA0bd1v76Xnxu89uYRS/rLbh1YGNvc/UCdNsWLzb+p93PxJuu7F7bX2C87J9/meHhZl7hpUbb9DlcK2R9OQ4mU1HWdrY7zSKDcxNRu6yxc5qFJrhe37dBFkHipXkMBIDjPQRtkKdF0+Nq4qVfySSJqiqJ/qwpO4KYiJ/nZhnECBMYZ0CgOI5h+jxPMc+/zDzNJhAfgQB6cUTd2+D6N4fjwfSEBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
