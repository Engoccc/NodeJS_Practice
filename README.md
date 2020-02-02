# NodeJS_Practice
A practice use Express + NodeJS + Mongodb  
- [Express official document](http://expressjs.com/)

- [Day5](#Day5)
  - [Progress](#Progress-day5)
  - [Problems](#Problems-day5)
- [Day4](#Day4)
  - [Progress](#Progress-day4)
- [Day3](#Day3)
  - [Progress](#Progress-day3)
  - [Problems](#Problems-day3)
- [Day2](#Day2)
  - [Progress](#Progress-day2)
- [Day1](#Day1)
  - [Progress](#Progress-day1)
  - [Problems](#Problems-day1)

# Day5
## Progress-day5
- Implement sign in and sign out page.  

## Problems-day5
- [ ] In sign up, gender default is set as none, but in the web shows female(the first choice) 
- render: `res.render(file, option)` is to put data to corresponding template.
- exec: tests for a match in a string. This method returns the matched text if it finds a match, otherwise it returns null.

# Day4
## Progress-day4
- Finish the sign up page.
  - Build a collection for user information.
  - Connect mongodb and the server.
  - app.js -> routes(index) -> routes(posts) -> middleware(check.js) -> routes(signup) if success -> models(users.js) -> connect with mongodb  

# Day3
## Progress-day3
- Add some page design. style.css, header.ejs, footer.ejs, etc.

## Problems-day3
- const: constant; var: variable.
- __dirname: it gives you the path of the currently running file.

# Day2
## Progress-day2
- Build middleware `check` to judge whether user signin or not. So that can transfer to corresponding page.
- Build a route `index` as routes' index. Then build some routes like `signup, signout` etc.

# Day1
## Progress-day1
To make sure the server with express works well:  

- Build the basic webserver.
- Build routes.
- Insert ejs template engine.
- Learned template fragment.
- Build some middlewares.
- Error handling.

## Problems-day1
- [x] [Unsolved function or method require()](#Unsolved-function-or-method-require())
- [x] [Unsolved function or method get()](#Unsolved-function-or-method-get())
- [x] [Link GitHub task link](#Link-GitHub-task-list)

### Unsolved function or method require()
In IDEA: File -> Settings -> Languages & Frameworks -> Node.js and NPM  
Enable `Coding assistance for Node.js`

### Unsolved function or method get()
The problem is that these properties are not defined in Express module. So install `express` typings(@types/express) will solve the problem.  
hit `Alt + Enter` on `"express"` in `require('express')`, choose `Install Typescript definitions for better type information`  

### Link GitHub task list
Markdown should write like this:
```
- [x] [Link GitHub task link](#Link-GitHub-task-list)
```
A `-` is between two words.
