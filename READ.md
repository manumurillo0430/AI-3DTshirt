# AI T-SHIRT DESIGN

AI T-Shirt Design is an adaptive application that allows users to customize and modify 3D T-shirt designs using AI capabilities. The application provides users with the ability to personalize their T-shirt design and download it as a picture.

🚀 Check out the live demo at: https://artai-3dtshirt.com

### Getting Started

To run the project locally, follow these steps:

1. Clone the repository


2. You will need obtain your OpenAI API key, please follow these steps:

   a. Log in to your OpenAI account at https://openai.com/.
   
   b. Navigate to the API section.
   
   c. Click on __Personal__ located at the top-right corner of the screen.
   
   d. Select __View API keys__ from the dropdown menu.
   
   e. In the API keys section, click on __+ Create new secret key__.
   
   f. Create a new secret key and copy it for later use.\


3. In the root folder of your server, create a .env file. Inside the .env file, add the following line:
```
OPENAI_KEY=***************
```
Replace the *************** with the API key you obtained in the previous step. This environment variable will allow your server to securely access the OpenAI API services.


4. Install dependencies for both client and server with:

```
  npm run install:both
```


5. Start both client and server with:
```
  npm run start:both
```

Now you should be able to access the application at http://localhost:3000. 

Enjoy!

[^1]:Please note that there may be a delay in our response time due to the AI server's response time.


