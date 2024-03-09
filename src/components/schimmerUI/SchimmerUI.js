import ShimmerCards from "./SchimmerCard";

const SchimmerUI = () => {
    const noOfCards = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div>
            <h1 className="text-xl md:text-4xl md:py-2 text-white">
                Loading...
            </h1>
            <div className="flex z-10 w-36 md:w-44 mx-2 my-4 bg-cover hover:w-40 md:hover:w-48 hover:mx-0 hover:my-0 cursor-pointer">
                <div className="flex">
                    {noOfCards.map((card, index) => <ShimmerCards key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default SchimmerUI;
