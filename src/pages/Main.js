import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import { TweenMax, Power3, Power4 } from "gsap";
import Splitting from "splitting";
import MainProjectsGallery from "../components/MainProjectsGallery";
import styles from '../styles/main.module.css';
import { IoHeart, IoLogoReact, IoMail } from "react-icons/io5";
import emoji from 'react-easy-emoji';

const Main = forwardRef((props, ref) => {
    const mainContainerRef = useRef(null);
    const scrollTrack = useRef(null);
    const scrollSlideX = useRef(null);
    const introP4 = useRef(null);
    const introP5 = useRef(null);
    const introP4titletext = useRef(null);
    const introP4titlebg = useRef(null);
    const introP5details = useRef(null);
    const mainProjectsGalleryRef = useRef(null);
    const [scrollDiv, setScrollDiv] = useState(<div></div>);
    const [boxAlign, setBoxAlign] = useState("left");
    let observer1count = 0;
    let observer2count = 0;

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

    const animationReset = (splitText) => {
        TweenMax.set(scrollTrack.current.children[0].children[0], {
            display: "inline-block",
            x: 100,
            opacity: 0,
            ease: Power3.easeOut
        });
        for (let u = 0; u <= scrollSlideX.current.children.length - 1; u++) {
            TweenMax.set(scrollSlideX.current.children[u].children[0], {
                display: "inline-block",
                x: 200,
                opacity: 0,
                ease: Power3.easeOut
            });
        }
        for (let j = 0; j <= splitText[0].lines.length - 1; j++) {
            for (let i = 0; i <= splitText[0].lines[j].length - 1; i++) {
                TweenMax.set(splitText[0].lines[j][i], {
                    display: "inline-block",
                    y: 100,
                    opacity: 0,
                    ease: Power4.easeOut
                });
            }
        }
        for (let j = 0; j <= splitText[1].lines.length - 1; j++) {
            for (let i = 0; i <= splitText[1].lines[j].length - 1; i++) {
                TweenMax.set(splitText[1].lines[j][i], {
                    display: "inline-block",
                    y: 100,
                    ease: Power4.easeOut
                });
            }
        }
        TweenMax.set(introP4titletext.current, {
            x: 130,
            opacity: 0,
            ease: Power3.easeOut
        });
        for (let i = 0; i <= splitText[2].lines[0].length - 1; i++) {
            TweenMax.set(splitText[2].lines[0][i], {
                display: "inline-block",
                y: 100,
                opacity: 0,
                ease: Power4.easeOut
            });
        }
        for (let i = 0; i <= splitText[2].lines[1].length - 1; i++) {
            TweenMax.set(splitText[2].lines[1][i], {
                display: "inline-block",
                y: 100,
                opacity: 0,
                ease: Power4.easeOut
            });
        }
        TweenMax.set(introP5details.current, {
            display: "inline-block",
            y: 100,
            opacity: 1,
            ease: Power4.easeOut
        });
    }

    const callbackFunction = () => {
        if (observer1count < 1) {
            observer1count++;
        } else if (observer1count === 1) {
            TweenMax.to(introP4titlebg.current, 0.2, {
                width: "100%",
                ease: Power3.easeInOut
            });
            setTimeout(() => {
                setBoxAlign("right");
                TweenMax.to(introP4titlebg.current, 0.5, {
                    width: 0,
                    ease: Power3.easeInOut
                });
                TweenMax.to(introP4titletext.current, 0.8, {
                    x: 0,
                    opacity: 1,
                    ease: Power3.easeOut
                });
                mainProjectsGalleryRef.current.revealGallery();
            }, 180);
            observer1count++;
        }
    }

    const callbackFunction1 = (splitText) => {
        if (observer2count < 1) {
            observer2count++;
        } else if (observer2count === 1) {
            revealIntroP3(splitText);
            observer2count++;
        }
    }

    const revealIntroP1 = () => {
        setTimeout(() => {
            TweenMax.to(scrollTrack.current.children[0].children[0], 1, {
                display: "inline-block",
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
            });
        }, 200);
        for (let u = 0; u <= scrollSlideX.current.children.length - 1; u++) {
            setTimeout(() => {
                TweenMax.to(scrollSlideX.current.children[u].children[0], 1, {
                    display: "inline-block",
                    x: 0,
                    opacity: 1,
                    ease: Power3.easeOut
                });
            }, 200 + (u * 30));
        }
    }

    const revealIntroP2 = (splitText) => {
        for (let j = 0; j <= splitText[0].lines.length - 1; j++) {
            for (let i = 0; i <= splitText[0].lines[j].length - 1; i++) {
                setTimeout(() => {
                    TweenMax.to(splitText[0].lines[j][i], 1.2, {
                        display: "inline-block",
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut
                    });
                }, 400);
            }
        }
        for (let j = 0; j <= splitText[1].lines.length - 1; j++) {
            for (let i = 0; i <= splitText[1].lines[j].length - 1; i++) {
                setTimeout(() => {
                    TweenMax.to(splitText[1].lines[j][i], 1.2, {
                        display: "inline-block",
                        y: 0,
                        ease: Power4.easeOut
                    });
                }, 600);
            }
        }
    }

    const revealIntroP3 = (splitText) => {
        for (let i = 0; i <= splitText[2].lines[0].length - 1; i++) {
            setTimeout(() => {
                TweenMax.to(splitText[2].lines[0][i], 1.2, {
                    display: "inline-block",
                    y: 0,
                    opacity: 1,
                    ease: Power4.easeOut
                });
            }, 400);
        }
        for (let i = 0; i <= splitText[2].lines[1].length - 1; i++) {
            setTimeout(() => {
                TweenMax.to(splitText[2].lines[1][i], 1.2, {
                    display: "inline-block",
                    y: 0,
                    opacity: 1,
                    ease: Power4.easeOut
                });
            }, 600);
        }
        setTimeout(() => {
            TweenMax.to(introP5details.current, 1.2, {
                display: "inline-block",
                y: 0,
                opacity: 1,
                ease: Power4.easeOut
            });
        }, 800);
    }

    let leavePageAnim = () => {
        TweenMax.to(mainContainerRef.current, 1.4, {
            top: 100,
            opacity: 0,
            ease: Power4.easeOut
        });
    }

    useEffect(() => {
        props.backgroundRef.current.pageLoadAnim();

        const splitText = Splitting();
        const observer1 = new IntersectionObserver(callbackFunction, { root: null, rootMargin: "0px", threshold: 0.5 });
        const observer2 = new IntersectionObserver(() => { callbackFunction1(splitText) }, { root: null, rootMargin: "0px", threshold: 0.7 });
        observer1.observe(introP4.current);
        observer2.observe(introP5.current);
        animationReset(splitText);
        setTimeout(() => {
            revealIntroP1();
            revealIntroP2(splitText);
            setScrollDiv(<div className={styles.scrollCheckDiv} style={{ height: scrollTrack.current.offsetHeight }}></div>)
        }, props.animDelayBaseValue);

        const onScroll = () => {
            TweenMax.to(scrollTrack.current, 1.2, {
                y: -window.pageYOffset,
                ease: Power4.easeOut
            });
            TweenMax.to(scrollSlideX.current, 1.0, {
                x: -window.pageYOffset * 1.2,
                ease: Power3.easeOut
            });
        };
        window.addEventListener("scroll", onScroll);

        const resizeListener = () => {
            setScrollDiv(<div className={styles.scrollCheckDiv} style={{ height: scrollTrack.current.offsetHeight }}></div>)
        };
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener('resize', resizeListener);
            observer1.disconnect();
            observer2.disconnect();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className={styles.container} ref={mainContainerRef}>
                <div className={styles.introContainer} ref={scrollTrack}>
                    <p className={styles.introP1}>
                        <span>{emoji('👋')}&nbsp;&nbsp;Hello, I'm</span>
                    </p>
                    <div className={styles.introP2} ref={scrollSlideX}>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>Z</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>I</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>X</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>U</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>&nbsp;</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>C</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>H</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>E</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>A</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>H</span>
                        </div>
                        <div className={styles.introP2div}>
                            <span className={styles.introP2span}>&nbsp;</span>
                        </div>
                    </div>
                    <div className={styles.introP3}>
                        <h4 style={{ fontWeight: "initial", overflow: "hidden" }} data-splitting="lines">
                            A 18 y.o. Student Web Developer.
                        </h4>
                        <h4 style={{ fontWeight: "initial", overflow: "hidden" }} data-splitting="lines">
                            Currently studying Computer Science in Penang, Malaysia.
                        </h4>
                    </div>
                    <div ref={introP4} className={styles.introP4}>
                        <div className={styles.introP4title}>
                            <p className={styles.introP4titlea}>My</p>
                            <h1 className={styles.introP4titleb}>
                                <div style={{ position: "relative", display: "inline-block" }}>
                                    <span className={styles.introP4titlebspan}>
                                        <span style={{ overflow: "hidden", display: "inline-block", verticalAlign: "bottom" }}><span ref={introP4titletext} style={{ display: "inline-block" }}>Projects</span></span>
                                        <span className={styles.introP4titlebspanbg} style={{ textAlign: boxAlign }}>
                                            <span ref={introP4titlebg} style={{ display: "inline-block", height: "100%", width: "0%", backgroundColor: "rgb(240, 240, 240)" }}></span>
                                        </span>
                                    </span>
                                </div>
                            </h1>
                        </div>
                        <div className={styles.introP4gallery}>
                            <MainProjectsGallery backgroundRef={props.backgroundRef} ref={mainProjectsGalleryRef} leavePageAnim={leavePageAnim} />
                        </div>
                    </div>
                    <div ref={introP5} className={styles.introP5}>
                        <h3 className={styles.introP5content} style={{ fontWeight: "initial", overflow: "hidden" }} data-splitting="lines">
                            Let's make something really awesome together. <br />
                            Get in touch by dropping me a line.
                        </h3>
                        <div style={{ overflow: "hidden" }}>
                            <p className={styles.introP5details} ref={introP5details}>
                                <IoMail style={{ verticalAlign: "middle", paddingRight: "8px" }} /><span style={{ verticalAlign: "middle" }}>zixucheah331@outlook.com</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.introP6}>
                        <p className={styles.introP6content}>
                            <span style={{ verticalAlign: "middle" }}>Made with </span>
                            <IoHeart style={{ verticalAlign: "middle" }} />
                            <span style={{ verticalAlign: "middle" }}> by Zixu Cheah with </span>
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" style={{ color: "white" }}>
                                <span style={{ verticalAlign: "middle" }}>React</span>
                                <IoLogoReact style={{ verticalAlign: "middle", padding: "0 2px" }} />
                            </a>
                            <span style={{ verticalAlign: "middle" }}> & <a href="https://greensock.com/gsap/" target="_blank" rel="noreferrer" style={{ color: "white" }}>GSAP</a>.</span>
                        </p>
                    </div>
                </div>
            </div>
            {scrollDiv}
        </>
    );
});

export default Main;