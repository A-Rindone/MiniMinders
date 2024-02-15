# Mini Minders Demo (LaunchDarkly)

## Overview
This project demonstrates a simple on/off feature flag creates a small reminders application called "Mini Minders" using LaunchDarkly's Javascript SDK. Specifically, the feature flag toggles whether or not to hide the submit button for new reminders. The following steps outline how to replicate the demo locally on your machine.

## Initial Setup

1. Clone or download the repository to your local machine.

2. In the LaunchDarkly feature flags menu, create a new flag with the "kill switch" configuration. Under "Additional configuration," **make sure "SDKs using Client-Side-ID" is checked.**

3. Navigate to the "ldkeys.js" file, and update the "clientSideID" to the relevant Client Side ID key pertaining to your project and environment. _(Reminder: this can be found under "Account Settings" > "Projects" > Your specfic project)_

```javascript
 // Set clientSideID to your LaunchDarkly client-side ID
  const clientSideID = 'YOUR-CLIENT-SIDE-ID';
```

4. In "ldkeys.js", update "flagKey" to the feature flag key from step 2.

```javascript
 // Set flagKey to the feature flag key you want to evaluate
  const flagKey = 'YOUR-FLAG-KEY';
```
  
5. _(Optional)_ Change the example context if desired.

```javascript
  // Set up the context properties. This context should appear on your
  // LaunchDarkly contexts dashboard soon after you run the demo.
  const context = {
    kind: 'user',
    key: 'example-context-key',
    name: 'Anthony'
  };
```

## Running the Application Locally

There are many ways to run an HTML file in the browser such that it points to your system (localhost), including leveraging IDE extensions within tools like VSCode to automate much of the process. Rather than relying on downloading a specific IDE or application, here is a simple method within MacOS's Terminal application leveraging Python.

1. Open the **Terminal** application, and navigate to the folder or repository where you stored this project on your machine.
2. Check that Python is already installed with the following command:

```
python -v
```
3. Run the following command:
```
python -m SimpleHTTPServer
```
4. Open your preferred browser, and enter the URL http://127.0.0.1:8000/. _(You can also use http://localhost:8000/)_


If everything is configured correctly, then the reminders application will run in your browser, along with local cookie storage for saving, adding, and deleting reminders. If the feature flag above is turned on without any particular targeting added, then the toggle should evaluate to ```true```, which will hide any submit button. _(Note: the user can still hit ```Enter``` to save a reminder.)_

## Other Ideas to Consider

The free trial of LaunchDarkly doesn't allow for targeting rules with dependencies between flags, but if you have access to this feature, then you can configure an "Experiment" flag that is dependent upon the toggle created above. 

For example, if you targeted the feature flag above to only a certain group such that only some users see the submit button, then you could create an experiment to change button colors, button text, among many other ideas. 
