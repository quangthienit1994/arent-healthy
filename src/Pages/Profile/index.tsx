import React from "react";
import ProfileNavigator from "@/Containers/ProfileNavigator";
import {config} from "@/config";

const Profile: React.FC = () => {
    return (
        <div className="container">
            <div className="pt-5 pb-10">
                <ProfileNavigator items={config.profileNavigators}>
                    {
                        config.profileNavigators.map(({component: Component, id}) => {
                            return (
                                <div id={id} key={id}>
                                    {<Component/>}
                                </div>
                            )
                        })
                    }
                </ProfileNavigator>
            </div>
        </div>
    )
}

export default Profile;
