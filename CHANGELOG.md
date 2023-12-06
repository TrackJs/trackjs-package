JavaScript Browser Agent Changelog
==================================

## [Version 3.10.4](https://cdn.trackjs.com/agent/3.10.4/t.js) (2023-12-05)

Update Typescript types for Network optional fields.

## [Version 3.10.3](https://cdn.trackjs.com/agent/3.10.3/t.js) (2023-11-13)

No Change, build system updates.

## [Version 3.10.2](https://cdn.trackjs.com/agent/3.10.2/t.js) (2023-10-23)

Features:
  - Verified with Node 18 LTS

## [Version 3.10.1](https://cdn.trackjs.com/agent/3.10.1/t.js) (2021-08-05)

Bugfixes:
  - Fix typo in readme.

## [Version 3.10.0](https://cdn.trackjs.com/agent/3.10.0/t.js) (2021-07-15)

Features:
  - Agent supports ServiceWorkers and SharedWorkers

## [Version 3.9.2](https://cdn.trackjs.com/agent/3.9.2/t.js) (2021-05-01)

Bugfixes:
  - Handle case where read-only error object passed into the global error handler.
  - Handle serializing a circular-referenced object with broken property getters.

## [Version 3.9.1](https://cdn.trackjs.com/agent/3.9.1/t.js) (2021-04-23)

Bugfixes:
  - Fixed rare case where `Illegal invocation` was thrown when calling a console function.

## [Version 3.9.0](https://cdn.trackjs.com/agent/3.9.0/t.js) (2021-03-04)

Features:
  - Added `forwardingDomain` option to allow for ad blocker bypass.

## [Version 3.8.0](https://cdn.trackjs.com/agent/3.8.0/t.js) (2021-02-17)

Features:
  - Agent supports use inside of WebWorkers. Can be imported as a module or using `importScript`.
  - Tooling upgrade to Node 14.5.4

## [Version 3.7.7](https://cdn.trackjs.com/agent/3.7.7/t.js) (2021-02-11)

Bugfixes:
  - Normalized the error messages for network failures, which sometimes do not include a `statusText` property, by removing it from the message string. Customers will no longer need duplicate ignore rules to handle both variants.
  - Expose error when user calls `XMLHttpRequest.send` before `XMLHttpRequest.open`, which was previously treated as an internal fault.
  - Update typescript definitions to include the `error` argument in the `onError` callback.

## [Version 3.7.6](https://cdn.trackjs.com/agent/3.7.6/t.js) (2020-11-30)

Bugfixes:
  - Handles internal failure where the reason for a Promise rejection is `null`.

## [Version 3.7.5](https://cdn.trackjs.com/agent/3.7.5/t.js) (2020-09-10)

Bugfixes:
  - Escapes space and tab characters in network telemetry URLs that would be automatically converted by the browser.

## [Version 3.7.4](https://cdn.trackjs.com/agent/3.7.4/t.js) (2020-05-19)

