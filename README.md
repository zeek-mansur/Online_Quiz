# Online_Quiz

This is an online quiz game website for participant to test their general knowledge. The quiz consist of ten questions with a countdown timer to enable users determine how fast questions can be attempted. 

Result page is displayed at the end of the quiz to enable users know how they have done on the entire quiz.

## UX

My website is for everyone who loves quiz to participate and improve their knowledge on general questions and also get result.

I've chosen to design my website in the way that I have, as I felt it will be easy for users to navigate without getting lost. A 'how to' has been added also to give user clear instruction about the quiz game.
 
### User Stories

- As an instructor, I want quizzes created with countdown timers so that I can assess participants knowledge. 
- As a participant, I want to have an instruction section to show me how to navigate through the quiz. 
- As a participant, I want to receive feedback afer each quiz question so that I can see if I got the question right or wrong. 
- As a participant, I can navigate a quiz by submitting an answer or by pressing next (forward) so that I can answer questions in a different order if I’d like. 
- As a participant, I see if I pass a quiz afer I finish taking it so that I can get feedback or result on how well I did on the quiz.
- As a participant, I want to be able to pause and resume the countdown timer after quiz have started. 
- As a participant, I want to have navigations to enable me navigate back to the home page after quiz has started. 

 
### Wireframes

Wireframes were drawn using Balsamiq. Two wireframes can be seen for all pages in order to consider how to make my website responsive. The links to the files are below:

- [index.html (md and lg)](https://github.com/zeek-mansur/Online_Quiz/blob/master/Wireframes/Desktop%20home%20Screen.png)
- [questions.html (md and lg)](https://github.com/zeek-mansur/Online_Quiz/blob/master/Wireframes/Desktop%20question%20page%20.png)
- [result.html (md and lg)](https://github.com/zeek-mansur/Online_Quiz/blob/master/Wireframes/Desktop%20result%20screen.png)
- [index.html (xs and sm)](https://github.com/zeek-mansur/Online_Quiz/blob/master/Wireframes/Phone%20home%20screen%20.png)
- [questions.html (xs and sm)](https://github.com/zeek-mansur/Online_Quiz/blob/master/Wireframes/Phone%20question%20page.png)
- [result.html (xs and sm)](https://github.com/zeek-mansur/Online_Quiz/blob/master/Wireframes/Phone%20result%20screen%20.png)


There is a little difference between some pages on my wireframes and my final website. This was due to visual preferences and feedback received from other users.

## Features

#### index.html

- **Navigation bar** - This is menu contains the navigation links to all pages on my website. This allows user to click the links to navigate through relevant webpage.
- **How to button** - This allows users to view the clear instruction of the game before starting through a modal window.
- **Start quiz button** - This button takes users to the question page to enable them start the quiz.


#### questions.html

- **Next button** - The next button is enabled only when user have attempted the question. It enable user to click and go to the next question.

- **Pause button** - The pause button enables user to pause the countdown timer.

- **Resume button** - The resume button enables user to resume the countdown timer

- **Show result button** - This button allows users to view results even before completing the quiz.

- **Score** - The score area allow users to view the number of coorect answers they have score while attempting the questions

- **Time left** - This area shows the time left for user to finish attempting all questions. User is taken to result page if the countdown time runs down before attemption all questions.

#### result.html

- **Start again button** - Allows users to go back to the homepage and start the quiz all over again

## Technologies Used


- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML5** to create the basic elements and content of my website.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - The project uses **CSS3** to add custom styles to the elements and content of my website.
- [**Balsamiq**](https://balsamiq.com/)
    - I used **Balsamiq** to create wireframes for my website before building the actual site.
- [**Bootstrap v5.0**](https://getbootstrap.com/)
    - The project uses **Bootstrap v5.0** to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my website, before adding my custom styles.
- [**jQuery**](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation. This is the standard jQuery that is built with Bootstrap components.
- [**JavaScript**](https://www.javascript.com/)
    - The project uses **JavaScript** from Bootstrap which is required to add functionality to some of Bootstrap's components.
- [**VS Code**](https://code.visualstudio.com/)
    - I've used **VS Code** as the development environment to write the code for my website.
- [**Git**](https://git-scm.com/)
    - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.

### Responsive Testing

I used Google Chrome's Development tools to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

### HTML CSS and Javascript Validation

I used the [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) to validate my HTML code.

I used the [W3C CSS Validator tool](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate my CSS code.

I used the [JS Validator tool](https://javascriptvalidator.net/) to validate my Javascript code.


### Problems faced

- **Countdown timer** - The countdown timer starts to count even before the game has started. Ones the page has been loaded the timer starts counting down from the home page and show "time is up" on the home page. This was resolved by seperating the javascript codes for the features in the home page(index.js) and the one in questions.js.
- **Responsiveness** - The issue here was the sizes of fonts and buttons in each screen size. I used the media query to set the sizes for different screen sizes.
- **Alignment of items** - I had issue aligning different section/division of my layout. I decided to look more into flexbox which enabled me perfectly align all items correctly.
- **Modal overlay** - I was having errors on my console when I am on the question page due to the modal overlay. However seperating the js file into two (index.js and questions.js) as mentioned above helped solved the problem. 
- **Question numbers** - Here the question number was ending at question 9 instead of question 10. So I had to add one more question to my question array and minus 1 question in the question.lenght to get the full 10 questions to be shown.  

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Loaded the terminal window in my VS code workspace.
2. Initialised Git using the `git init` command.
3. Added all files to the staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "This is my first commit"` command.
5. Created a new repository in GitHub called 'online_quiz'.
6. Copied the below code from GitHub into the terminal window in my VS work workspace:

    ```git remote add origin https://github.com/zeek-mansur/Online_Quiz.git```

    ```git push origin master```

7. Entered my GitHub username and password to push the files from Git to GitHub.
8. Went into 'Settings' on my repository page in GitHub.
9. Selected the 'master branch' option under the 'GitHub Pages' section.
10. Ran several regular commits throughout my project.

### Repository Link

Click the link below to run my project in the live environment:

[**Online Quiz**](https://zeek-mansur.github.io/Online_Quiz/)

### Running Code Locally

To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to [my GitHub repository](https://github.com/zeek-mansur/Online_Quiz/tree/master).
2. Click on 'Clone or download'.
3. Click on 'Download ZIP'.
4. Once dowloaded, extract the zip file's contents and run my website locally.
