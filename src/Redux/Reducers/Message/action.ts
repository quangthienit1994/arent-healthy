import {IMessage} from "@/Models/Model";

export const types = {
    ADD_MESSAGE: Symbol("ADD_MESSAGE"),
    DEL_MESSAGE: Symbol("DEL_MESSAGE"),
}

export const actions = {
    addError: (message: Omit<IMessage, 'error'>) => ({type: types.ADD_MESSAGE, data: {...message, type: "error"}}),
    delete: (id: string) => ({type: types.DEL_MESSAGE, id}),
};

export const message = actions;
