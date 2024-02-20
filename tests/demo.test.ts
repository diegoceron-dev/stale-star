import { assert, expect, test } from "vitest";
import HelloWorld from "../src/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";

const wrapper = mount(HelloWorld);

// Edit an assertion and save to see HMR in action

test("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test("JSON", () => {
  const input = {
    foo: "hello",
    bar: "world",
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, "matches original");
});

test("renders message", async () => {
    expect(wrapper.text()).toContain('Hello World');
});
