import { useLoaderData } from 'react-router-dom'
import Topic from '../Topic/Topic';

const Home = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 p-5'>
                {
                    data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}

                    ></Topic>)
                }

            </div>
        </div>
    );
};

export default Home;