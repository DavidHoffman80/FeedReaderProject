Feed Reader Testing Project
===========================
### Project Overview
In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

### Goals
1. Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/rubrics/18/view "Project Rubric").
2. Take the JavaScript Testing course.
3. Download the [required project assets](https://github.com/udacity/frontend-nanodegree-feedreader "Project Assets").
4. Review the functionality of the application within your browser.
5. Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
6. Explore the Jasmine spec file in ./jasmine/spec/feedreader.js and review the Jasmine documentation.
7. Edit the `allFeeds` variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
8. Return the `allFeeds` variable to a passing state.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
10. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
11. Write a new test suite named `"The menu"`.
12. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
13. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
14. Write a test suite named `"Initial Entries"`.
15. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
16. Write a test suite named `"New Feed Selection"`.
17. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
18. No test should be dependent on the results of another.
19. Callbacks should be used to ensure that feeds are loaded before they are tested.
20. Implement error handling for undefined variables and out-of-bound array access.
21. When complete - all of your tests should pass.
22. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage), provide documentation for what these future features are and what the tests are checking for.

### Instructions
* Clone this repository.
* Open repository.
* Open index.html with your preferred browser.