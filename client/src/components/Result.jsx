import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Result = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation(); // images, news, videos

    useEffect(()=>{                 // run at the start of the page
        getResults('/search/q=java &num=40')
    },[]);

    if(isLoading) return <Loading />;

    switch(location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {/*results?.results?.map(({link, title})=>(

                    ))*/}
                </div>
            );
        case '/images':
            return 'SEARCH';
        case '/news':
            return 'SEARCH';
        case '/videos':
            return 'SEARCH';
        default:
            return 'ERROR';
    }
}