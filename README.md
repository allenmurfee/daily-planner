# Daily Planner

## Description

This application is a daily planner to help you plan your day out based on the typical 9am - 5pm work schedule. I built this project because it's helpful to plan your day out in time-based chunks, that way tasks seem more manageable.

One problem this application solves, other than being a typical planner, is that it allows you to see what tasks are in the past, present, and future based on time. If the hour has already passed, that row will be red. The row for the current hour is white, and the row for hours in the future are green. This way, you can easily see past, present, and future tasks.

I learned a ton while doing this project, but the biggest thing I learned was how to set local storage based on 2 variables, instead of just one.

In the past, we learned how to set a variable and then attach that value to a string (ex. "test", test). In this assignment, it was crucial to attach local storage values to 2 variables (ex. test, test). This is because I needed to attach the text area value to the time, which then led me to link the text area value to each row by ID of the div that holds the hours. This was something I didn't know you could do, and I can see how incredibly useful this will be for building future applications.

## Installation

No installation is required. Visit https://allenmurfee.github.io/daily-planner/.

All your inputs will be saved in local storage, so no additional steps are required on your part.

## Usage

To use this application, click into area in the middle of each row and write your tasks for that hour. Once you're done, click "Save" next to the row. This will save your tasks into local storage, so they will remain until you change the tasks or clear your storage.

## Credits

Bootcamp tutoring helped me with some time issues based on the 24-hour clock.

The "each" method helped me a ton. I didn't know this was a method until doing some research for this project, and I will definitely be using it going forward: https://api.jquery.com/each/

## License

MIT License.
