const AUTH = "AUTH";

type Actions = ActionAuth // для возможных других action

type ActionAuth = {
    type: typeof AUTH,
}

type StateType = {
    authStatus: boolean
    login: string,
    password: string
}
let initialState: StateType = {
    authStatus: false,
    login: "developer21",
    password: "123456",
};

export const reducer = (state = initialState, action: Actions): StateType => {
    switch (action.type) {
        case AUTH:
            return {
                authStatus: true,
                login: state.login,
                password: state.password

            };
        default:
            return state;
    }
}

export const authorize = (): ActionAuth => {
    return {
        type: AUTH,
    }
};
