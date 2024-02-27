import { assert, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import { render } from '@testing-library/vue';

import Navbar from "../src/components/navbar/Navbar.vue";

/* Vitest */
test("JSON", () => {
  const input = {
    foo: "hello",
    bar: "world",
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, "matches original");
});

/* Test Utils */
test("renders message", async () => {
    const wrapper = mount(Navbar);
    // expect(wrapper.text()).toContain('Navbar');
});

/* Testing Library */
test('renders navbar component with correct text', async () => {
  const { getByText } = render(Navbar);
  // getByText('Navbar');
});