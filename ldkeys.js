  // Set clientSideID to your LaunchDarkly client-side ID
  const clientSideID = 'YOUR-CLIENT-SIDE-ID';

  // Set flagKey to the feature flag key you want to evaluate
  const flagKey = 'YOUR-FLAG-KEY';

  // Set up the context properties. This context should appear on your
  // LaunchDarkly contexts dashboard soon after you run the demo.
  const context = {
    kind: 'user',
    key: 'example-context-key',
    name: 'Tony'
  };