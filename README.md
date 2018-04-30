# Project Description
Simple Expenses - a simple yet robust receipt and expenses application. Tracking, logging, exporting expenses, and doing taxes has never been easier!

## Problem statement
I don't know if you are like me, but I have a shoe box with all my receipts from multiple businesses and categories. I dread doing the tedious task of one by one sorting them and adding to a spreadsheet. I simply want to just add receipts, then be able to sort, view, edit and export the data.

## How will your project solve this problem?
Simple Expenses solves the problem of jumbled, ruined, or lost receipts necessary when filing expense accounts or filing your personal taxes. Simple Expenses is Open Source and free! Just take a picture with your smart-phone or upload a file, you can rest assured that your receipt is simply and easily filed, sorted, accounted for, and easy to access when tax day rolls around. With an easy to use interface and fool-proof editing ability, it will be easier than ever monitoring and reporting your expenses. Optionally you can batch import and export without database storage required.

## Map the user experience

**Home Page:**
  - The user will land on the home page, it has a brief explanation of the service and a link to the about page.
  - also a fat button to go straight to "add an expense receipt page"

**Add Receipt Page:**
  - Heading "Add an expense receipt"
  - 3 buttons
    - "from camera" (only available on Android & IOS)
      - opens camera, user takes an image
    - "from local file system" (prompts user to select image or pdf file)
    - "from url" (prompts user to input image or pdf url link)
  - after selection the user sees the image/pdf and can then confirm or go back to the "Add Receipt Page".
  - if the image is confirmed it is then uploaded and added to the queue (or the edit field is opened depending on the user's configuration settings)

**About Page**
  - a page of content describing in-depth the features and services, links to source code, licensing, technologies, author etc.
  - explains that you may use the app without logging in, but the data will only be available on that instance of the browser or mobile app.
  - link to "User Agreement".

**List Expenses Page**
 - displays a list of expense receipts, each receipt and info can be edited, deleted or exported as a pdf.
 - has business and category filter.
 - each filtered page can be exported to pdf.
 - if there are expense receipts in the queue, an "add from queue" button will be visible.
   -  "add from queue" link will show a list of queued expense receipts, clicking on a queued expense receipt will open an edit/add modal or window.

**User Page**
 - ability to edit user information - username, email, businesses, & categories.
 - option to queue or edit expense receipts when added.

**User Agreement**
 - displays user agreement and information about how we protect the data that is collected.

**Each page will show the Navigation panel**
 - "List Expenses Page" link
 - "Sign-in/Register" or "Sign-out/User Page" Links
 - "About Page"
 - "User Agreement"

## What technologies do you plan to use?
BackEnd
- Node.js
- Express
- MySql
- GraphQl (new technology)
- AWS S3 (new technology)
- AWS RDS (new technology)

Front-End
- Html
- Css
- Javascript
- NativeScript (new technology)
- Electron.js (new technology)
- Vue.js

-------
