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
- _Next.js tutorials_
Numerous tutorials and blogs.
I had no idea how next.js works 😅😇

- [fs docs](https://node.readthedocs.io/en/latest/api/fs/)

- [Ben Awad's tutorial on SSGs](https://youtu.be/pY0vWYLDDco) and more

- [GCS docs](https://cloud.google.com/storage/docs/) and tutorials

## ▶ The demo

Use this link to navigate: [SSG](https://localhost:3000) ~~to be live implemented~~.

## 🚀 Installation
 Follow the documentation on [Next.js](https://nextjs.org/docs) to set up environment and get started.
 
 Clone this repo:
 
```

git clone https://github.com/thisgirlElan/static-site-generator.git

```

 Import dependencies and run local server

- With yarn

```
yarn install
yarn dev

```

- With npm

```
npm install
npm run dev

```

After the commands run, open local host's port 3000 on your browser. 

```

http://localhost:3000 

```


## 👨‍💻 You're ready! 

- Tinker and develop!!🎉


