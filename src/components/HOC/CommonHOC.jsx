import React from "react";
import { useState } from "react";

export default function CommonHOC(WrappedHOC) {

    const Logic = () => {
        const [like, setLike] = useState(0)

        const handleLike = () => {
            setLike((prevState) => prevState + 1)
        }

        return (
            <WrappedHOC likeHandle={handleLike} likeCount={like} />
        )
    }

    return Logic
}