import googleService from '../service/google.service';
import Validate from '../service/Validation.service';
import uploadService from '../service/upload.service';
const fs = require('fs');
const drive = googleService.config()

class UploadController{

    async upload(req: any, res: any){
        if(req.file)
        {
            if(Validate.validateFile(req.file))
            {
                const response = await drive.files.create({
                    requestBody: {
                      name:  req.file.originalname,
                      mimeType: 'image/jpg',
                    },
                    media: {
                      mimeType: 'image/jpg',
                      body: fs.createReadStream(req.file.path),
                    },
                  });
                //get link file
                const link = await uploadService.getLink(response.data.id, drive)
                await uploadService.deleteTempFile(req.file)
                res.json({url: link})
            }
            else
            {
                res.json({status:400, error:"invalid file"});     
            }
        }
        else
        {
            res.json({status:400, error:"invalid file"});
        }
    }
    async deleteFile(req: any, res: any) {
        try {
          const fileID = req.params.fileID;
          await drive.files.delete({
            fileId: fileID,
          });
         res.sendStatus(200);
        } catch (error) {
          console.log(error);
          res.sendStatus(400)
        }
      }
      
}

export default new UploadController;