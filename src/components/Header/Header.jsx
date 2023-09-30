import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <div>
                <h2>User-Firebase</h2>
            </div>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;