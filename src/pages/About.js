import { forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { TweenMax, Power4 } from "gsap";

const About = forwardRef((props, ref) => {
    const mainContainerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        backToPageAnim() {
            TweenMax.to(mainContainerRef.current, 1.4, {
                top: 0,
                opacity: 1,
                ease: Power4.easeOut
            });
        },
    
        leavePageAnim() {
            TweenMax.to(mainContainerRef.current, 1.4, {
                top: 60,
                opacity: 0,
                ease: Power4.easeOut
            });
        }
    }));

    useEffect(() => {
        props.backgroundRef.current.pageLoadAnim();
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ height: "100vh" }} ref={mainContainerRef}>
            <div style={{ position: "relative", top: "50%", transform: "translateY(-50%)", textAlign: "center" }}>
                <b style={{ fontSize: 30 }}>About Page</b>
                <br />
                <br />
                <p style={{ fontSize: 17 }}>Coming Soon</p>
            </div>
        </div>
    );
});

export default About;