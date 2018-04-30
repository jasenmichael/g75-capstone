# Project Description
SimpleExpenses - a simple yet robust receipt and expenses application. Tracking, logging, exporting expenses, and doing taxes has never been easier!

## Problem statement
I don't know if you are like me, but I have a shoe box with all my receipts from multiple businesses and categories. I dread doing the tedious task of one by one sorting them and adding to a spreadsheet. I simply want to just add receipts, then be able to sort, view, edit and export the data.

## How will your project solve this problem?
Simple Expenses solves the problem of jumbled, ruined, or lost receipts necessary when filing expense accounts or filing your personal taxes. Simple Expenses is Open Source and free! Just take a picture with your smart-phone or upload a file, you can rest assured that your receipt is simply and easily filed, sorted, accounted for, and easy to access when tax day rolls around. With an easy to use interface and fool-proof editing ability, it will be easier than ever monitoring and reporting your expenses. Optionally you can batch import and export without database storage required.

## Map the user experience
- Home Page:
  - Navigation side panel
    - "List Expenses Page" link
    - "Sign-in/Register" or "Sign-out/User Page" Links
    - "About Page"
    - "User Agreement"
  - The user will land on home page that has a brief explanation of the service and a link to the about page.
  - also a fat button to go straight to "add an expense receipt page"
- Add Receipt Page:
  - Heading "Add an expense receipt"
  - 3 buttons
    - from camera (only available on Android & IOS)
      - opens camera, user takes an image
    - from local file system (prompts user to select image or pdf file)
    - from url (prompts user to input image or pdf url)
  - after selection the user sees the image/pdf and can then confirm or go back to the "Add Receipt Page".
Then later you can edit info about each receipt. Each receipt can have a business and category for sorting. Each displayed and sorted list can be exported as a pdf, with the receipt images on each page.

## What technologies do you plan to use?
BackEnd
- (Laravel && MySql) || (Featers/js && MongoDb || postgresql) || (strapi && MongoDb)
- AWS S3
- AWS ??

Front-End
- Html
- Css
- Javascript
- React && React Native || Vue && Vuetify





-------
