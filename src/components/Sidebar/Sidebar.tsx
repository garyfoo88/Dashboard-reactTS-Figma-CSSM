import styles from "./Sidebar.module.scss";
import samanthaImg from "../../assets/png/samantha.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="samantha" />
              <p className={styles.notification}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>Samantha@gmail.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              <li className={styles.sidebarNavItem}>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
