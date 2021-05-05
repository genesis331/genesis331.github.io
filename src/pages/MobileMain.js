import logo from '../assets/LOGO-WHITE-WEB.svg';

function Mobile() {
    return (
        <div style={{ position: "fixed", top: 0, height: "100%", width: "100%", backgroundColor: "#121212", zIndex: "99", textAlign: "center" }}>
            <div style={{ position: "relative", top: "50%", transform: "translateY(-50%)" }}>
                <img src={logo} alt="Zixu's logo" style={{ height: "8rem" }} />
                <h2 style={{ padding: "2rem 0" }}>
                    Smaller screen devices are not supported yet.
                </h2>
            </div>
        </div>
    );
}

export default Mobile;