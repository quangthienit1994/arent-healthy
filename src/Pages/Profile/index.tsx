import React from "react";
import MyExercise from "@/Containers/MyExercise";
import MyDiary from "@/Containers/MyDiary";
import Button from "@/Shareds/Button";

const Profile: React.FC = () => {
    return (
        <div className="container">
            <div className="pt-5 pb-10">
                <MyExercise />
                <h2 className={"text-xl mt-12 font-inter"}>MY DIARY</h2>
                <MyDiary />
                <div className="mt-8 flex justify-center">
                    <Button>自分の日記をもっと見る</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile;