Bugfixes:
  - Fix `fetch` wrapping that caused errors during abort. ([Issue#38](https://github.com/TrackJs/trackjs-package/issues/38)).
  - Add console.warn Typescript definition. ([Issue#39](https://github.com/TrackJs/trackjs-package/issues/39)).

## [Version 3.7.3](https://cdn.trackjs.com/agent/3.7.3/t.js) (2020-02-26)

Bugfixes:
  - Allow `undefined` configuration properties to be passed without stopping.


## [Version 3.7.2](https://cdn.trackjs.com/agent/3.7.2/t.js) (2019-09-12)

Bugfixes:
  - Update `fetch` wrapping to accommodate non-standardized URL object behavior utilized by Facebook sdk.


## [Version 3.7.1](https://cdn.trackjs.com/agent/3.7.1/t.js) (2019-09-11)

Bugfixes:
  - Change `fetch` wrapping to avoid a [Microsoft Edge Bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/23391036/) creating a `Request` object.
  - Add `TrackJS.isInstalled()` to Typescript definition.


## [Version 3.7.0](https://cdn.trackjs.com/agent/3.7.0/t.js) (2019-08-19)

Features:
  - Capture the element inner text as part of visitor Telemetry.


## [Version 3.6.0](https://cdn.trackjs.com/agent/3.6.0/t.js) (2019-08-12)

Bugfixes:
  - Add safety checking to XHR header detection to not show console warnings.


## [Version 3.5.0](https://cdn.trackjs.com/agent/3.5.0/t.js) (2019-08-12)

Features:
  - Revert of 3.4.0 due to a CORS issue.


## [Version 3.4.0](https://cdn.trackjs.com/agent/3.4.0/t.js) (2019-08-05)

Features:
  - Check for the presence of a Node correlationId on network request for cross-referencing with the Node agent.
  - Force TrackJS agent version into dependencies, even if we were bundled.
  - Change method of Image creation to be safer.
  - Added `agentPlatform` to error capture payload.
  - Added `TrackJS.isInstalled()` for checking install state.

Bugfixes:
  - None


## [Version 3.3.0](https://cdn.trackjs.com/agent/3.3.0/t.js) (2019-03-04)

Features:
  - Changed error capture to accept a `202 Accepted` response from the API to be more accurate to behavior.
  - Added agent version to error capture API call.
  - Improved internal implementation of util.contains.

Bugfixes:
  - Handle case where undefined can be thrown from an XHR listener.


## [Version 3.2.0](https://cdn.trackjs.com/agent/3.2.0/t.js) (2019-02-22)

Features:
  - Support Symbol types in object serializer.

Bugfixes:
  - Fixed error thrown when requiring into Node. Replaced with no-op.


## [Version 3.1.2](https://cdn.trackjs.com/agent/3.1.2/t.js) (2019-01-31)

Features:
  - None

Bugfixes:
  - Fixed serialization of unthrown errors in IE11.


## [Version 3.1.1](https://cdn.trackjs.com/agent/3.1.1/t.js) (2019-01-26)

Features:
  - None

Bugfixes:
  - Changed how window and document are detected in the main closure for webpack.



## [Version 3.1.0](https://cdn.trackjs.com/agent/3.1.0/t.js) (2019-01-19)

Features:
  - Detect if we are running in a NodeJS environment and safely disable monitoring.

Bugfixes:
  - Removed warning message printed when functions are called where `enabled=false` is in the configuration.



## [Version 3.0.1](https://cdn.trackjs.com/agent/3.0.1/t.js) (2018-11-10)

Features:
  - None

Bugfixes:
  - Updated install example with a safety check.
  - Updated types definition to include the global object.


## [Version 3.0.0](https://cdn.trackjs.com/agent/3.0.0/t.js) (2018-10-29)

Features:
  - Changed the global namespace to `TrackJS`. The previous `trackJs` still exists, but is deprecated.
  - Changed initialization behavior to be explicit, preferring to call the new `TrackJS.install(config)` instead of populating the `_trackJs` init object. The init object is still supported, but is deprecated.
  - Added support for the agent to be loaded as a module using any of the AMD, CommonJS, or ES6 Module notations.
  - Expanded the Typescript definition file to support the new module-based loading system.
  - Updated the CDN paths for the new agent to prevent forcing breaking changes on users referencing `current`. The new URL paths will now be `/agent/<version>/t.js`, `/agent/v3/canary/t.js`, and `/agent/v3/latest/t.js`.

Bugfixes:
  - None


## [Version 2.13.0](https://cdn.trackjs.com/releases/2.13.0/tracker.js) (2018-08-29)

Features:
  - Added new `dependencies` config key to opt-out of window.* version discovery.
  - Added exclusion of the `data-value` attribute from visitor element enumeration.

Bugfixes:
  - None


## [Version 2.12.0](https://cdn.trackjs.com/releases/2.12.0/tracker.js) (2018-08-20)

Features:
  - Added Method and URL information to `failed to Fetch` errors.
  - Added calling Stack Trace to `fetch` network errors.

Bugfixes:
  - None


## [Version 2.11.1](https://cdn.trackjs.com/releases/2.11.1/tracker.js) (2018-08-14)

Features:
  - None

Bugfixes:
  - Deployment pipeline check


## [Version 2.11.0](https://cdn.trackjs.com/releases/2.11.0/tracker.js) (2018-08-10)

Features:
  - Added truncation of Network Telemetry URLS to 2000 characters.
  - Added limit to Visitor Telemetry Elements of 10 Attributes.
  - Added limit to Visitor Telemetry Element Attributes of 100 characters.
  - Added truncation of Console Telemetry to 1000 characters if the total Console Telemetry size is larger than 80,000 characters. Truncation will be applied to console messages one at a time, oldest first, until within the limit.

Bugfixes:
  - None

## [Version 2.10.2](https://cdn.trackjs.com/releases/2.10.2/tracker.js) (2017-11-21)

Features:
  - None

Bugfixes:
  - Handle case where customer wraps `Function.prototype` that prevented later function wrapping.


## [Version 2.10.1](https://cdn.trackjs.com/releases/2.10.1/tracker.js) (2017-11-16)

Features:
  - None

Bugfixes:
  - Suppress an "Permission Denied" error that may occur in Selenium Firefox environments due to our wrapping.


## [Version 2.10.0](https://cdn.trackjs.com/releases/2.10.0/tracker.js) (2017-11-03)

Features:
  - Added patching of function properties and prototype from a callback onto the wrapped function. This makes it less obvious that we have changed out the function.

Bugfixes:
  - Fixed issue where Promise rejections from browser extensions could throw "Permission Denied" on Firefox when accessing the `reason` property.
  - Fixed issue with how we track the lifecycle of callback functions to use an external state approach. While this approach will expose some TrackJS internals into the global namespace ("__trackjs__"), it is more resilient to the varied kinds of callbacks we need to support.
  - Fixed issue where we could double-wrap callback functions, causing unnecessarily long stack traces.

## [Version 2.9.0](https://cdn.trackjs.com/releases/2.9.0/tracker.js) (2017-09-07)

Features:
  - Added capture of the original page URL and referrer to the error payload.

Bugfixes:
  - None.


## [Version 2.8.5](https://cdn.trackjs.com/releases/2.8.5/tracker.js) (2017-08-23)

Features:
  - None.

Bugfixes:

  - Fixed missing type definition for the dedupe option.


## [Version 2.8.4](https://cdn.trackjs.com/releases/2.8.4/tracker.js) (2017-06-28)

Features:
  - None.

Bugfixes:

  - Fixed issue in default serializer that could cause error "Right-hand side of 'instanceof' is not an object" when the page had mangled the value of `HTMLElement`.


## [Version 2.8.3](https://cdn.trackjs.com/releases/2.8.3/tracker.js) (2017-06-22)

Features:

  - Added ability to disable Fetch wrapping using `network.fetch = false` in the initialization object. This works around an old ZoneJS bug that has been patched in their library, but still has a large presence.

Bugfixes:

  - Fixed bug where duplicate garbage data could be sent when a Fetch request completes.


## [Version 2.8.2](https://cdn.trackjs.com/releases/2.8.2/tracker.js) (2017-06-08)

Features:

  - None

Bugfixes:

  - Fixed bug in fetch wrapping that caused failures when a prepopulated `Request` object was used.

## [Version 2.8.1](https://cdn.trackjs.com/releases/2.8.1/tracker.js) (2017-06-07)

Features:

  - None

Bugfixes:

  - Disable fetch that had been released while we debug an issue.

## [Version 2.8.0](https://cdn.trackjs.com/releases/2.8.0/tracker.js) (2017-06-02)

Features:

  - Added support for `fetch` network events to the Telemetry Timeline.

Bugfixes:

  - None.

## [Version 2.7.1](https://cdn.trackjs.com/releases/2.7.1/tracker.js) (2017-03-30)

Bugfixes:

  - Removed internal error payload cloning to reduce "Out of Memory" internal errors

## [Version 2.7.0](https://cdn.trackjs.com/releases/2.7.0/tracker.js) (2017-03-15)

Features:

  - Added configurable capability to de-duplicate subsequent errors that have the same message and stack trace through the same error entry point.
  - Created `Promise` error entry type and expanded unhandledrejection promise capture to include the BluebirdJS polyfill.

Bugfixes:

  - Disabled tracker no longer prints warnings about a missing API Key
  - Prevent case where an `undefined` error message could be represented as `'{}'`
  - Fixed timing of Page View pixel to wait for document load even on older browsers. Load will timeout at 10 seconds and send the pixel regardless.
  - Fixed issue where `addEventListener` with malformed capture options could cause an infinite recursion.
  - Fixed configuration of TypeScript definition typings.

## [Version 2.6.4](https://cdn.trackjs.com/releases/2.6.4/tracker.js) (2017-03-03)

*Empty released testing changes to automated deployments*


## [Version 2.6.3](https://cdn.trackjs.com/releases/2.6.3/tracker.js) (2017-01-27)

Features:

  - None

Bugfixes:

  - Corrected issue with removing event listeners that may have been attached before the tracker has initialized.


## [Version 2.6.2](https://cdn.trackjs.com/releases/2.6.2/tracker.js) (2016-12-29)

Features:

  - Instances of `Error` will be correctly serialized out into JSON strings.
  - Instances of `HTMLElement` will be serialized out as HTML representations.
  - Objects with circular references will be serialized using a fallback first-level-only serializer.

Bugfixes:

  - Corrected serialization of instantiated strings to not be double-quoted.
  - Corrected serialization of undefined and NaN values within an array.


## [Version 2.6.1](https://cdn.trackjs.com/releases/2.6.1/tracker.js) (2016-12-17)

Features:

  - None

Bugfixes:

  - Changed the `addEventListener` wrapping behavior to use `EventTarget` if it exists. This resolves a conflict with ZoneJS and Angular2.


## [Version 2.6.0](https://cdn.trackjs.com/releases/2.6.0/tracker.js) (2016-11-25)

Features:

  - Added navigation telemetry for `history.pushState`, `history.replaceState`, and `popstate` events.

Bugfixes:

  - None


## [Version 2.5.3](https://cdn.trackjs.com/releases/2.5.3/tracker.js) (2016-11-08)

Features:

  - None

Bugfixes:

  - Fixed support for wrapping `EventHandler` objects passed into `addEventListener`.


## [Version 2.5.2](https://cdn.trackjs.com/releases/2.5.2/tracker.js) (2016-10-22)

Features:

  - New Canary Build deployment pipeline

Bugfixes:

  - None

## [Version 2.5.1](https://cdn.trackjs.com/releases/2.5.1/tracker.js) (2016-08-22)

Features:

  - None

Bugfixes:

  - Fixed passthrough arguments of `window.onerror`

## [Version 2.5.0](https://cdn.trackjs.com/releases/2.5.0/tracker.js) (2016-08-03)

Features:

  - Added option to track an error for `console.warn`
  - Added tracking for global unhandled promise rejections from Chrome and Bluebird.js

Bugfixes:

  - Fixed TypeScript definitions to support proper module exports
  - Fixed passthrough override of `window.onerror`
  - Fixed network wrapping to support URL objects

## [Version 2.4.0](https://cdn.trackjs.com/releases/2.4.0/tracker.js) (2016-07-03)

Features:

  - Added Typescript definition file to NPM and Bower packages

Bugfixes:

  - None

## [Version 2.3.1](https://cdn.trackjs.com/releases/2.3.1/tracker.js) (2016-03-28)

Features:

  - None

Bugfixes:

  - Corrected behavior of tracking `null` or `undefined` to be properly represented.
  - Removed array notation from singular argument passed into console.

## [Version 2.3.0](https://cdn.trackjs.com/releases/2.3.0/tracker.js) (2016-03-26)

Features:

  - Changed default behavior to not drop a cookie containing the correlationId. Tracker will no longer maintain a cross-page identification of the user.
  - Updated default object serialization to attempt simple stringify on complex objects.

Bugfixes:

  - None

## [Version 2.2.0](https://cdn.trackjs.com/releases/2.2.0/tracker.js) (2016-01-06)

Features:

  - Introduced `trackJs.addMetadata` and `trackJs.removeMetadata` API

Bugfixes:

  - None

## [Version 2.1.16](https://cdn.trackjs.com/releases/2.1.16/tracker.js) (2015-11-18)

Features:

  - Added capture logic for specific Android [object Event] error

Bugfixes:

  - None

## [Version 2.1.15](https://cdn.trackjs.com/releases/2.1.15/tracker.js) (2015-10-13)

Features:

  - Added optional flag to suspend use of cookies. This was requested for better support of the new privacy-focused Safari.

Bugfixes:

  - None


## [Version 2.1.14](https://cdn.trackjs.com/releases/2.1.14/tracker.js) (2015-08-16)

Features:

  - None

Bugfixes:

  - Suppressed a duplicate "Script error" that could be tracked when hosted from the CDN and captured from a watched function. This also removes the need to use the "crossorigin" attribute in our script, which has also been removed from our suggested install.

## [Version 2.1.13](https://cdn.trackjs.com/releases/2.1.13/tracker.js) (2015-07-28)

Features:

  - None

Bugfixes:

  - Fixed bug in custom `serialize` configuration where objects passed to `trackJs.track` may be double-serialized.

## [Version 2.1.12](https://cdn.trackjs.com/releases/2.1.12/tracker.js) (2015-06-05)

Features:

  - None

Bugfixes:

  - Prevented a non-blocking security error from being displayed in the Safari web console when enumerating library versions from within an iframe.

## [Version 2.1.11](https://cdn.trackjs.com/releases/2.1.11/tracker.js) (2015-03-27)

Features:

  - None

Bugfixes:

  - Changed behavior of disabled tracker to not polyfill and wrap console.log
  - Fixed bug where objects sent into console.error were not properly serialized when tracked

## [Version 2.1.10](https://cdn.trackjs.com/releases/2.1.10/tracker.js) (2015-03-23)

Features:

  - None

Bugfixes:

  - Fixed bug where a server outage on usage.trackjs.com could impact the load time of customer applications.

## [Version 2.1.9](https://cdn.trackjs.com/releases/2.1.9/tracker.js) (2015-02-16)
***Released February 16, 2015***

Features:

  - None

Bugfixes:

  - Added exclusion for `https://localhost:0/chromecheckurl` from network telemetry. This url is used by Chrome on IOS 7+ to communicate with the native webdriver. It is not relevant to customer code.

## [Version 2.1.8](https://cdn.trackjs.com/releases/2.1.8/tracker.js) (2015-01-15)

Features:

  - Reformatted an AJAX Error to include the METHOD and URL that originated the error, in the format `404 Not Found: POST /some/api`.

Bugfixes:

  - None

## [Version 2.1.7](https://cdn.trackjs.com/releases/2.1.7/tracker.js) (2014-12-18)

Features:

  - None

Bugfixes:

  - stopped usage beacon from sending when tracker is disabled
  - prevented chrome warning when detecting webkitIndexDB

## [Version 2.1.6](https://cdn.trackjs.com/releases/2.1.6/tracker.js) (2014-10-31)

Features:

  - None

Bugfixes:

  - `trackJs.watchAll` returns the object for chaining initializations.

## [Version 2.1.5](https://cdn.trackjs.com/releases/2.1.5/tracker.js) (2014-10-26)

Features:

  - None

Bugfixes:

  - Fixed bug where `application` could be partially changed after initialization, causing errors and hits to be out of sync.

## [Version 2.1.4](https://cdn.trackjs.com/releases/2.1.4/tracker.js) (2014-10-16)

Features:

  - Added GitHub, NPM, and Bower Packages

Bugfixes:

  - None

## [Version 2.1.2](https://cdn.trackjs.com/releases/2.1.2/tracker.js) (2014-10-15)

Features:

  - None

Bugfixes:

  - Fixed bug with handling of SyntaxError in Chrome where file, column, and line are not populated.

## [Version 2.1.1](https://cdn.trackjs.com/releases/2.1.1/tracker.js) (2014-08-27)

Features:

  - Added stacktrace to errors generated from `console.error`
  - Added safer handling of falsy values in the default serializer
  - Change the logging behavior to include last 30 events rather than the last 10 of each type.
  - Added extra param to [onError callback](./Configuration) with the originating
  `Error` object.

Bugfixes:

  - None

## [Version 2.1.0](https://cdn.trackjs.com/releases/2.1.0/tracker.js) (2014-08-23)

Features:

  - Added support for multiple applications under a single account.

Bugfixes:

  - None

## [Version 2.0.3](https://cdn.trackjs.com/releases/2.0.3/tracker.js) (2014-07-15)

Features:

  - None

Bugfixes:

  - Fixed bug in `watchAll` where function context was being lost, affecting Backbone.js wrapping.
  - Prevented errors that have already been tracked from being captured again from `watchAll`
  - Added Corresponding wrapping of `removeEventListener` elements and XHR that impacted Meteor apps.

## [Version 2.0.2](https://cdn.trackjs.com/releases/2.0.2/tracker.js) (2014-07-09)

Features:

  - None

Bugfixes:

  - Fixed bug where Internet Explorer 8 improperly serialized some messages, preventing them from display in the UI
  - Added checks for `_trackJS` and `_trackjs` (in addition to `_trackJs`) for preconfig.
  - Added safety check to error wrapping in case a string is thrown.

## [Version 2.0.1](https://cdn.trackjs.com/releases/2.0.1/tracker.js) (2014-07-08)

Features:

  - None

Bugfixes:

  - Fixed bug where `window.onerror` would generate an error if called with invalid arguments.
  - Fixed bug where `window.onerror` messages would not include all possible information.

## [Version 2.0.0](https://cdn.trackjs.com/releases/2.0.0/tracker.js) (2014-07-01)

Features:

  - (Breaking) Restructuring of the configuration structure. See docs for updates.
  - (Breaking) Renamed `customer` to `token`
  - (Breaking) Removal of the global `track` alias
  - (Breaking) Removal of `ignore` RegEx option
  - Added `onError` callback for finer control of ignoring and manipulating errors
  - Added `serialize` callback to control how objects are serialized into the log
  - Added error catching for `setTimeout`, `setInterval`, `element.addEventListener`, and `xhr.addEventListener`
  - Added option to capture a bind-time stacktrace
  - Added finer control of which console functions should be wrapped

Bugfixes:

  - Fixed bug where caught errors were tracked a second time by window.onerror
  - Fixed bug when cookies are disabled in Android

## [Version 1.2.7](https://cdn.trackjs.com/releases/1.2.7/tracker.js) (2014-06-10)

Features:

  - None

Bugfixes:

  - Fixed tracking input events on multiselect.

## [Version 1.2.6](https://cdn.trackjs.com/releases/1.2.6/tracker.js) (2014-05-29)

Features:

  - None

Bugfixes:

  - Fixed bug in ignore api that prevented multiple matching

## [Version 1.2.5](https://cdn.trackjs.com/releases/1.2.5/tracker.js) (2014-04-04)

Features:

  - Added stacktrace that may be available to global window.onerror

Bugfixes:

  - None

## [Version 1.2.4](https://cdn.trackjs.com/releases/1.2.4/tracker.js) (2014-04-03)

Features:

  - None

Bugfixes:

  - Fixed IE10/11 XDomainRequest inspection.

## [Version 1.2.3](https://cdn.trackjs.com/releases/1.2.3/tracker.js) (2014-03-27)

Features:

  - None

Bugfixes:

  - Fixed inspection errors in Firefox 6.0 and below

## [Version 1.2.2](https://cdn.trackjs.com/releases/1.2.2/tracker.js) (2014-02-23)

Features:

  - Exceptions wrapped by watchAll are rethrown after transmission.

Bugfixes:

  - Fixed webkit warning message on transmission.

## [Version 1.2.1](https://cdn.trackjs.com/releases/1.2.1/tracker.js) (2014-01-23)

Features:

  - None

Bugfixes:

  - Fixed IE8 bug with observing network requests--IE8 won't support this, and the feature has been disabled for this browser.

## [Version 1.2.0](https://cdn.trackjs.com/releases/1.2.0/tracker.js) (2013-12-30)

Features:

  - Added `trackJs.track()` now supports objects, strings, or error objects
  - Added `trackJs.watchAll()` supports watching objects of functions
  - Added `trackJs.watch()` returns a watched version of a single function
  - Added `trackJs.attempt()` executes a single function and catches errors from it
  - Deprecated `trackAll()`

Bugfixes:

  - None

## [Version 1.1.0](https://cdn.trackjs.com/releases/1.1.0/tracker.js) (2013-11-14)

Features:

  - Added ability to ignore functions on an object for trackAll()
  - Added ignore by message configuration
  - Added configuration option to disable inspectors
  - Added direct logging capability from trackJs.log, trackJs.warn, etc. for use if console inspector is disabled.
  - Added Support pre-load configuration

Bugfixes:

  - None

## [Version 1.0.1](https://cdn.trackjs.com/releases/1.0.1/tracker.js) (2013-10-18)

Features:

  - Initial beta release

Bugfixes:

- None
