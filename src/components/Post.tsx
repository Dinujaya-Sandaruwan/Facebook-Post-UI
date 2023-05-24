import { BiComment, BiWorld } from 'react-icons/bi';
import {
    AiFillCaretDown,
    AiFillHeart,
    AiFillLike,
    AiOutlineClose,
    AiOutlineLike,
} from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { TbShare3 } from 'react-icons/tb';
import MyImageGallery from './MyImageGallery';
import RandomUser from './RandomUser';
import { useState } from 'react';

interface Props {
    dp: string;
    time: string;
    uname: string;
    caption: string;
}

const Post = ({ dp, time, uname, caption }: Props) => {
    const formatCaption = (text: string) => {
        return text.replace(
            /#(\w+)/g,
            '<a href="https://www.google.com/search?q=$1" target="_blank" style="color: #2c7feb; font-weight: bold; text-decoration: none;">#$1</a>',
        );
    };

    const formattedCaption = formatCaption(caption);

    const [like, setLike] = useState(false);

    const handleLike = () => {
        like ? setLike(false) : setLike(true);
    };

    return (
        <div className="post">
            <div className="post__head">
                <div className="--profile">
                    <img src={dp} alt="Profile picture" />
                    <div className="userDetails">
                        <h2>{uname}</h2>
                        <span>
                            <p>{time}</p>
                            <BiWorld />
                        </span>
                    </div>
                </div>
                <div className="--close-more">
                    <FiMoreHorizontal />
                    <AiOutlineClose />
                </div>
            </div>
            <div
                className="post__caption"
                dangerouslySetInnerHTML={{ __html: formattedCaption }}
            ></div>
            <div className="post__gallery">
                <MyImageGallery />
            </div>
            <div className="post__details">
                <RandomUser />
            </div>
            <hr />
            <div className="post__buttons">
                <div className="buttons">
                    <span onClick={handleLike} className={like ? 'active' : ''}>
                        <AiOutlineLike />
                        Like
                    </span>
                    <span>
                        <BiComment />
                        Comment
                    </span>
                    <span>
                        <TbShare3 />
                        Share
                    </span>
                </div>
                <div className="me">
                    <img src={dp} alt="" />
                    <AiFillCaretDown />
                </div>
            </div>
        </div>
    );
};

export default Post;
