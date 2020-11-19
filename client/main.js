
const manager = new dataManager()
const renderer = new Renderer()

const defaultImage = function(img){
    img.src = 'bbb.png'
    $(img).css('height','254px')
    $(img).css('width','350px')
}

const displayPlayers = function(){
    manager.players()
    setTimeout(function(){
        renderer.renderPlayer(manager.data)}, 500)
}

const requestTeam = function(){
    manager.dreamTeam()
    setTimeout(function(){
        renderer.renderPlayer(manager.dream)}, 500)
}

const addPlayer = function(player){
    manager.addDreamPlayer(player)
}

