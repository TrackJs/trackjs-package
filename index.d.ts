// Type definitions for TrackJS 3.10.4
// Project: https://github.com/TrackJS/trackjs-package

interface TrackJSStatic {

  /**
   * Adds a new key-value pair to the metadata store. If the key already exists
   * it will be updated.
   *
   * @param {String} key
   * @param {String} value
   */
  addMetadata(key: string, value: string): void;

  /**
   * Invokes the provided function within a try/catch wrapper that forwards
   * the error to TrackJS.
   *
   * @param {Function} func The function to be invoked.
   * @param {Object} context The context to invoke the function with.
   * @param {...} Additional arguments passed to the function.
   * @return {*} Output of the function.
   */
  attempt(func: Function, context?: any, ...args: any[]): any;

  /**
   * Configures the instance of TrackJS with the provided configuration.
   *
   * @param {Object} options The Configuration object to apply
   * @returns {Boolean} True if the configuration was successful.
   */
  configure(options: TrackJSConfigureOptions): boolean;

  /**
   * Non-exposed browser console logging. Use this private console to prevent
   * messages from being exposed into the standard browser console.
   */
  console: {

    /**
     * Records context into the Telemetry log with normal severity
     *
     * @param {...} args Arguments to be serialized into the Telemetry log.
     */
    log(...args: any[]): void;

    /**
     * Records context into the Telemetry log with DEBUG severity
     *
     * @param {...} args Arguments to be serialized into the Telemetry log.
     */
    debug(...args: any[]): void;

    /**
     * Records context into the Telemetry log with INFO severity
     *
     * @param {...} args Arguments to be serialized into the Telemetry log.
     */
    info(...args: any[]): void;

    /**
     * Records context into the Telemetry log with WARN severity
     *
     * @param {...} args Arguments to be serialized into the Telemetry log.
     */
    warn(...args: any[]): void;

    /**
     * Records context into the Telemetry log with ERROR severity. If console
     * errors are enabled, which is default, this will also transmit an error.
     *
     * @param {...} args Arguments to be serialized into the Telemetry log.
     */
    error(...args: any[]): void;

  }

  /**
   * Running version of the tracker script
   */
  hash: string;

  /**
   * Installs the agent into the current browser document.
   *
   * @param options The configuration object to apply.
   */
  install(options: TrackJSInstallOptions): boolean;

  /**
   * Whether the agent has been installed into the current environment
   *
   * @returns {boolean}
   */
  isInstalled(): boolean;

  /**
   * Removes a key from the metadata store, if it exists.
   *
   * @param {String} key
   */
  removeMetadata(key: string): void;

  /**
   * Directly invokes an error to be sent to TrackJS.
   *
   * @param {Error|Object|String} error The error to be tracked. If error does
   *        not have a stacktrace, will attempt to generate one.
   */
  track(error: Error | Object | String): void;

  /**
   * Running version of the tracker script
   */
  version: string;

  /**
   * Returns a wrapped and watched version of the function to automatically
   * catch any errors that may arise.
   *
   * @param {Function} func The function to be watched.
   * @param {Object} context The context to invoke the function with.
   * @return {Function} Wrapped function
   */
  watch(func: Function, context?: any): Function;

  /**
   * Wrap and watch all of the functions on an object that will
   * automatically catch any errors that may arise.
   *
   * @param {Object} obj The Object containing functions to be watched
   * @return {Object} Object now containing wrapped functions.
   */
  watchAll(obj: Object): Object;
}

/**
 * String formatted as an ISO-8601 Date. Example 0000-00-00T00:00:00.000Z
 */
export interface ISO8601DateString extends String { }

/**
 * Payload of an error sent to TrackJS. Useful when manipulating errors via
 * the `onError` callback.
 */
export interface TrackJSErrorPayload {
  /** Stack trace at time of asynchronous callback binding. */
  bindStack?: string;
  /** Timestamp of the asynchronous callback binding. */
  bindTime?: ISO8601DateString;
  /** Browser Console Telemetry */
  console: {
    /** Timestamp the event occurred */
    timestamp: ISO8601DateString;
    /** Console severity of the event */
    severity: string;
    /** Formatted message captured */
    message: string;
  }[];
  /** Context provided about the customer session */
  customer: {
    /** Customer application id */
    application?: string;
    /** Unique Id describing the current page view */
    correlationId: string;
    /** Customer-provided visitor session ID */
    sessionId?: string;
    /** Customer token */
    token: string;
    /** Customer-provided visitor user ID */
    userId?: string;
    /** Customer-provided system version ID */
    version?: string;
  };
  /** How the error was captured. */
  entry: string;
  /** Context about the browser environment */
  environment: {
    /** How long the visitor has been on the page in MS */
    age: number;
    /** Other discovered JavaScript libraries on the DOM. */
    dependencies: { [name: string]: string };
    /** browser userAgent string */
    userAgent: string;
    /** current window height */
    viewportHeight: number;
    /** current window width */
    viewportWidth: number;
  };
  /** Custom environment metadata. */
  metadata: {
    /** metadata group name */
    key: string;
    /** metadata value */
    value: string;
  }[];
  /** Error message */
  message: string;
  /** Navigation Telemetry */
  nav: {
    /** Timestamp of the navigation event */
    "on": ISO8601DateString;
    /** Navigation method used. IE "replaceState" "setState" */
    "type": string;
    /** Previous URL */
    "from": string;
    /** New URL */
    "to": string
  }[];
  /** Network Telemetry */
  network: {
    /** Timestamp the request started */
    startedOn: ISO8601DateString;
    /** Timestamp the request completed */
    completedOn?: ISO8601DateString;
    /** HTTP Method used */
    method: string;
    /** URL Requested */
    url: string;
    /** HTTP Status Code */
    statusCode?: number;
    /** HTTP Status Text */
    statusText?: string;
    /** Mechanism of network use. IE "fetch", "xhr" */
    type: string;
  }[];
  /** location of the browser at the time of the error */
  url: string;
  /** stack trace */
  stack: string;
  /** client-reported time the error occurred */
  timestamp: ISO8601DateString;
  /** Visitor Action Telemetry */
  visitor: {
    /** timestamp the event occurred */
    timestamp: ISO8601DateString;
    /** visitor action taken. "input" or "click" */
    action: string;
    /** DOM element acted upon */
    element: {
      /** name of the element tag. IE "input" */
      tag: string;
      /** hashmap of element attributes */
      attributes: { [attributeName: string]: string };
      /** value of the element */
      value: {
        /** Number of characters in the value */
        length: number;
        /** Patterns describing the value. */
        pattern: string;
      };
    };
  }[];
  /** version of the tracker.js lib */
  version: string;
  /** Number of messages throttled clientside */
  throttled: number;
}

