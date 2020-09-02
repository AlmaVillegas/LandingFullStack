import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema= new Schema({
    nombre: String,
    email: String,
    TipoEvento: String,
    Fecha: String,
    mensaje: String
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;