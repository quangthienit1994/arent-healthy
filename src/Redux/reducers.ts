import {Auth, reducer as authReducer} from "@/Redux/Reducers/Auth/reducer";
import {Analyze, reducer as analyzeReducer} from "@/Redux/Reducers/Analyze/reducer";
import {Food, reducer as foodReducer} from "@/Redux/Reducers/Food/reducer";
import {Exercise, reducer as exerciseReducer} from "@/Redux/Reducers/Exercise/reducer";
import {Diary, reducer as diaryReducer} from "@/Redux/Reducers/Diaries/reducer";
import {Message, reducer as messageReducer} from "@/Redux/Reducers/Messages/reducer";
import {News, reducer as newsReducer} from "@/Redux/Reducers/News/reducer";

export interface Reducers {
    auth: Auth,
    food: Food,
    exercise: Exercise,
    diary: Diary,
    analyze: Analyze,
    message: Message,
    news: News,
}

const reducers = {
    auth: authReducer,
    food: foodReducer,
    exercise: exerciseReducer,
    analyze: analyzeReducer,
    diary: diaryReducer,
    message: messageReducer,
    news: newsReducer,
};

export default reducers;
