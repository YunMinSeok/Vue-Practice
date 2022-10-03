import HomeView from "../src/views/HomeView";
import { render } from "@testing-library/vue";

describe("HelloView Test", () => {
  test("It renders correctly", () => {
    const { getByText } = render(HomeView);
    console.log(1);
    getByText("set");
  });
});
