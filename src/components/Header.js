import { forwardRef, useImperativeHandle, useState } from "react";
import styles from '../styles/header.module.css';
import { IoMenu, IoClose } from "react-icons/io5";

const Header = forwardRef((props, ref) => {
    const [headerStatus, setHeaderStatus] = useState(false);
    const [headerColor, setHeaderColor] = useState("rgb(240, 240, 240)");
    const [headerToggleIcon, setHeaderToggleIcon] = useState(<IoMenu style={{ verticalAlign: "middle", padding: "0 2px" }} />);

    useImperativeHandle(ref, () => ({

        toggleHeader() {
            if (!headerStatus) {
                setHeaderStatus(true);
                setHeaderColor("#121212");
                setHeaderToggleIcon(<IoClose style={{ verticalAlign: "middle", padding: "0 2px" }} />)
            } else {
                setHeaderStatus(false);
                setHeaderColor("rgb(240, 240, 240)");
                setHeaderToggleIcon(<IoMenu style={{ verticalAlign: "middle", padding: "0 2px" }} />)
            }
        }

    }));

    return (
        <div className={styles.container}>
            <div className={styles.containerFlex}>
                <div className={styles.flexGrid}>
                    <svg x="0" y="0" version="1.1" viewBox="0 0 800 800" className={styles.headerLogo} onClick={props.backToMain}>
                        <polygon points="174.96 717.48 11.84 717.48 406.06 84 569.19 84" className="st0" fill={headerColor} />
                        <polygon points="392.47 717.48 229.34 717.48 623.56 84 786.69 84" className="st0" fill={headerColor} />
                        <path d="M204.87,320.53H41.74l60.79-97.93C156.02,136.42,250.25,84,351.68,84h0L204.87,320.53z" className="st0" fill={headerColor} />
                        <path d="M444.12,717.48L444.12,717.48l146.81-236.53h163.13l-60.79,97.93C639.78,665.06,545.55,717.48,444.12,717.48z" className="st0" fill={headerColor} />
                    </svg>
                </div>
                <div className={styles.flexGrid}></div>
                <div className={styles.flexGridMenu}>
                    <button className={styles.menuBtn} style={{ color: headerColor }} onClick={props.toggleMenu}>
                        <span style={{ verticalAlign: "middle" }}>Menu </span>
                        {headerToggleIcon}
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Header;