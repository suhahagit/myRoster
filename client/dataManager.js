class dataManager {
    constructor() {
        this.data
    }

    players() {
        const teamName = $('#input').val()
        $.get(`teams/${teamName}`, (data) =>  {
            this.data = data
        })
    }
}