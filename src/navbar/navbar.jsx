import styles from "./navbar.module.css";
const Navbar =() =>{
    return(
        <nav>
         <div className={styles.logo}>
            <img src="https://flowbite.com/docs/images/logo.svg"/>
            <span className={styles.logoName}>GeeksFood</span>
         </div>
         <div className="navList">
            <ul className={styles.ulClass}>
                <li>Home</li>
                <li>Quote</li>
                <li>Restaurants</li>
                <li>Foods</li>
                <li>Contacts</li>
            </ul>
         </div>
         <div className={styles.buttons}>
            <button>Get Started</button>
         </div>
        </nav>
    )
}

export default Navbar;