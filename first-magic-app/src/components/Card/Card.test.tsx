import { fireEvent, render as rtlRender, screen } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Card from "./Card";
import { createMemoryHistory } from "history";
import { Route, Router } from "react-router";
import App from "../../App";

const mockedProps = {
  name: "name",
  id: "1",
  added: true,
};

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("Card testing", () => {
  it("renders correctly", async () => {
    const tree = renderer.create(<Card {...mockedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("display name", async () => {
    render(<Card {...mockedProps} />);
    const name = await screen.findByLabelText("name");
    expect(name).toBeInTheDocument();
  });

  it("display fullfiled heart when magic is in collection", async () => {
    render(<Card {...mockedProps} />);
    const img = await screen.findByLabelText("fullFilled");
    expect(img).toBeInTheDocument();
  });

  it("display empty heart when magic is not collected", async () => {
    render(<Card {...mockedProps} added={false} />);
    const img = await screen.findByLabelText("empty");
    expect(img).toBeInTheDocument();
  });
});
