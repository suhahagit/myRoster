class dataManager {
    constructor() {
        this.data
        this.dream
    }

    players() {
        const teamName = $('#input').val()
        $.get(`teams/${teamName}`, (data) =>  {
            this.data = data
        })
    }

    dreamTeam() {
        $.get(`/dreamTeam`, (data) =>  {
            this.dream = data
        })
    }

    addDreamPlayer(player){
        const newPlayer = {}
        newPlayer.lastName = $(player).find('div').data().id
        newPlayer.firstName = $(player).find('.firstName')[0].innerHTML
        newPlayer.jersey = $(player).find('.jersey')[0].innerHTML
        newPlayer.image = $(player).find('.image')[0].src
        newPlayer.pos = $(player).find('.pos')[0].innerHTML
        $.post('/roster', newPlayer)
    }
}