const CommentCard =({currData})=>{
    const { comment, img, name, post } = currData;
    return (
        <div>
            <div className="comments">{comment}</div>
            <div className="info">
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