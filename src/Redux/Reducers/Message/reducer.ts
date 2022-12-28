import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Message/action";
import {IMessage} from "@/Models/Model";

export type Message = IMessage[];

export const reducer: Reducer<Message, {id: any, message: IMessage} & Action> = (state = [], action) => {
    switch (action.type) {
        case types.DEL_MESSAGE:
            return state.filter(node => node.id !== action.id)
        case types.ADD_MESSAGE:
            const next = {...action.message};
            if(!next.id) next.id = new Date().getTime();
            return [...state, next];
        default:
            return state;
    }
}
