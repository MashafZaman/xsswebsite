XSS: How It Works
Upon loading into the page, you are inquired to enter a username.
This becomes Cookie data.
The input you can submit in both forms simply stored and then momentarily displayed.
One input is unsanitised and another is sanitised.
To try it out: input any script or img tag: first input is sanitised and won't be displayed when
Display Info is pressed
Input any script or img tag in the second form: this is unsanitised and will cause XSS when
Display Info is pressed

Sanitized HTML Web:
The website is made in Javascript and html which asks the user to enter the name
details. When you go to the site a popup alert is displayed on the screen which asks the
user to enter it’s name.The sanitized input has input validation encoded that prevents
user from adding any script so when the user submits the name and presses display
info only the name is displayed alongside a ‘hello’. This protects the user’s information
and no details are compromised.

Unsanitized HTML Web:
In the unsanitized input box, when the user enters its name alongside a script, it tries to access
the cookies. Since the input validation is not done in the unsanitized input box, the information
of the previous is fetched and the security of the site is compromised.