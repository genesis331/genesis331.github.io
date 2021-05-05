import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { TweenMax, Power3 } from "gsap";
import styles from '../styles/background.module.css';

const Background = forwardRef((props, ref) => {
    const backgroundBox1 = useRef(null);
    const backgroundBox2 = useRef(null);
    const backgroundBox3 = useRef(null);
    const backgroundBox4 = useRef(null);
    const backgroundBox5 = useRef(null);
    const [boxAlign, setBoxAlign] = useState("left");
    const [boxColor, setBoxColor] = useState("rgb(240,240,240)");
    let boxes = {
        backgroundBox1: backgroundBox1,
        backgroundBox2: backgroundBox2,
        backgroundBox3: backgroundBox3,
        backgroundBox4: backgroundBox4,
        backgroundBox5: backgroundBox5,
    }

    useImperativeHandle(ref, () => ({

        openFlapFromLeft() {
            setBoxAlign("left");
            setBoxColor("rgb(240,240,240)");
            TweenMax.to(boxes.backgroundBox1.current, 0, { width: "0%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox2.current, 0, { width: "0%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox3.current, 0, { width: "0%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox4.current, 0, { width: "0%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox5.current, 0, { width: "0%", ease: Power3.easeInOut });
            setTimeout(() => {
                TweenMax.to(boxes.backgroundBox1.current, 1.0, { width: "100%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox2.current, 1.0, { width: "100%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox3.current, 1.0, { width: "100%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox4.current, 1.0, { width: "100%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox5.current, 1.0, { width: "100%", ease: Power3.easeInOut });
            }, 100);
        },

        closeFlapFromLeft() {
            setBoxAlign("right");
            setBoxColor("rgb(240,240,240)");
            TweenMax.to(boxes.backgroundBox1.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox2.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox3.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox4.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox5.current, 0, { width: "100%", ease: Power3.easeInOut });
            setTimeout(() => {
                TweenMax.to(boxes.backgroundBox1.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox2.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox3.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox4.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox5.current, 1.0, { width: "0%", ease: Power3.easeInOut });
            }, 100);
        },

        closeFlapFromRight() {
            setBoxAlign("left");
            setBoxColor("rgb(240,240,240)");
            TweenMax.to(boxes.backgroundBox1.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox2.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox3.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox4.current, 0, { width: "100%", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox5.current, 0, { width: "100%", ease: Power3.easeInOut });
            setTimeout(() => {
                TweenMax.to(boxes.backgroundBox1.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox2.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox3.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox4.current, 1.0, { width: "0%", ease: Power3.easeInOut });
                TweenMax.to(boxes.backgroundBox5.current, 1.0, { width: "0%", ease: Power3.easeInOut });
            }, 100);
        },

        toInvisible() {
            TweenMax.to(boxes.backgroundBox1.current, 0.7, { opacity: "0", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox2.current, 0.7, { opacity: "0", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox3.current, 0.7, { opacity: "0", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox4.current, 0.7, { opacity: "0", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox5.current, 0.7, { opacity: "0", ease: Power3.easeInOut });
        },

        toVisible() {
            TweenMax.to(boxes.backgroundBox1.current, 0.7, { opacity: "1", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox2.current, 0.7, { opacity: "1", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox3.current, 0.7, { opacity: "1", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox4.current, 0.7, { opacity: "1", ease: Power3.easeInOut });
            TweenMax.to(boxes.backgroundBox5.current, 0.7, { opacity: "1", ease: Power3.easeInOut });
        },

        pageLoadAnim() {
            this.closeFlapFromRight();
        },

        pageLeaveAnim() {
            this.openFlapFromLeft();
        },

        menuStartAnim() {
            this.openFlapFromLeft();
        },

        menuCloseAnim() {
            this.closeFlapFromRight();
        },

    }));

    return (
        <div className={styles.container}>
            <div style={{ textAlign: boxAlign }}>
                <div ref={backgroundBox1} className={styles.backgroundBox} style={{ backgroundColor: boxColor }}></div>
            </div>
            <div style={{ textAlign: boxAlign }}>
                <div ref={backgroundBox2} className={styles.backgroundBox} style={{ backgroundColor: boxColor }}></div>
            </div>
            <div style={{ textAlign: boxAlign }}>
                <div ref={backgroundBox3} className={styles.backgroundBox} style={{ backgroundColor: boxColor }}></div>
            </div>
            <div style={{ textAlign: boxAlign }}>
                <div ref={backgroundBox4} className={styles.backgroundBox} style={{ backgroundColor: boxColor }}></div>
            </div>
            <div style={{ textAlign: boxAlign }}>
                <div ref={backgroundBox5} className={styles.backgroundBox} style={{ backgroundColor: boxColor }}></div>
            </div>
        </div>
    );
});

export default Background;