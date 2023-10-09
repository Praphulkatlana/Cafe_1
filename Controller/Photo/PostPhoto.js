import photoModel from "../../Model/PhotoModel.js";

const postPhoto=async(req,res)=>{
try {
    const photo=new photoModel({
        data:req.file.buffer,
        contentType:req.file.mimetype
    })

    const uploadPhoto=await photo.save()
    res.status(201).json(uploadPhoto)
} catch (error) {
    res.status(500).json({message: error});
}
}

export default postPhoto
    

// app.get('/image/:id', async (req, res) => {
//     try {
//       const image = await Image.findById(req.params.id);
  
//       if (!image) {
//         return res.status(404).send('Image not found');
//       }
  
//       res.contentType(image.contentType);
//       res.send(image.data);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });
  