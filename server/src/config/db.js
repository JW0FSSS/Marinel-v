import mongoose from 'mongoose'

export async function connexion() {
    try {
        
        await mongoose.connect(process.env.DB).then(

            console.log('conexion database....')
        )
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error)
    }
}