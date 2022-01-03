const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
class uploadService{

    async getLink(fileID: any, drive: any){
        try {
            const fileId = fileID;
            await drive.permissions.create({
              fileId: fileId,
              requestBody: {
                role: 'reader',
                type: 'anyone',
              },
            });
        
            const result = await drive.files.get({
              fileId: fileId,
              fields: 'webViewLink',
            });
            return result.data
          } catch (error) {
            console.log(error);
          }
    }

   
    async  deleteTempFile(file: any)
    {
    await unlinkFile(file.path);
    }

}

export default new uploadService