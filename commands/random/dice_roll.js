const commando = require("discord.js-commando")

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "Roll",
            description: "Rolls a die."
        });
    }
    
    async run(message, args) {
        var roll = Math.floor(math.random() * 6) + 1;
        message.channel.sendMessage("You rolled a " + roll)
    }
}

module.exports = DiceRollCommand;
