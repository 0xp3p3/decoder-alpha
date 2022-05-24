import { IonLabel } from '@ionic/react';
import { Grid, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';



function MarketPlacePage() {
    const [showlive, setShowlive] = useState(true);
    return (
        <div className="market-wrapper px-4">
            <div className="flex justify-between mt-6">
                <IonLabel className="md:text-4xl text-2xl font-bold">$DECODE Marketplace</IonLabel>
                <button
                    className="w-max text-base items-center md:px-10 px-5 md:py-2 py-1 tracking-wide shadow-lg text-white capitalize hover:opacity-75 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out bg-grad-green-blue rounded-xl"
                >
                    FB4X....TAg8
                </button>
            </div>
            <div className="flex justify-start mt-6 flex-row ">


                <button className="mr-2 mt-2 sm:mt-5 text-base px-5 py-2 font-normal tracking-wide shadow-lg text-white capitalize focus:outline-none transition duration-300 transform active:scale-95 ease-in-out  flex justify-center items-center action-button rounded-xl"

                    onClick={() => setShowlive(true)}>
                    Live Auctions
                    <div className="">
                        2
                    </div>
                </button>


                <button className="ml-2 mt-2 sm:mt-5 text-base px-5 py-2 font-normal tracking-wide shadow-lg text-white capitalize focus:outline-none transition duration-300 transform active:scale-95 ease-in-out  flex justify-center items-center action-button rounded-xl"
                    onClick={() => setShowlive(false)}>
                    Ended
                    <div className="">
                        3
                    </div>
                </button>
            </div>
            <div className="flex justify-center m-10">
                <div className="justify-center w-full flex flex-col">
                    <div className="flex  sm:flex-row justify-center flex-wrap">
                        <Grid
                            container
                            spacing={4}
                            className="flex justify-self-center"
                        >
                            {showlive ? <> <Card />
                                <Card /></> : <><Card1 /><Card1 /><Card1 /></>}
                            {/* <Card />
                            <Card /> */}
                            {/*<Card1 />*/}
                            {/*<Card1 />*/}
                            {/*<Card />*/}
                            {/*<Card />*/}
                            {/*<Card1 />*/}
                            {/*<Card1 />*/}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketPlacePage;

const Card = () => {
    const history = useHistory();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="mx-auto rounded-lg bg-sections-bslgray text-center mb-10">
                <div className="c-card-body px-2">
                    {/* text content */}
                    <h2 className='mt-2'>Stoned Ape Crew - Whitelist</h2>
                    <p className="pt-2 text-slate-400 text-xs">
                        Second generation SACs!
                    </p>
                    {/* <div className="seperator my-4"></div> */}
                    {/* image */}
                    <div className="flex mx-auto">
                        <div className="image-box rounded-lg relative">
                            <img
                                onClick={() => {
                                    history.push('/marketplace-details');
                                }}
                                src="./assets/market-place/image1.webp"
                                className="bg-img"
                            />
                            <div className="absolute top-0 right-0 flex">
                                <div className="w-7 h-7 flex items-center justify-center mr-2 bg-slate-50/25 rounded-full">
                                    <img
                                        onClick={() => window.open('https://twitter.com/SOL_Decoder', "_blank")}
                                        src="./assets/icons/twitter.png"
                                        className="w-5 cursor-pointer"
                                        alt=""
                                    />
                                </div>

                                <div className="w-7 h-7 flex items-center justify-center bg-slate-50/25 rounded-full">
                                    <img
                                        onClick={() => window.open('https://discord.com', "_blank")}
                                        src="./assets/icons/discord.png"
                                        className="w-5 cursor-pointer"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-1 px-2 text-xs absolute bottom-0 bg-slate-800/50 w-full">
                                <div className="flex items-center">
                                    <div className="c-badge mr-2 bg-lime-400"></div>
                                    Live
                                </div>
                                <div>Ends in 2h</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="seperator my-4"></div> */}

                    <div className="c-table">
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Ticket price</div>
                            <div>8.50</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">
                                $DECODE Spent
                            </div>
                            <div>750</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Winners</div>
                            <div>50</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Tickets Sold</div>
                            <div>94</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Your Tickets</div>
                            <div>3</div>
                        </div>
                    </div>



                    <div className='flex my-5'>
                        <div className="bg-black/50 text-sm p-2 px-4 mr-3 rounded-md border-2 border-indigo-500/50">
                            1
                        </div>
                        <div className="bg-black/50 text-sm p-2 px-4 rounded-md border-2 w-full border-indigo-500/50">
                            Buy 1 tickets
                        </div>
                    </div>


                </div>
            </div>
        </Grid>
    );
};
const Card1 = () => {
    const history = useHistory();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="mx-auto rounded-lg bg-sections-bslgray text-center mb-10">
                <div className="c-card-body px-2">
                    {/* text content */}
                    <h2 className='mt-2'>Stoned Ape Crew</h2>
                    <p className="pt-2 text-slate-400 text-xs">
                        Lorem ipsum, dolor sit amet consectetur
                    </p>
                    {/* <div className="seperator my-4"></div> */}
                    {/* image */}
                    <div className="flex mx-auto my-9">
                        <div className="image-box rounded-lg relative">
                            <img onClick={() => {
                                history.push('/marketplace-details');
                            }}
                                src="./assets/market-place/image1.webp"
                                className="bg-img"
                            />
                            <div className="absolute top-0 right-0 flex">
                                <div className="w-7 h-7 flex items-center justify-center mr-2 bg-slate-50/25 rounded-full">
                                    <img
                                        onClick={() => window.open('https://twitter.com/SOL_Decoder', "_blank")}
                                        src="./assets/icons/twitter.png"
                                        className="w-5 cursor-pointer"
                                        alt=""
                                    />
                                </div>

                                <div className="w-7 h-7 flex items-center justify-center bg-slate-50/25 rounded-full">
                                    <img
                                        onClick={() => window.open('https://discord.com', "_blank")}
                                        src="./assets/icons/discord.png"
                                        className="w-5 cursor-pointer"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-1 px-2 text-xs absolute bottom-0 bg-slate-800/50 w-full">
                                <div className="flex items-center">
                                    <div className="c-badge mr-2 bg-red-400"></div>
                                    Closed
                                </div>
                                <div>Ended at 2022-05-20</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="seperator my-4"></div> */}

                    <div className="c-table">
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Ticket price</div>
                            <div>$4.75</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">
                                WinnersTicket price
                            </div>
                            <div>16</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Price</div>
                            <div>0</div>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="text-gray-400">Your Tickets</div>
                            <div>3</div>
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            history.push('/marketplace-details');
                        }}
                        className="my-5 p-2 px-5 winner-btn w-fit rounded-md mx-auto"
                    >
                        View Winners
                    </div>



                </div>
            </div>
        </Grid>
    );
};
