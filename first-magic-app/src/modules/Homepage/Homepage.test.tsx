import Homepage from "./Homepage";
import { render as rtlRender, screen } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("Homepage testing", () => {
  it("Homepage is rendering", async () => {
    const { container } = render(<Homepage />);
    expect(container).toBeInTheDocument();
  });

  test("Open my collection drawer", async () => {
    render(<Homepage />);
    const img = await screen.findByLabelText("open-drawer");
    userEvent.click(img);
    const drawer = await screen.findByLabelText("drawer");
    expect(drawer).toBeInTheDocument();
  });

  test("Display card component", async () => {
    render(<Homepage />);

    const cards = await screen.findByLabelText("spells");

    expect(cards).toBeInTheDocument();
  });
});
