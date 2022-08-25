# What is Sprkl?

Sprkl is a Personal Observability extension designed to help you write production-ready code faster and identify potential issues in your own code as soon as possible - when you write your code in the IDE. Powered by OpenTelemetry, we instrument every code change and analyze it upon execution. We then provide you with an immediate and personal feedback including: 
- Personal code level traces - help you understand precisely how your recent code change executes.
- Personal Interactions - help you see how your code change plays with other entities in the system.
- Personal Coverage - helps you determine how much of your recent code change is covered by existing tests.
- Personal Insights - help you improve your code performance by getting runtime feedback.

### [Install Sprkl to get...](#install-sprkl-to-get)
-   [Your Personal Observability dashboard](#your-personal-observability-dashboard-ü¶•)
-   [Traces histogram](#traces-histogram-üë£)
-   [Errors](#errors-‚ùó)
-   [Coverage](#coverage-ü´∂)
-   [Insights](#insights-‚ö°)
-   [Interactions](#interactions-üîó)
-   [Jaeger-based instance traces](#jaeger-based-traces)
-   [Jest tests](#jest-tests)
-   [Code markups](#code-markups)


### [Getting started](#start)
-   [Pre-requisites](#pre-requisites)
-   [How to install Sprkl](#how-to-install-sprkl)
-   [How to run Sprkl](#how-to-run-sprkl)

### [About Sprkl](#about)
-   [Integrations and supported stack](#integrations-and-supported-stack)
-   [How it works](#how-it-works)
-   [FAQ](#faq)
  
<h1 id=install-sprkl-to-get>Install Sprkl to get...</h1>

<h2 id=your-personal-observability-dashboard-ü¶•>Your Personal Observability dashboard ü¶•</h2>
When the execution is complete, you will see your personalized information and insights in the Sprkl dashboard. The dashboard includes a number of areas filled with relevant information about your recent code change and its implications. 

![](https://lh6.googleusercontent.com/n4XshiCoigMNaPKtcRBlQkeFgPIrmLbaCy7QWNyI6R0OpRXI-Vd8tawoqxmvil2osTATXGW9ItiZkF3oh2v499qeuIcnlIVC_ttIyS-WSGfdYe0PjH3IkfZF4RmMVR8KQ6M0Qt95ajeCDGMW8Zx1gT0)  

---


<h2 id=traces-histogram-üë£>Traces histogram üë£</h2>

![](https://lh3.googleusercontent.com/jZqFUSZ420rEP3PugGfWJVBPoNyM7qVZ9BN5lznAH1c9u2WLY8QIzjBjfVQ-NEwlGNONQ4PkZaq32B6rfI-oIuy6wki9VafDGal-5Pii7-bZ0LwZsjVVmKEgawsp3CBvmfku6Ft95wohV7xm-bD-T0A)

Every bar represents the number of traces in a given time. Note that it only shows traces relevant to your recent code change. If the bars are colored pink, it means there are errors in the traces (you can review them in the next section).

---

<h2 id=errors-‚ùó>Errors ‚ùó</h2>
   
![](https://lh3.googleusercontent.com/L9ROhDi-3VJ3-nOhxaku_3sdCQ4Io1rfKQt8q3urnwVsIL1Qyt2ogAYtmy0EWKTuLbs5EPkXnFeYvoLXhLzk_SQE8n3cmuKpblO4tGKYHBanU31sbF3gMA5GvRVHKOVvcu82ZPX81ir911AH5URdrO8)

See the errors resulting from your recent code change. When you click on an error message you will see the lines of code that initiated the error, and when you click on it, you will be redirected to those lines of code in the relevant file.
Also, note the sloth icon next to some of the code lines. This icon tells you that Sprkl has information about this line and when you hover over the icon, you can select to see the latest trace that passed through this line or all the traces that passed through it.
You can also click on the compass icon next to the code lines reference which will open a Jaeger instance in your IDE and allow you to follow a trace to better understand the error and its cause.

---

<h2 id=coverage-ü´∂>Coverage ü´∂</h2>

![](https://lh4.googleusercontent.com/rNp6wKLmquPf_MV14WfpoTgMI3lYvKuDlGajnTKrMItMd1w8jOzmweFUh8w1hFiVRB9_7gZCSkDxEccK_yuMOWOZFuyxrpvcnJT0mQEC6AaQ3N_qQSN0LNbX8RMwGGtDsrY10Xpo0xDWMYMju0-yiI0)

The coverage section shows you what percentage of the statements that were added in your recent code change is covered by the tests you executed. It also shows you the specific lines of code that are covered or not covered. When you click on the lines of code, you are redirected to those lines in the relevant file. You can also click on the compass icon to follow the trace for the covered lines of code.

---
  
<h2 id=insights-‚ö°>Insights ‚ö°</h2>

![](https://lh5.googleusercontent.com/P_K4OMybHRq_p-lZaJsZy3wn_ZuEzTh485hW4m3upeY0T65ne_4ys-9bSMXpZKYbiuCyz4OXqxaVvAkpPAPt1rkyFEV5PwP79YjRD7Vsv6K-CtkYeZocJv0UJaf0lcIZvx7vigqNdEFcCGPewtYlNDU)
Insights are not necessarily errors but opportunities for you to identify certain areas in your recent code change that can be improved. It allows you to easily make sure that your code performs better and prevent certain issues from being pushed to production. When you click on an insight, you will see the lines of code that initiated the insight, and when you click on it you will be redirected to those lines of code in the relevant file. You can also click on the compass icon next to the code lines reference which will open a Jaeger instance in your IDE and allow you to follow a trace to better understand the insight.

---

<h2 id=interactions-üîó>Interactions üîó</h2>
  
![](https://lh6.googleusercontent.com/9m7KYGSnYAeUTCwjdJS6gDpVlzkkraYRv9xO8KNgAEVsVhKkDD2__dDtr_zoi4SWNz82R65fWcMHUfQfYGOfj5J8bglzsDzxPFlcb7Sqb5t5-clIyhZvDPeuYDWuDprdEnkqM4fR0Fi3r82KThYPQTc)

Interactions show you the ripple effect of your recent code change on the different system components. You can see details on HTTP requests including the relevant methods, database queries including the collections and methods, queues and other components. You can also see the details of your [Jest](https://sprkl.dev/observability-jest-tests/?utm_campaign=blog%20posts&utm_content=159148495&utm_medium=social&utm_source=linkedin&hss_channel=lcp-76091533) tests execution including tests that passed through the recent code change and tests that didn‚Äôt, mocks, and assertions. When you click on an interaction message you will see the lines of code that initiated the interaction, and when you click on it you will be redirected to those lines of code in the relevant file. You can also click on the compass icon next to the code lines reference which will open a Jaeger instance in your IDE and allow you to follow a trace to better understand the interactions. Where relevant (HTTP, Mongo, etc.) you can also sort interaction messages by method, by clicking on the method.

---

## Jaeger-based traces
 
![](https://lh5.googleusercontent.com/lu1EOxjwThXIDNGCraxwFMxLOEYMFJWYfHrXx74HmVN4PjTDCmNrJpsXIaI4bcxQyRSkMo3aYkwv6BzMI2L2qrq83-FnF1wBjXlKuqbqHoXzo_7M7K9fxwcIgYYqETrkW95oUnJl--W0NBJcWhCSeVw)

Sprkl is leveraging Jaeger for visualizing and analyzing traces. You can easily open a trace from the Sprkl dashboard or from your code and it will automatically open in the relevant span (error, interaction, insight, etc.). Sprkl uniquely includes code level spans within the trace to show you not only the infrastructure level, but also how the trace passes through your recent code change. You can easily go back from the trace to the specific line of code by clicking on the sloth icon within the trace.

---

## Jest tests

![](https://lh3.googleusercontent.com/pKlhob394sZ7f_x3UjBk4kwtgJT4ilDvnBymvwzuRWaP1PY_AXXC3CZyBD7p8ngm_q1Lio1PQSE7NbuD0BsL0tPpaeIiRNEP9rWAggrbj-93pPgDa6e07zQZkVUHhj61UCT6xeiHbr5UXsO0juhRivU)

Sprkl natively supports Jest-based testing (unit and integration tests), with insights and traces for every execution. You can easily analyze failed tests, including details for mocks and assertions. Sprkl also shows you which specific tests passed through your recent code change.

---

## Code markups

![](https://lh5.googleusercontent.com/D_TJkqS6v1Xyxfn4RFi1lWSPPywLkEC968tquXgUyl0dytfF0XGlmpHx6S1hkx_nUJLIv7nTHBluioxLoMDgGyJr7SZjcEtoN1zz0MsLXI8rJdf665OWPeqUpfNKpbSlM5FhNwvdyo0DFbDAZQULKDo)

Sprkl allows you to easily switch between views so you can stay in context when analyzing the results. When you click on a code line reference in the Sprkl dashboard or inside a trace, Sprkl will automatically direct you to the relevant file and will highlight the specific line of code.

---



<h1 id=start>Getting started</h1>

## Pre-requisites

-   Supported OSs
	-   Mac
	-   Linux
	-   [WSL](https://docs.microsoft.com/en-us/windows/wsl/) (for Windows machines). Information about running VSCode in WSL can be found [here](https://code.visualstudio.com/docs/remote/wsl)
-   Node v16 and up
-   Docker - you should have a docker set up on your machine, with permissions to run commands without a password. If you don‚Äôt have one, please use this [link](https://www.docker.com/products/docker-desktop/) for information about setting it up
-   VSCode installed
-   A Node.Js application with git source control available on your local machine and can run locally. If you don‚Äôt have one you may use our [demo repo](https://github.com/sprkl-dev/sprkl-microservices-example.git).

---

## How to install Sprkl

Once you install our app from the marketplace, you‚Äôll need to [sign up](https://sprkl.dev/join-beta-from-vscode/) to get a token. Enter the token and the installation process will begin. It's a 5 min setup. No further configuration is needed.

---

## How to run Sprkl

![](https://lh6.googleusercontent.com/rH-hDKmfZqntoOQbK88G8g-hvTpee2s5johd_-MNW1Mmz3D6SLqSGqCZLTfSutrtCxzqKQFeBfSfdRJYR8ShsPXBvIfmRhaN1b3zwwyAdlxTUjlj3IC2cTkoQUoVIsrPteQUGHJq_i9g9G8z4UVyZto)

In case you run your code directly on your machine - i.e. no docker, ssh, VM, etc.
You can instrument your code changes by prefixing your commands with ‚Äúsprkl --" (that is ‚Äúsprkl dash dash‚Äù). For example:

### Vanilla node
```bash
# Vanilla node
sprkl -- node index.js
```

### NPM / Yarn
If you are running your code using package manager (npm / yarn):
```bash
# NPM
sprkl -- npm run <script-name>
sprkl -- npm run test
sprkl -- npm start

## Yarn
sprkl -- yarn run <script-name>
sprkl -- yarn run test
```

### Startup script
If you are running your services with a startup script:
```bash
# Shell script
sprkl -- my_script.sh
```

### Monorepo with NPM/Yarn scripts
```bash
# Monorepo with NPM start script
sprkl -- npm run <monorepo-startup-script-name>

# Monorepo with Yarn
sprkl -- yarn run <monorepo-startup-script-name>
```        

### Instrumenting Jest executions
In case you have Jest tests (unit tests or end-to-end) you can instrument them using sprkl like so:
```bash
# Jest test suite
sprkl -- jest
    
# Jest single test
sprkl -- jest my.test.js 
    
# Jest from from NPM script
sprkl -- npm run <jest-test-script-name>
    
# Jest from Yarn script
sprkl -- yarn run <jest-test-script-name>
```

### Instrumenting containerized executions
If your code runs inside containers (docker or docker-compose) you can instrument it with sprkl

### Docker
You can run your docker commands with sprkl like so:
```bash
# Docker image with default entrypoint
sprkl -- docker run my_image

# Docker image with non-default entrypoint:
sprkl -- docker run my_image node index.js

# Using docker cli arguments
sprkl -- docker run --rm -it my_image node index.js
```
Sprkl cli supports the full docker command syntax and you can use it as you would use any other docker command.

### Docker compose
Sprkl can instrument docker-compose applications by changing the compose.yml file in-memory.
```bash
# Docker compose
sprkl -- docker compose up
```
If you wish to get the changed compose.yml file run the following:
```bash
# Getting the transformed compose.yml file
sprkl -- docker-compose-transform
```

---



<h1 id=about>About Sprkl<h1>

## Integrations and supported stack

![](https://lh4.googleusercontent.com/RkA0eUwgxLIn2G8abEE_KXU_dvPndXUrJx7fL_v2l8Oh7q9vvdGevM3wqDfz00bwuhUznKL5yTtfXgPTTisrgbFB-xtn1WfPmFKUqQNxjE9F55RyQjxzXgm2CK1BDTIOIdNwG9G6j_aHjH8sscIgniA)

## How it works

![](https://lh3.googleusercontent.com/YGupmrmrhHyGZcjtp1GUwgcNVJ3d5TuqopTbbJCXSphZICvLTR1HH_8OmgKzgXQ5Lj2F8DBdAeKPQ6pCw71RfEFQOA7lmJ7a4Uvn94TvW_kkOoDLU7K77ZHQw3fz1lOJxRUTzMfpp1Ykdk1ylzc7Rb0)
  
  
## FAQ
-   ### What is Sprkl?
	Sprkl is a Personal Observability platform that provides individual developers with telemetry data and actionable insights 	about their own code changes. We leverage OpenTelemetry to instrument every code change and analyze it upon execution. We then provide immediate feedback, right in the IDE, that includes traces at the code-level, not only at the infrastructure level (with an embedded Jaeger instance), insights about Jest test, diff coverage, errors, hidden API calls, DB queries, performance bottlenecks, abnormal memory usage and more.
-   ### How does Sprkl make my life easier?
	 By using Sprkl, you immediately understand how your code performs. You no longer need to spend time manually collecting data and trying to piece it all together. No more sifting through endless logs or traces, adding breakpoints or switching from one tool to another. Sprkl helps you research, plan, debug, test and prevent issues, and investigate existing issues faster so you can focus on writing your best possible code.
-   ### How does Sprkl work?
	  We leverage OpenTelemetry to automatically instrument every code change and analyze it upon execution. See how it works in the illustration here.
-   ### How do I "Git" started?
    Once you install our app from the marketplace, you‚Äôll need to sign up to get a token. Enter the token and the installation process will begin. It's a 5 min. setup. No further configuration is needed.
-   ### What languages does Sprkl support?
	   We support TS, JS over Node.JS operating with the VSCode extension. We are gradually adding support for additional languages. Tell us what you‚Äôd like us to support [here](mailto:support@sprkl.dev).
-   ### Which Node.Js version does Sprkl support?
    Sprkl currently supports Node V.16 or higher
- ### How do I use Sprkl for TypeScript?  
    Using Sprkl with TypeScript is as easy as using it for native Javascript. Just make sure that you enable sourcemaps when building the code, and that the sourcemaps are available when running Sprkl (either as files with the compiled code or inlined).  
#### Example using esbuild: esbuild 
`--sourcemap ‚Ä¶`  
#### Example using tsc (tsconfig.json)
 ```json
{  
	"compilerOptions": {  
		  ...  
		  "sourceMap": true  
	 },  
	 ...  
}  
```
-   ### Will my data be exposed or sent to external servers?
    No. Your data runs locally and will never be revealed.
-   ### Does your instrumentation change my code?
	We don‚Äôt change your code‚Äôs functionality in any way. Instead, we add an instrumentation layer to your code that only runs on your local machine. We use our intelligent instrumentation engine to leverage [OpenTelemetry](https://opentelemetry.io/) (a typical, trustworthy open-source project) to automatically apply our instrumentation to your code.
-   ### Does your instrumentation change my files?
  	No. Sprkl doesn't change your code functionality or files.
-   ### Does Sprkl affect staging or production environments?
	No. Our code instrumentation is done locally, in memory, and not added to the source code. Therefore it doesn‚Äôt affect staging or production.
  -   ### Why don‚Äôt you instrument all the code?
    	We focus on what you need to see to ship better code faster. Therefore, we focus on what‚Äôs relevant to your own code change - how it affects and is affected by system components. For example, your code-level traces, your hidden API calls, DB queries, messages, memory bottlenecks, diff coverage, errors, etc.
-   ### Is there any performance overhead involved in using Sprkl?
	Local performance overhead is minimal as we instrument your code change alone, rather than the entire codebase. The instrumentation stays local and won't apply to your files, and will not have any effect on staging or production.
-   ### Will I be able to see Sprkl insights and telemetry data later in CI/CD, staging, or production?
	We're working on it. We aim to show you how your code function changes throughout the entire lifecycle.
-   ### Do I need to install Jaeger?
	No. It comes out of the box: you don't need to deal with the hassle of installing it into your IDE.
-   ### Can I see the instrumentation?
	No, unless you really want to :). We think it's TMI and isn't helpful. We want to help you focus on what matters.
-   ### Can I configure what I want Sprkl to instrument?
	Of course. Sprkl can instrument any git recipe you can think of. For example, you can instrument or exclude: uncommitted changes, my commits only; all commits since I left the main branch; all commits in the last six months, etc. Those are configurable.
-   ### How can I contribute?
	Got new feature suggestions or want to comment on existing ones? Connect with us [here](mailto:support@sprkl.dev).
-   ### Is Sprkl free?
	Yes, and it will always be free for an individual developer.  However, we'd appreciate it if you spread the word amongst your fellow devs and communities that you engage in.
