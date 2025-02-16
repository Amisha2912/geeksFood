import styles from "./about.module.css";
const About =()=>{
    return(
        <section className={styles["about"]}>
            <div className={styles.image}>
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
            </div>
            <div className={styles["overview"]}>
                <div className={styles["content"]}>
                <p className={styles["about-topic"]}><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</strong></p>
                <p className={styles["about-part"]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>

                <button>Get In Touch</button>
                </div>
                
            </div>
        </section>
    )
}

export default About;