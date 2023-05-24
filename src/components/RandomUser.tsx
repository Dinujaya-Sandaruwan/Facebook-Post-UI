import { useEffect, useState } from 'react';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';

interface RandomData {
    firstName: string;
    lastName: string;
    likes: number;
    comments: number;
    shares: number;
}

const RandomUser = () => {
    const [randomData, setRandomData] = useState<RandomData>({
        firstName: '',
        lastName: '',
        likes: 0,
        comments: 0,
        shares: 0,
    });

    useEffect(() => {
        fetchRandomData();
    }, []);

    const fetchRandomData = async () => {
        try {
            const nameResponse = await fetch('https://randomuser.me/api/');
            const nameData = await nameResponse.json();
            const firstName = nameData.results[0].name.first;
            const lastName = nameData.results[0].name.last;

            const likes = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
            const comments = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
            const shares = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;

            setRandomData({ firstName, lastName, likes, comments, shares });
        } catch (error) {
            console.error('Error fetching random data:', error);
        }
    };

    return (
        <>
            <div className="--likes">
                <span className="icon-blue">
                    <AiFillLike />
                </span>
                <span className="icon-pink">
                    <AiFillHeart />
                </span>

                <p>{`${randomData.firstName} ${randomData.lastName} and ${randomData.likes} others`}</p>
            </div>
            <div className="--comments-shares">
                <p>{`${randomData.comments} comments`}</p>
                <p>{`${randomData.shares} shares`}</p>
            </div>
        </>
    );
};

export default RandomUser;
