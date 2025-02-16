import styles from "./hero.module.css";

const Hero = ()=>{
    return (
        <section className={styles["hero-section"]}>
          <div className={styles["info"]}>
            <h1>Let us find your</h1>
            <h1 className={styles["secondHeading"]}>Forever Food.</h1>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div className={styles.heroBtn}>
                <button>Search Now</button>
                <button>Know More</button>
            </div>
          </div>
        </section>
    )
}

export default Hero;