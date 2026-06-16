import "@testing-library/jest-dom";

// jsdom doesn't implement IntersectionObserver, which several components/hooks rely on.
// Provide a controllable mock: tests can grab the most recent instance to trigger callbacks.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn(() => []);

  static instances: MockIntersectionObserver[] = [];

  /** Simulate the observed element scrolling into view. */
  trigger(isIntersecting = true) {
    this.callback(
      [{ isIntersecting, target: document.body } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

beforeEach(() => {
  MockIntersectionObserver.instances = [];
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

export { MockIntersectionObserver };
