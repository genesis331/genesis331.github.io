import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { TweenMax, Power4 } from "gsap";
import { IoLogoBehance, IoLogoFacebook, IoLogoGithub, IoLogoGitlab, IoLogoLinkedin } from "react-icons/io5";
import styles from '../styles/menu.module.css';

const Menu = forwardRef((props, ref) => {
    const menuSectionA = useRef(null);
    const menuSectionB = useRef(null);
    const sectionBAContent = useRef(null);
    const sectionBBContent = useRef(null);

    useImperativeHandle(ref, () => ({

        leavingPageAnim() {
            TweenMax.to(menuSectionA.current, 0.8, {
                opacity: 0,
                ease: Power4.easeOut
            });
            TweenMax.to(menuSectionB.current, 0.8, {
                opacity: 0,
                ease: Power4.easeOut
            });
        }

    }));

    useEffect(() => {
        TweenMax.set(sectionBAContent.current.children[0], {
            y: 100,
            opacity: 0
        });
        for (let i = 0; i <= menuSectionA.current.children[0].children.length - 1; i++) {
            TweenMax.set(menuSectionA.current.children[0].children[i].children[0], {
                x: 20,
                opacity: 0
            });
        }
        for (let j = 0; j <= sectionBBContent.current.children.length - 1; j++) {
            TweenMax.set(sectionBBContent.current.children[j].children[0], {
                y: 20,
                opacity: 0
            });
        }
        setTimeout(() => {
            for (let i = 0; i <= menuSectionA.current.children[0].children.length - 1; i++) {
                setTimeout(() => {
                    TweenMax.to(menuSectionA.current.children[0].children[i].children[0], 0.6, {
                        x: 0,
                        opacity: 1,
                        ease: Power4.easeOut
                    });
                }, (i * 100));
            }
            for (let j = 0; j <= sectionBBContent.current.children.length - 1; j++) {
                setTimeout(() => {
                    TweenMax.to(sectionBBContent.current.children[j].children[0], 0.6, {
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut
                    });
                }, (j * 100));
            }
            TweenMax.to(sectionBAContent.current.children[0], 0.8, {
                y: 0,
                opacity: 1,
                ease: Power4.easeOut
            });
        }, 200);
    });

    let switchToPage = (target) => {
        props.toggleMenu();
        setTimeout(() => {
            window.location.href = target;
        }, 300);
    }

    return (
        <div className={styles.container}>
            <div ref={menuSectionA} className={styles.menuSection}>
                <div className={styles.sectionA}>
                    <div className={styles.sectionAOps}>
                        <span>
                            <button onClick={() => { switchToPage("/") }}>Home.</button>
                        </span>
                    </div>
                    <div className={styles.sectionAOps}>
                        <span>
                            <button onClick={() => { switchToPage("#/about") }}>About.</button>
                        </span>
                    </div>
                    <div className={styles.sectionAOps}>
                        <span>
                            <button onClick={() => { switchToPage("#/projects") }}>Projects.</button>
                        </span>
                    </div>
                    <div className={styles.sectionAOps}>
                        <span>
                            <button onClick={() => { switchToPage("#/blog") }}>Blog.</button>
                        </span>
                    </div>
                </div>
            </div>
            <div ref={menuSectionB} className={styles.menuSection}>
                <div className={styles.sectionB}>
                    <div className={styles.sectionBA}>
                        <div className={styles.sectionBATitle}>Business Inquiries</div>
                        <div ref={sectionBAContent} className={styles.sectionBAContent}>
                            <span style={{ display: "inline-block" }}>zixucheah331@outlook.com</span>
                        </div>
                    </div>
                    <div className={styles.sectionBB}>
                        <div className={styles.sectionBATitle}>Connect</div>
                        <div ref={sectionBBContent} className={styles.sectionBBContent}>
                            <div>
                                <a href="https://www.behance.net/zixucheah331" target="_blank" rel="noreferrer">
                                    <IoLogoBehance />
                                </a>
                            </div>
                            <div>
                                <a href="http://fb.com/zixucheah331" target="_blank" rel="noreferrer">
                                    <IoLogoFacebook />
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/genesis331" target="_blank" rel="noreferrer">
                                    <IoLogoGithub />
                                </a>
                            </div>
                            <div>
                                <a href="https://gitlab.com/genesis331" target="_blank" rel="noreferrer">
                                    <IoLogoGitlab />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/cheah-zixu-b7b190182/" target="_blank" rel="noreferrer">
                                    <IoLogoLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Menu;