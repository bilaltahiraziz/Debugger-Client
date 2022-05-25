** GSD-Task-Force-Client **

# Links:

- [Deployed Client](https://gsd-task-force.github.io/GSD-Task-Force-client/)
- [API Repo](https://github.com/GSD-Task-Force/GSD-Task-Force-server)
- [Deployed API](https://tranquil-lowlands-17148.herokuapp.com/)

# Planning:

- We began by discussing the requirements with our unified vision and function of the SPA. With all at agreement, we proceeded by creating a wireframe and ERD that to establish layouts and features that meet our demographic's needs. Next, we began delegating and planning out our groups work, schedule, and ground rules. Finally, we loosened our finger knots and began typing. 

# Process: 

- We designated a member to be the SCRUM master and created a Trello board to track and manage our project. This allowed us to effectively communicate and delegate our tasks/requirements to each member of the group in high value increments to ensure the goal is met. Sprint meetings were held at the beginning of each work day to review and discuss the schedule and completion of tasks assigned for the day.  

# Problem Solving:

- We tackled our problems in a plethora of ways throughout in the development process, by either referring to online documentation, our previous projects, notes taken throughout lecture, and between members within the group. 

# Technology:

- JavaScript
- HTML/JSX
- SCSS/Bootstrap
- Express
- JSON
- React
- Mongoose
- MongoDB
- GitHub
- DOM/API
- Heroku
- cURL

# Paths and Methods

- Auth
  - Sign Up (POST) URL + '/sign-up/'
  - Sign In (POST) URL + '/sign-in/'
  - Sign Out (DELETE) URL + '/sign-out/'
  - Change Password (PATCH) URL + '/change-password/'
- Tasks
  - Create Task (POST) URL + '/task/'
  - Index Task (GET) URL + '/task/'
  - Show Task (GET) URL +'/task/' + :id
  - Update Task (PATCH) URL + '/task/' + :id
  - Delete Task (DELETE) URL + '/task/' + :id

# About this app:

- GSD-Task-Force is a task list/reminder SPA that balances power and simplicity. This application allows members to quickly create, organize (completed/uncompleted), search, update, delete, and add due dates for each task.

## User stories:

- To use this app a person has to ba a registered member.
- A user must sign up to become a member.
- A member must sign in.
- A member can update their password.
- A member can see all their Task titles and description.
- A member can create a new Task list and have it displayed.
- A member can update their Task list.
- A member can delete their existing Task item/s. 
- A member can cross off their Task item/s.
- A member can only see their Task item/s.


## To register as a Member:
1. Click on the sign up button
2. Enter valid email address
3. Enter password
4. Re-enter password
5. Click sign up

## Member sign in:
1. Click on sign in
2. Enter email
3. Enter password
4. Click sign in

## Update password:
1. Click update password
2. Enter current password
3. Enter new password
4. Click update

## To see all Task item/s:
1. Click on Home
2. Scroll down on the list of Task

## To enter a Task item:
1. Click on Create Task
2. Enter Task title
3. Enter Task description
4. Enter Task due date
5. Click submit

## To update your Task item:
1. Enter the changes you wish to make, in the form fields under your Task
2. Click Update

## To cross off Task item:
1. Click on the checkbox

## To delete your Task item:
1. Under your Task click Delete

## Wireframe:
![Wifeframe](Wireframe.png)

## ERD:
![ERD](ERD.png)

## Unfinished Tasks:

- See each others tasks
- Search by Task Description
- Search by Due Date

## Stretch Goals:

- Time based reminder
- Activity schedule
- Add images for each task
- Add geographical location
- Additional Task lists
- Integrate with Google and Outlook Calendars

## Thank you:

I would like to thank all members of the instructional team, and GSD Team members for all their assistance and ideas on this project.