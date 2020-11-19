
const express = require('express')
const router = express.Router()
const urllib = require('urllib')

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

let leagueData
const dreamTeam = []

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, response) {
    if (err) {
        throw err; //you need to handle error
    }
    leagueData = JSON.parse(data).league.standard
})

router.get('/teams/:teamName', function (req, res) {
    const teamName = req.params.teamName
    const teamId = teamToIDs[teamName]
    const team = leagueData.filter(p => p.teamId === teamId && p.isActive)
                            .map(p => {
                                return {
                                    firstName: p.firstName,
                                    lastName: p.lastName,
                                    jersey: p.jersey,
                                    pos: p.pos
                                }
                            })
    res.send(team)
})

router.put('/team', function (req, res) {
    //{teamName: {name}, teamId: {id}}
    const teamName = req.body.teamName
    teamToIDs[teamName] = req.body.teamId
    res.end()
})

router.get('/dreamTeam', function (req, res) {
    res.send(dreamTeam)
})

router.post('/roster', function (req, res) {
    const data = JSON.parse(JSON.stringify(req.body))
    if (dreamTeam.length <= 4) {
        dreamTeam.push(data)
    }
    res.end()
})

module.exports = router