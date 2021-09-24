import {Application, Context} from 'probot'

export = (app: Application) => {
    app.on('pull_request.opened', async (context: Context) => {
        const repo = context.payload.repository.name;
        const owner = context.payload.repository.owner.login;
    })
}

