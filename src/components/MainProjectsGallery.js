import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { TweenMax, Power4 } from "gsap";
import styles from '../styles/mainprojectsgallery.module.css';
import { IoArrowForward } from "react-icons/io5";
import pic1 from "../assets/projectpic/ISO1.png";
import pic2 from "../assets/projectpic/ISO3.png";

const MainProjectsGallery = forwardRef((props, ref) => {
    const [blankDivWidth, setBlankDivWidth] = useState(0);
    const scrollWrapper = useRef(null);
    const endBox1 = useRef(null);
    const itemBox1 = useRef(null);
    const itemBox1ImgRef = useRef(null);
    const itemBox1ImgWrapperScaleRef = useRef(null);
    const [itemBox1ImgWidth, setItemBox1ImgWidth] = useState(0);
    const itemBox2 = useRef(null);
    const itemBox2ImgRef = useRef(null);
    const itemBox2ImgWrapperScaleRef = useRef(null);
    const [itemBox2ImgWidth, setItemBox2ImgWidth] = useState(0);
    const itemBox3 = useRef(null);
    const itemWrapperCover1 = useRef(null);
    const itemWrapperCover2 = useRef(null);

    useImperativeHandle(ref, () => ({

        revealGallery() {
            TweenMax.to(itemWrapperCover1.current, 1.0, {
                width: 0,
                ease: Power4.easeInOut
            });
            TweenMax.to(itemWrapperCover2.current, 1.0, {
                width: 0,
                ease: Power4.easeInOut
            });
            TweenMax.to(itemBox1ImgWrapperScaleRef.current, 1.3, {
                delay: 0.5,
                backgroundSize: "105%",
                ease: Power4.easeOut
            });
            TweenMax.to(itemBox2ImgWrapperScaleRef.current, 1.3, {
                delay: 0.5,
                backgroundSize: "105%",
                ease: Power4.easeOut
            });
        }

    }));

    useEffect(() => {
        setBlankDivWidth(window.innerWidth * 0.2);
        const resizeListener = () => {
            setBlankDivWidth(window.innerWidth * 0.2);
        };
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    function scrollX() {
        let xToScroll = scrollWrapper.current.container.current.scrollLeft * 0.5;
        TweenMax.to(endBox1.current, 1.0, {
            x: -(xToScroll),
            ease: Power4.easeOut
        });
        TweenMax.to(itemBox1.current, 1.0, {
            x: -(xToScroll),
            ease: Power4.easeOut
        });
        TweenMax.to(itemBox2.current, 1.0, {
            x: -(xToScroll),
            ease: Power4.easeOut
        });
        TweenMax.to(itemBox3.current, 1.0, {
            x: -(xToScroll),
            ease: Power4.easeOut
        });
    }

    function hoverExpandImage(ref) {
        switch (ref) {
            case 0:
                TweenMax.to(itemBox1ImgWrapperScaleRef.current, 1.0, {
                    backgroundSize: "110%",
                    ease: Power4.easeOut
                });
                break;

            case 1:
                TweenMax.to(itemBox2ImgWrapperScaleRef.current, 1.0, {
                    backgroundSize: "110%",
                    ease: Power4.easeOut
                });
                break;

            default:
                break;
        }
    }

    function hoverMakeDefaultImage(ref) {
        switch (ref) {
            case 0:
                TweenMax.to(itemBox1ImgWrapperScaleRef.current, 1.0, {
                    backgroundSize: "105%",
                    ease: Power4.easeOut
                });
                break;

            case 1:
                TweenMax.to(itemBox2ImgWrapperScaleRef.current, 1.0, {
                    backgroundSize: "105%",
                    ease: Power4.easeOut
                });
                break;

            default:
                break;
        }
    }

    function leavePage() {
        props.leavePageAnim();
        props.backgroundRef.current.pageLeaveAnim();
        setTimeout(() => {
            window.location.href = '#/projects';
        }, 1200);
    }

    return (
        <div className={styles.gallery}>
            <ScrollContainer className={styles.scrollWrapper} ref={scrollWrapper} onScroll={() => { scrollX() }}>
                <div ref={endBox1} className={styles.endBox} style={{ width: blankDivWidth }}></div>
                <div className={styles.itembox} ref={itemBox1}>
                    <button onClick={leavePage} className={styles.itemBtn}>
                        <div className={styles.itemWrapper} ref={itemBox1ImgWrapperScaleRef} onMouseEnter={() => { hoverExpandImage(0) }} onMouseLeave={() => { hoverMakeDefaultImage(0) }} style={{ height: "30rem", width: itemBox1ImgWidth, backgroundImage: `url(${(pic1)})`, backgroundSize: "100%" }}>
                            <div ref={itemWrapperCover1} style={{ backgroundColor: "#121212", height: "100%", width: "100%", display: "inline-block" }}></div>
                        </div>
                        <img src={pic1} alt="Pic1" ref={itemBox1ImgRef} onLoad={(data) => { setItemBox1ImgWidth(data.target.clientWidth) }} />
                    </button>
                </div>
                <div className={styles.itembox} ref={itemBox2}>
                    <button onClick={leavePage} className={styles.itemBtn}>
                        <div className={styles.itemWrapper} ref={itemBox2ImgWrapperScaleRef} onMouseEnter={() => { hoverExpandImage(1) }} onMouseLeave={() => { hoverMakeDefaultImage(1) }} style={{ height: "30rem", width: itemBox2ImgWidth, backgroundImage: `url(${(pic2)})`, backgroundSize: "100%" }}>
                            <div ref={itemWrapperCover2} style={{ backgroundColor: "#121212", height: "100%", width: "100%", display: "inline-block" }}></div>
                        </div>
                        <img src={pic2} alt="Pic2" ref={itemBox2ImgRef} onLoad={(data) => { setItemBox2ImgWidth(data.target.clientWidth) }} />
                    </button>
                </div>
                <div className={styles.seeMorebox} ref={itemBox3}>
                    <span>
                        <button onClick={leavePage} className={styles.seeMoreBtn}>
                            <span>SEE MORE</span>
                            <IoArrowForward style={{ verticalAlign: "middle", paddingLeft: "8px" }} />
                        </button>
                    </span>
                </div>
            </ScrollContainer>
        </div>
    );
});

export default MainProjectsGallery;