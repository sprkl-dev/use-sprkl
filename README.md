# Sprkl Sample Project
### What is Sprkl?
Sprkl is a Personal Observability platform that provides personalized feedback on your code changes while coding in the IDE. Powered by OpenTelemetry, Sprkl instruments every code change and analyzes it upon execution. Sprkl helps ship correct and efficient code while spending less time on debugging, code reviews, and frustrating rework.
![](https://lh5.googleusercontent.com/Gr0zXiDAvHUykcbo9YDGWxs-g71OG_tffLMTWQLT-FRtaO2zRXcJoENOAtZfpcaloenG1z9iioOzvRl3gMNWPfnOxW_VdlCHOJFsyxe4ehHPGcWGld57OH6yf2FV13bsJlKUH9C786pERUAcyBuLP3TrDVD9h0YCu-WYXQEqD0BNRiMif6Klb0Xi4Tu75Q)

## Getting Started
- Is this the first time you are using Sprkl? Start with our installation instructions at [Sprkl Docs](https://docs.sprkl.dev/v/getting-started/install-sprkl).
- Follow the [sample project instructions in our docs](https://docs.sprkl.dev/v/getting-started/start-with-a-sample-project-with-docker-compose).
- Make a code change.
- [Instrument your code](https://docs.sprkl.dev/v/getting-started/instrument-your-code)
  - [Bare metal](https://docs.sprkl.dev/v/getting-started/instrument-your-code/bare-metal)
  - [Docker or Docker Compose](https://docs.sprkl.dev/v/getting-started/instrument-your-code/docker)
  - [Kubernetes cluster (Okteto and TILT integrations)](https://docs.sprkl.dev/v/getting-started/instrument-your-code/kubernetes)
- Check out our demo for guidance on how to get started.

## Simple Example
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/sprkl-dev/use-sprkl)

To run a simple example:

```bash
yarn install
yarn example
```

This will:
1. Make a code change (via git patch)
2. Spin-up a docker-compose based micro-service application 
3. Perform Jest tests

Open the sprkl extension dashboard (click on the sloth icon on the left panel) to see the results in the Sprkl dashboard.

![](https://4118827466-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7cSKJLM2UySjJPZcsjUE%2Fuploads%2Fxash0JAyLqv07n3NM6rG%2Fimage%205.png?alt=media&token=2d7162af-4406-42e8-86b6-c28480b2faa3)

## Additional Information

### Documentation
Checkout [our docs](https://docs.sprkl.dev/v/) for additional instructions.

### Help
Join [our Slack community](https://sprkl-community.slack.com/ssb/redirect) for the fastest answers to your questions! Or contact us at support@sprkl.dev.
