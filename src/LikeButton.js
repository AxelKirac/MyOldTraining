import React from "react";

export default function LikeButton() {
    const [liked, setLiked] = React.useState(false)

    if (liked) {
        return 'Vous avez bien likez';
    }


return <button onClick= {() => setLiked(true)}>BUTTON</button>
}