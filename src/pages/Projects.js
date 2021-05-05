import { useEffect } from "react";

function Projects(props) {
    useEffect(() => {
        props.backgroundRef.current.pageLoadAnim();
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ height: "100vh" }}>
            <div style={{ position: "relative", top: "50%", transform: "translateY(-50%)", textAlign: "center" }}>
                <b style={{ fontSize: 30 }}>Projects Page</b>
                <br />
                <br />
                <p style={{ fontSize: 17 }}>Coming Soon</p>
            </div>
        </div>
    );
}

export default Projects;