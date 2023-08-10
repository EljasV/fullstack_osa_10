import {fireEvent, render, screen, waitFor} from "@testing-library/react-native";
import {SignInContainer} from "../../components/SignIn";


describe("SignIn", () => {
    describe("SignInContainer", () => {
        it("submit func will be called", async () => {

            const onSubmit = jest.fn();
            render(<SignInContainer onSubmit={onSubmit}/>);

            fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
            fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");

            fireEvent.press(screen.getByTestId("SubmitButton"));

            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1)
                expect(onSubmit.mock.calls[0][0]).toEqual({username: "kalle", password: "password"});
            });
        });
    });
});