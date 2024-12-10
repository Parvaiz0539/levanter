const { bot } = require('../lib/')

bot(
  {
    pattern: 'plng ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```ruk yar!```')
    const end = new Date().getTime()
    return await message.send('*ye le dekh!*\n ```' + (end - start) + '``` *ms*')
  }
)
