import { Container } from "../Container/Container";
import { NavbarMenu } from "../NavbarMenu/NavbarMenu";
import "./Navbar.css";

export function Navbar() {
    return (
        <header className="navbar">
            <Container>
                <h1>E-Commerce</h1>
                <NavbarMenu />
            </Container>
        </header>
    )
}