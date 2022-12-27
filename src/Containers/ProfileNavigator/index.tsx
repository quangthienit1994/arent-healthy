import React, {ForwardedRef, useCallback, useRef} from "react";
import styled from "@emotion/styled";
import ProfileNavigate, {INavigate} from "@/Components/ProfileNavigate";

const Container = styled.div({})

interface ProfileNavigatorProps {
    items: (INavigate & { id: string })[]
    children?: any
}

const ProfileNavigator: React.FC<ProfileNavigatorProps> = (({items, children}) => {
    const ref = useRef<any>();

    const onClick = useCallback((id: string) => {
        if (!ref.current) return;
        const element = ((ref as any)!.current)!.querySelector(`#${id}`);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }, [ref])

    return (
        <Container className={"grid grid-cols-1 gap-12"}>
            <div className={"grid md:grid-cols-3 gap-5 lg:gap-[45px]"}>
                {
                    items.map(({title, thumbnail, description, id}, index) => {
                        return <ProfileNavigate
                            key={index}
                            title={title}
                            thumbnail={thumbnail}
                            description={description}
                            onClick={() => onClick(id)}
                        />
                    })
                }
            </div>
            <div ref={ref} className={"grid grid-cols-1 gap-12"}>
                {children}
            </div>
        </Container>
    )
})

export default ProfileNavigator;
