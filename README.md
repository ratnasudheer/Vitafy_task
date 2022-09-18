# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Design of the project

Developed  FAQ window in this task with Accordion, Add and/or remove single FAQ/remove all FAQ, Ascending and Descending functionality.

1)Firstly, boiler React APP is considered and changes are made accornding to the assigned task
2)I categorised two components a) form container and b) view container
3)Form container is much about the adding "title" (question) and "bodycontent" (answer) and button is adopted. In this i made an approach of using localstorage with help of setItem and getItem. While I am working on it I came to know little bit knowledge on session and other theoritical things on cookies. There is another approach of using the React hook of 'useLocalstorage' is also available. But I thought of implementing it in normal way of localstorage without using the mentioned hook.
4)After that, developed view container for the list of FAQ (title & bodycontent) lists to be displayed in this
5)At first I developed a component which is re-useable such that any new FAQ is added then it should adopt the Accordion structure like component in the view container.
6)Maintained minimal concetration on design (honestly accepting it)
7)In the each FAQ small component, delete button that helps in deleting that particular FAQ
8)RemoveAll is designed to clear the total list FAQS in the view container
9) As a frontend developer I am aware and need to concentrate on design aspects but I was much interested in solving the task 
10) Later implemented Ascending and Descending buttons with their functionality (used existing "sort" method in JS), onto the "title"
11) There is much possiblity of code refinement is possible but I want to be transperent on my first thought of implementation that comes to my mind
12) Thank you
