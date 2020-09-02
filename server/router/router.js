import express from 'express';
const router = express.Router();

// importar el modelo 
import Contact from '../model/model';


  // Get con todos los documentos
  router.get('/', async(req, res) => {
    try {
        const notaDb= await Contact.find();
        res.json(notaDb);
      } catch (error) {
        return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
        })
      }
    });

// Agregar 
router.post('/contact', async(req, res) => {
  const body = req.body;  
  try { 
    const notaDB = await Contact.create(body);
    res.status(200).json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

//Eliminar
router.delete('/contact/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const notaDb = await Contact.findByIdAndDelete({_id});
      if(!notaDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(notaDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

module.exports = router;