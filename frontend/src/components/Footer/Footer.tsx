import "./Footer.css";

export function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <h3>Copyright &copy; {date} - <span>Yannick Rambo</span></h3>
            <h3>All rights reserved.</h3>
        </footer>
    )
}