import styles from "./commentCard.module.css";

const CommentCard =({currData})=>{
    const { comment, img, name, post } = currData;
    return (
        <div className={styles["card-items"]}>
            <div className={styles["comments"]}>{comment}</div>
            <div className={styles["info"]}>
                <img src={img} width="20%" height="30%"/>
                <div className="user-info">
                    <p>{name}</p>
                    <p>{post}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;