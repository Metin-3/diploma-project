import React from 'react';
import WineryEvent from '../components/HomeWinery/WineryEvent';
import WineryGoToTop from '../components/HomeWinery/WineryGoToTop';
import WineryHave from '../components/HomeWinery/WineryHave';
import WineryHeader from '../components/HomeWinery/WineryHeader';
import WineryNew from '../components/HomeWinery/WineryNew';
import WineryStory from '../components/HomeWinery/WineryStory';
import WineryTable from '../components/HomeWinery/WineryTable';

const HomeWinery = () => {
    return (
        <>
            <WineryHeader />
            <WineryStory />
            <WineryEvent />
            <WineryHave />
            <WineryTable />
            <WineryNew />
            <WineryGoToTop />
        </>
    )
}

export default HomeWinery