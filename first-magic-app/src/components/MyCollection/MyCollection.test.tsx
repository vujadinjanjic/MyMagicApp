import MyCollection from "./MyCollection";
import { render as rtlRender, screen } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const mockedProps = {
  close: jest.fn(),
  mySpells: ["magicOne", "magicTwo"],
};

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("My collection testing ", () => {
  test("renders correctly", async () => {
    const { container } = render(<MyCollection {...mockedProps} />);
    expect(container).toBeInTheDocument();
  });

  test("invokes close function", async () => {
    render(<MyCollection {...mockedProps} />);
    const closeIcon = await screen.findByLabelText("close");
    await userEvent.click(closeIcon);
    expect(mockedProps.close).toBeCalledTimes(1);
  });
});
