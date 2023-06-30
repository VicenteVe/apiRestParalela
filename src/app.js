import  express  from "express"
import morgan from "morgan"
import pkg from "../package.json"
import voteRoutes from "./routes/voter.routes"

const path= require('path')
const app = express()
app.use(morgan('dev'));
app.set('pkg', pkg);
app.use(express.json())

app.get('/authors', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description
    })
})

app.use('/v1/voter',voteRoutes)

export default app