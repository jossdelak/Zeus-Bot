const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIXE ="!";

var dispatcher;
var i;

function sendError(message, description){
    message.channel.send({embed:{
        color: 15158332,
        description: '' +description
    }});
}

function style(message, description){
    message.channel.send({embed:{
        color: 15478504,
        description: '' +description
    }});
}

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.on('ready', function() {
    console.log("I'm ready !");
});

bot.on('message', message=>{
    if(message.content[0] === PREFIXE){

        if(message.content === '!help'){
            style(message,"**!help\n!replique \n!play nico \n!play UI \n!stop**");
        }
        let splitMessage = message.content.split(" ");
        
        if(splitMessage[0] === '!replique'){
            i = entierAleatoire(0,18);
            if(message.member.voiceChannel){
                message.member.voiceChannel.join().then(connection =>{
                    if(i === 0){
                        dispatcher = connection.playFile("./son/replique_0.flv");              //replique 0
                    }
                    else if (i===1){
                        dispatcher = connection.playFile("./son/replique_1.flv");               //replique 1
                    }
                    else if (i===2){
                        dispatcher = connection.playFile("./son/replique_2.flv");               //replique 2
                    }
                    else if (i===3){
                        dispatcher = connection.playFile("./son/replique_3.flv");               //replique 3
                    }
                    else if (i===4){
                        dispatcher = connection.playFile("./son/replique_4.flv");               //replique 4
                    }
                    else if (i===5){
                        dispatcher = connection.playFile("./son/replique_5.flv");               //replique 5
                    }
                    else if (i===6){
                        dispatcher = connection.playFile("./son/replique_6.flv");               //replique 6
                    }
                    else if (i===7){
                        dispatcher = connection.playFile("./son/replique_7.flv");               //replique 7
                    }
                    else if (i===8){
                        dispatcher = connection.playFile("./son/replique_8.flv");               //replique 8
                    }
                    else if (i===9){
                        dispatcher = connection.playFile("./son/replique_9.flv");               //replique 9
                    }
                    else if (i===10){
                        dispatcher = connection.playFile("./son/replique_10.flv");               //replique 10
                    }
                    else if (i===11){
                        dispatcher = connection.playFile("./son/replique_11.flv");               //replique 11
                    }
                    else if (i===12){
                        dispatcher = connection.playFile("./son/replique_12.flv");               //replique 12
                    }
                    else if (i===13){
                        dispatcher = connection.playFile("./son/replique_13.flv");               //replique 13
                    }
                    else if (i===14){
                        dispatcher = connection.playFile("./son/replique_14.flv");               //replique 14
                    }
                    else if (i===15){
                        dispatcher = connection.playFile("./son/replique_15.flv");               //replique 15
                    }
                    else if (i===16){
                        dispatcher = connection.playFile("./son/replique_16.flv");               //replique 16
                    }
                    else if (i===17){
                        dispatcher = connection.playFile("./son/replique_17.flv");               //replique 17
                    }
                    else if (i===18){
                        dispatcher = connection.playFile("./son/replique_18.flv");               //replique 18
                    }
                    dispatcher.on('error', e =>{
                        console.log(e);
                    });

                    dispatcher.on('end', e =>{
                        dispatcher == undefined
                        message.member.voiceChannel.leave();
                        console.log('fin du son');
                    });
                }).catch(console.log);
            }
            else{
                sendError(message,"Erreur, vous devez rejoindre un channel vocal");
            }
        }

        if(splitMessage[0] === '!shine'){
            if(message.member.voiceChannel){
                message.member.voiceChannel.join().then(connection =>{
                        dispatcher = connection.playFile("./son/shine.flv");  
                        dispatcher.on('error', e =>{
                            console.log(e);
                        });
    
                        dispatcher.on('end', e =>{
                            dispatcher == undefined
                            message.member.voiceChannel.leave();
                            console.log('fin du son');
                        });
                    }).catch(console.log);
            }
        }

        if(splitMessage[0] === '!play'){
            if(splitMessage.length === 2){
                if(splitMessage[1]==='UI'){
                    if(message.member.voiceChannel){
                        message.member.voiceChannel.join().then(connection =>{
                            dispatcher = connection.playFile("./son/UI.flv");              //Son ultra instinc
    
                            dispatcher.on('error', e =>{
                                console.log(e);
                            });
    
                            dispatcher.on('end', e =>{
                                dispatcher == undefined
                                message.member.voiceChannel.leave();
                                console.log('fin du son');
                            });
                        }).catch(console.log);
                    }
                    else{
                        sendError(message,"Erreur, vous devez rejoindre un channel vocal");
                    }
                }

                if(splitMessage[1]==='nico'){
                    message.channel.sendFile("./image/nico.gif");
                    if(message.member.voiceChannel){
                        message.member.voiceChannel.join().then(connection =>{
                            dispatcher = connection.playFile("./son/nico.flv");                // Nico Nico Niiiii
    
                            dispatcher.on('error', e =>{
                                console.log(e);
                            });
    
                            dispatcher.on('end', e =>{
                                dispatcher == undefined
                                message.member.voiceChannel.leave();
                                console.log('fin du son');
                            });
                        }).catch(console.log);
                    }
                    else{
                        sendError(message,"Erreur, vous devez rejoindre un channel vocal");
                    }
                }
            }   
        }
        else if(splitMessage[0] === '!stop'){
            if(dispatcher !== undefined){
                message.member.voiceChannel.leave();
            }
        }
    }

});

bot.login(process.env.TOKEN) // Token du bot
