import {Application, Context} from 'probot'

export = (app: Application) => {
    app.on('pull_request.opened', async (context: Context) => {
        const repo = context.payload.repository.name;
        const owner = context.payload.repository.owner.login;
        await context.github.pullRequests.update({
            owner,
            repo,
            number: context.payload.number,
            state: 'closed'
        })
    })
}

