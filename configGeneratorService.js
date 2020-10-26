var config = require('./config/config.json')

function getConfigByIP(ip) {
    for (g = 0; g < config.servergroups.length; g++) {
        for (s = 0; s < config.servergroups[g].servers.length; s++) {
            if (config.servergroups[g].servers[s].ip == ip) {
                return config.servergroups[g]
            }
        }
    }
}

exports.getConfigByIP=getConfigByIP