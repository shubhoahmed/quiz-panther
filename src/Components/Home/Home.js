import { useLoaderData } from 'react-router-dom'
import Header from '../Header/Header';
import Topic from '../Topic/Topic';


const Home = () => {
    const { data } = useLoaderData();
    return (

        <div>
            <Header></Header>
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