import "./Display.css"

export default function Display({pos, content}){
    if(content){
        return <DisplayWithContent pos={pos} content={content} />
    } else {
        return <DisplayWithoutContent pos={pos} />
    }
}

function DisplayWithoutContent({pos}){
    return (
        <div className="display" style={pos}>
            <a className="displayName">Learn more</a>
        </div>
    )
}

function DisplayWithContent({pos, content}){
    return (
        <div className="display" style={pos}>
            <img className="displayImg" src={content} />
            <a className="displayName">See details</a>
        </div>
    )
}
