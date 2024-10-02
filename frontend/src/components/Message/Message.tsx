import { LuCheck } from "react-icons/lu";
import "./Message.css";

type MessageProps = {
    message: string
}

export function Message({ message }: MessageProps) {
    return (
        <div className={message ? "message active" : "message"}>
            <div className="check">
                <LuCheck />
            </div>
            <p>
                {message}
            </p>
        </div>
    )
}