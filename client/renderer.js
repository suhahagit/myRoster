
class Renderer{

    renderPlayer(players){
        players.forEach(p => p.image = `https://nba-players.herokuapp.com/players/${p.lastName}/${p.firstName}`)
        const playersObj = {players}
        const source = $("#player-template").html()
        const template = Handlebars.compile(source)
        const playerHTML = template(playersObj)
        $('#player-container').empty().append(playerHTML)
        $("#input").val("")
    }
}
