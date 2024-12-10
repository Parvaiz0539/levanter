const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```ping!```')
    const end = new Date().getTime()
    return await message.send('*pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
