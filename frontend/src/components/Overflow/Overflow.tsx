import "./Overflow.css";

export type OverflowProps = {
    title: string,
    text: string
}

export function Overflow({ title, text }: OverflowProps) {
    return (
        <article className="overflow">
            <h1>{title}</h1>
            <p>{text}</p>
        </article>
    )
}