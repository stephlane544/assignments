Render Problems - Debugging exercise

You have been given a small application from a co-worker who is trying to learn how to use render props.  They tell you that the functionality they are trying to build is a edit button that toggles a form. Then if the user puts information into the form and click submit, it should pop and alert up on the screen.

Unfortunately, the application is broken.  You are asked to clone down the repository and fix the bugs for your co-worker.

Your first task is to get the application to load without crashing
Second, you will need to make sure the button toggles the form
Lastly, you will need to make sure that on form submit, an alert pops up with the name and age inputs.

You DO NOT need to change anything of the code.  The only file in the App that is broken is the App.js
This means the shared components Form and Toggle are fully functional, it is just their implementation 
on the App.js page that is not fully correct.

To take on the challenge, cd to your 'exercises' folder run the following command your local console to clone down the broken app:
    git clone -b broken_branch https://github.com/VSchool/render_probs.git && 
    cd render_probs && 
    rm -rf .git && 
    npm i && 
    code .