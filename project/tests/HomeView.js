import HomeView from "../src/views/HomeView";
import { render } from "@testing-library/vue";
test("It renders correctly", () => {
  const { getByText } = render(HomeView);
});
