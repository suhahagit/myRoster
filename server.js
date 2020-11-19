
const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'client')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

// app.get('/', function(req, res){
// res.send('server up & running')
// })
let leagueData

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, response) {
    if (err) {
        throw err; // you need to handle error
    }
    leagueData = JSON.parse(data).league.standard
    //console.log(leagueData)
})

app.get('/teams/:teamName', function (req, res) {
    const teamName = req.params.teamName
    const teamId = teamToIDs[teamName]
    //console.log(teamId)
    const team = []
    //console.log(info.league.standard[0].firstName)//.league.standard[0].firstName)
    // standard.filter(s => s.teamId == teamId)
    //         .forEach(s => team.push(player))
    for (let player of leagueData) {
        const playerObj = {}
        if (player.teamId === teamId && player.isActive) {
            playerObj.firstName = player.firstName
            playerObj.jersey = player.jersey
            playerObj.pos = player.pos
            playerObj.lastName = player.lastName
            team.push(playerObj) //name num pic pos
        }
    }

    //console.log(team)
    res.send(team)
    //res.send(info.league.standard[0].firstName)
})

const port = 3000
app.listen(port, function () {
    console.log('server running')
})