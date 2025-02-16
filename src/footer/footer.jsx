
import styles from "./footer.module.css";
const Footer=()=>{
    return (
        <section className={styles["footer-section"]}>
            <div className={styles["img-footer"]}>
                <img src="/images/footer-img.jpg" width="50"/>
                <span>logoipsum</span>
            </div>
            <p className={styles["para-footer"]}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul className={styles["list-footer"]}>
                <li>About</li>
                <li>Career</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Vlogs</li>
            </ul>
            <ul className={styles["icon-list"]}>
                <li><i class='fab fa-facebook'></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li> <i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-github"></i></li>
                <li><i class="fa-brands fa-dribbble"></i></li>
            </ul>
        </section>
    )
}

export default Footer;