/**
 * Configuration options that can be passed to `trackJs.configure()`
 */
export interface TrackJSConfigureOptions {

  /**
   * Whether duplicate errors should be suppressed before sending.
   * @default true
   */
  dedupe?: boolean;

  /**
   * Whether to attempt discovery of other JavaScript libs on the page.
   * @default true
   */
  dependencies?: boolean;

  /**
   * Custom handler to be notified *before* an error is transmitted. Can be used
   * to modify or ignore error data.
   *
   * @param {TrackJSErrorPayload} payload Error payload to send to TrackJS.
   * @param {Error} error Error object that initiated the capture.
   */
  onError?: (payload: TrackJSErrorPayload, error?: Error) => boolean;

  /**
   * Custom handler for serializing non-string data in errors and telemetry
   * events.
   */
  serialize?: (what: any) => string;

  /**
   * Id of the visitor session. Use this to correlate TrackJS
   * Error reports with other reporting data.
   */
  sessionId?: string;

  /**
   * Id of the visitor. Use this to identify the current user for support.
   */
  userId?: string;

  /**
   * Id of the running application. Recommend to use either a SEMVER
   * representation, or a VCS Hash Key.
   */
  version?: string;

}

/**
 * Configuration options that are initialized from `window._trackJs`
 */
export interface TrackJSInstallOptions extends TrackJSConfigureOptions {

  /**
   * TrackJS Application token. Get this from `https://my.trackjs.com/Account/Applications`
   */
  application?: string;

  callback?: {
    /**
     * Whether errors should be recorded when caught from callback functions.
     * @default true
     */
    enabled?: boolean;
    /**
     * Whether stack traces should be generated at the time of invocation of an
     * asynchronous action. This will produce stack traces similar to the
     * "async" traces in Chrome Developer tools.
     * There is a performance impact to enabling this. Confirm behavior in your
     * application before releasing.
     * default false.
     */
    bindStack?: boolean;
  };

  console?: {
    /**
     * Whether events should be recorded from the console.
     * @default true
     */
    enabled?: boolean;
    /**
     * Whether console messages should be passed through to the browser console
     * or hidden by TrackJS. Useful for removing debug messaging from production.
     * @default true
     */
    display?: boolean;
    /**
     * Whether an error should be recorded by a call to `console.error`.
     * @default true
     */
    error?: boolean;
    /**
     * Whether a warning should be recorded by a call to `console.warn`.
     * @default false
     */
    warn?: boolean;
    /**
     * Limit the console functions to be watched by whitelisting them here.
     * @default ["log","debug","info","warn","error"]
     */
    watch?: string[];
  };

  /**
   * Whether the tracker script is enabled.
   * @default true
   */
  enabled?: boolean;

  /**
   * Domain where errors and usage data to be sent in order to bypass ad blocker
   * restrictions to `trackjs.com`. IE "errors.example.com".
   */
  forwardingDomain?: string;

  network?: {
    /**
     * Whether events should be recorded from the network.
     * @default true
     */
    enabled?: boolean;
    /**
     * Whether an error should be recorded by XHR responses with status code
     * 400 or greater.
     * @default true
     */
    error?: boolean;
  };

  /**
   * Your account token. Get this from `https://my.trackjs.com/install`
   */
  token: string;

  visitor?: {
    /**
     * Whether events should be recorded from the visitor actions.
     * @default true
     */
    enabled?: boolean;
  };

  window?: {
    /**
     * Whether events should be recorded from globally unhandled errors.
     * @default true
     */
    enabled?: boolean;
    /**
      * Whether events should be recorded from globally unhandled promise
      * rejections, if supported.
      * @default true
      */
    promise?: boolean;
  };

}

declare global {
  var TrackJS: TrackJSStatic | undefined;
  interface Window {
    TrackJS: TrackJSStatic | undefined;
  }
}

declare var TrackJS: TrackJSStatic
export { TrackJS }
