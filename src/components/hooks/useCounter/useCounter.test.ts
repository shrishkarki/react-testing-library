import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same inital count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
  // In React Testing Library, act() is usually needed for handling updates that are asynchronous or require multiple renders (such as state changes triggered by events). However, in many simple cases, you don’t need to explicitly call act() because React Testing Library automatically wraps interactions (like userEvent.click()) in act() when required.

  test("should increament function works", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decreament function works", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
