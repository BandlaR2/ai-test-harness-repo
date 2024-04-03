 # Setting Up Deployment with Netlify


### Create a Netlify Account:
                     If you haven't already, sign up for a Netlify account at https://www.netlify.com/. You can sign up using your email or GitHub account.

### Create a GitHub Repository:
                                         If you haven't already, create a new repository on GitHub where you will store your project files. 

### Clone Your GitHub Repository: 
                                       Clone the GitHub repository to your local machine using the following command in your terminal or command prompt:
      
   #### Command:  git clone https://github.com/your-username/your-repository.git 

 ### Navigate to Your Project Directory: 
                                        Use the cd command to navigate into the directory of the repository you just cloned: 
 #### Command:  cd your-repository.

 ### Initialize Your Project (if not already): 
                                          If your project is not already initialized as a Git repository, you can initialize it by running: 
  ####  Command:  git init 

### Create and Add Your Project Files: 
                           Place all the files and folders you want to deploy into the repository directory. Use the git add command to stage your changes and the git commit command to commit them:
 ####     command:
                                 git add . 
                                 git commit -m "Initial commit" 


### Push Your Changes to GitHub: 
                                 Push your committed changes to your GitHub repository using the git push command: 
  ####   Command:  git push origin master 

### Sign Up/Login to Netlify:
                                  Go to the Netlify website and sign up for a new account or log in if you already have one.
### Create a New Site: 
                                  Once logged in, you'll be taken to the Netlify dashboard. Click on the “Add new site " button.
 
### Connect to GitHub:
                                 Choose your Git provider (in this case, GitHub) and authorize Netlify to access your repositories.

 ### Select Your Repository:
                                  After authorization, you'll see a list of your GitHub repositories. Select the repository containing the folder you want to deploy.

 ### Configure Your Deployment Settings:
                               Once you've selected your repository, you'll need to configure your deployment settings. Specify the branch to deploy, the build command (if applicable), and the directory containing your site's files. If you're deploying a static site, you might not need to specify a build command. Ensure that you set the publish directory to the folder you want to deploy.

### Deploy Your Site:
                             After configuring your settings, click the "Deploy site" button. Netlify will begin the deployment process, and you'll see a progress indicator as your site is built and deployed.

### View Your Deployed Site:
                           Once the deployment process is complete, Netlify will provide you with a unique URL where your site is hosted. You can visit this URL to view your deployed folder. 

### Configure Custom Domain (Optional): 
                          If you have a custom domain, you can configure it to point to your Netlify site. This can be done in the "Domain settings" section of the Netlify dashboard.


### Learning Sites:

Youtube:   ” https://www.youtube.com/watch?v=OiGf_FUJFz4&t=463s”

Netlify Class Central:
 “https://scrimba.com/learn/learnreact/drag-and-drop-deploy-with-netlify-co0cc43c19137835bc361427d”