// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false
  }
}

const readFile = (req, saveLocally = false) => {
  const options = formidable.Options = {};

  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), 'pages/api/uploads');
    options.filename = (name, ext, path, form) => {
      const filename = path.originalFilename;

      return filename;
    }
  }

  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err)
      }
      resolve({ fields, files })
    })
  })
}

const handler = async (req, res) => {
  try {
    fs.readdir(path.join(process.cwd() + "/pages", "/api", "/uploads"), (err) => {
    res.status(400).json({error: err});
  });
  } catch (error) {
    fs.mkdir(path.join(process.cwd(), '/pages' + '/api' + '/uploads'));
    res.status(502).json({error});
  }
  await readFile(req, true);
  res.status(200).json({ success: "ok" });
  return;
};

export default handler;

