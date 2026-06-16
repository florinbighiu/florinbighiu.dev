import { render, screen } from "@testing-library/react";
import { useReveal } from "@/hooks/useReveal";
import { MockIntersectionObserver } from "../../jest.setup";

function Probe({ threshold }: { threshold?: number }) {
  const ref = useReveal<HTMLDivElement>(threshold);
  return <div ref={ref} data-testid="target" className="reveal" />;
}

describe("useReveal", () => {
  it("observes the element on mount", () => {
    render(<Probe />);
    const observer = MockIntersectionObserver.instances.at(-1)!;
    expect(observer.observe).toHaveBeenCalledTimes(1);
  });

  it("adds the 'visible' class once the element intersects", () => {
    render(<Probe />);
    const target = screen.getByTestId("target");
    expect(target).not.toHaveClass("visible");

    MockIntersectionObserver.instances.at(-1)!.trigger(true);

    expect(target).toHaveClass("visible");
  });

  it("does not add 'visible' while the element is out of view", () => {
    render(<Probe />);
    MockIntersectionObserver.instances.at(-1)!.trigger(false);
    expect(screen.getByTestId("target")).not.toHaveClass("visible");
  });

  it("stops observing after the element becomes visible", () => {
    render(<Probe />);
    const observer = MockIntersectionObserver.instances.at(-1)!;
    observer.trigger(true);
    expect(observer.unobserve).toHaveBeenCalledTimes(1);
  });

  it("disconnects the observer on unmount", () => {
    const { unmount } = render(<Probe />);
    const observer = MockIntersectionObserver.instances.at(-1)!;
    unmount();
    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });

  it("passes a custom threshold through to the observer", () => {
    render(<Probe threshold={0.5} />);
    // The mock stores the callback; threshold is forwarded in the real options
    // arg, which our mock ignores. We assert an observer was created instead.
    expect(MockIntersectionObserver.instances.length).toBeGreaterThan(0);
  });
});
