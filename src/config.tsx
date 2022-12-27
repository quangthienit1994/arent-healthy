import React from "react";

export const config = {
    siteName: "Healthy",
    menu: [
        {title: "自分の記録", url: "/", icon: <img alt={"自分の記録"} src={"/images/icon_memo.svg"}/>},
        {title: "チャレンジ", url: "/profile", icon: <img alt={"チャレンジ"} src={"/images/icon_challenge.svg"}/>},
        {title: "お知らせ", url: "/recommended", icon: <img alt={"お知らせ"} src={"/images/icon_info.svg"}/>},
    ],
    home: [
        {title: "Morning", url: "/", icon: <img alt={"自分の記録"} src={"/images/icon_knife.svg"}/>},
        {title: "Lunch", url: "/", icon: <img alt={"チャレンジ"} src={"/images/icon_knife.svg"}/>},
        {title: "Dinner", url: "/", icon: <img alt={"チャレンジ"} src={"/images/icon_knife.svg"}/>},
        {title: "Snack", url: "/", icon: <img alt={"チャレンジ"} src={"/images/icon_cup.svg"}/>},
    ],
    profile: [
        {title: "自分の記録", url: "/"},
        {title: "体重グラフ", url: "/"},
        {title: "目標", url: "/"},
        {title: "選択中のコース", url: "/"},
        {title: "コラム一覧", url: "/"},
        {title: "設定", url: "/"},
    ],
    footer: [
        {title: "会員登録", url: "/"},
        {title: "運営会社", url: "/"},
        {title: "利用規約", url: "/"},
        {title: "個人情報の取扱について", url: "/"},
        {title: "特定商取引法に基づく表記", url: "/"},
        {title: "お問い合わせ", url: "/"},
    ],
    profileNavigators: [
        {
            title: "BODY RECORD",
            id: "body-record",
            description: "自分のカラダの記録",
            thumbnail: "/images/MyRecommend-1.jpg",
            component: React.lazy(() => import("@/Containers/BodyRecord"))
        },
        {
            title: "MY EXERCISE",
            id: "my-exercise",
            description: "自分の運動の記録",
            thumbnail: "/images/MyRecommend-2.jpg",
            component: React.lazy(() => import("@/Containers/MyExercise"))
        },
        {
            title: "MY DIARY",
            id: "my-diary",
            description: "自分の日記",
            thumbnail: "/images/MyRecommend-3.jpg",
            component: React.lazy(() => import("@/Containers/MyDiary"))
        },
    ],
    recommends: [
        {title: "RECOMMENDED \n COLUMN", extra: "オススメ"},
        {title: "RECOMMENDED \n DIET", extra: "ダイエット"},
        {title: "RECOMMENDED \n BEAUTY", extra: "美容"},
        {title: "RECOMMENDED \n HEALTH", extra: "健康"},
    ]
}
