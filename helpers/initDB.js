import mongoose from 'mongoose';

async function initDB(){
    if(mongoose.connections[0].readyState){
        console.log('DB is already connected');
        return;
    }
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', () => {
        console.log('connected to mongo instance');
    })
    mongoose.connection.on('error', (err) => {
        console.log('error connecting to mongo', err);
    })
}


export default initDB;