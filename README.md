# Static Site Generator
This is a simple ssg that converts markdown files into a "light" website.

## 👔 Features include:
- Upload folder
- Home page that lists all the .md files
- Navigation through the sidebar or through card list
- converted markdown screen

## 🏝 Branch Differences:
### master
- uses the 'uploads' folder in the code base as a temporary storage for uploading and reading of folder contents

### master-cloud
- uses Google Cloud Storage to upload and read files from

## 📋 App Preview
- The welcome screen allows users to drag-and-drop or select a folder for site generation.
If there were any preuploaded folders, a screen load/refresh would delete them but a new upload without reloading appends the files to the previously uploaded.

<img src="https://user-images.githubusercontent.com/61628746/218320171-f0d8d543-36cc-47b2-a422-289d98a9bc7e.jpeg " height="50%" width="70%"/>

- After uploading completes, a button is displayed that when clicked navigates users to the generated site's landing page. 

<img src="https://user-images.githubusercontent.com/61628746/218319438-ff828689-2e90-4233-b589-365281f856d0.jpeg" height="50%" width="70%"/>

- The landing page lists the converted files with .md extensions and offers navigation through a button or through the side menu. 

<img src="https://user-images.githubusercontent.com/61628746/218468799-3a252aed-3427-475f-ad2c-5565d24d1fd6.jpeg" height="50%" width="70%"/>

<img src="https://user-images.githubusercontent.com/61628746/218468833-da1943b0-ddbb-4968-8211-4d08958dc859.jpeg" height="50%" width="70%"/>

- Upon navigation, the converted file is displayed. 

<img src="https://user-images.githubusercontent.com/61628746/219219633-de8bebc6-36c1-4ad1-b760-757a4879823b.jpeg" height="50%" width="70%"/>

- If the uploaded folder does not contain md files, this screen is displayed

<img src="https://user-images.githubusercontent.com/61628746/218320144-2137a961-2a5b-41ec-ab8e-6294586c9cf8.jpeg"/>

## 📝References and Guides
- [Next.js tutorials](https://nextjs.org/docs/basic-features/pages) 
Numerous tutorials and blogs.
I had no idea how next.js works 😅😇

- [fs docs](https://node.readthedocs.io/en/latest/api/fs/)

- [Ben Awad's tutorial on SSGs](https://youtu.be/pY0vWYLDDco) and more

- [GCS docs](https://cloud.google.com/storage/docs/) and tutorials

## ▶ The demo

It doesn't quite work as expected in production, working on a workaround. Everything works well in the local environment though.
:)

## 🚀 Installation

Next.js requires **Node.js 14.6.0 or newer** and a **Mac, Windows or Linux OS**. You may check out their [getting started docs](https://nextjs.org/docs) for an up to date documentation.

 
 Clone this repo:
 
```

git clone https://github.com/thisgirlElan/Next_SSG.git

```

 Import dependencies 

- With yarn

```

yarn install

```

- With npm

```

npm install

```

### Prerequisites

- Setup a Google Cloud storage account and create a bucket.
- Ensure the bucket's authorization is set to public to enable easier reading, writing and deletion of files.
- You'll get a Json key for the credentials. Put it in the cloned repo's `Pages` folder
- Create a `.env.local` file in the root folder and put the values from the Json key in variables as such:


```

GOOGLE_CLOUD_PROJECT_TYPE= project type
GOOGLE_CLOUD_PROJECT_ID= project id
GOOGLE_CLOUD_PRIVATE_KEY_ID=  private key id
GOOGLE_CLOUD_PRIVATE_KEY= "private key"
GOOGLE_CLOUD_CLIENT_EMAIL= client email
GOOGLE_CLOUD_CLIENT_ID= client id
GOOGLE_CLOUD_AUTH_URI= auth uri
GOOGLE_CLOUD_TOKEN_URI= token uri
GOOGLE_CLOUD_AUTH_PROVIDER_X509_CERT_URL= provider cert url
GOOGLE_CLOUD_CLIENT_X509_CERT_URL= client cert url
GOOGLE_CLOUD_KEY={ Json Key content as is }

```

When hosting, set the same environment keys and values in the platform's environment variables since variables set in the codebase "cross-references" the keys e.g

`const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;`

- Add `key.json` and `.env.local` in `.gitignore`

Start local server

- With yarn

```
yarn dev

```

- With npm

```
npm run dev

```

After the command runs, open local host's port 3000 on your browser. 

```

http://localhost:3000 

```

## 👨‍💻 You're ready! Make it yours. 

- Tinker and develop!!🎉


