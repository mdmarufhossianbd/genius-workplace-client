import PageTitle from "../../Components/PageTitle/PageTitle";
import Banner from "./Banner";
import HowItWork from "./HowItWork";
import JobCategory from "./JobCategory";
import JobRecommended from "./JobRecommended";
import OurClients from "./OurClients";


const Home = () => {
    return (
        <div>
            <PageTitle title="Home || Genius WorkPlace"></PageTitle>
            <Banner></Banner>
            <JobRecommended></JobRecommended>
            <JobCategory></JobCategory>
            <HowItWork></HowItWork>
            <OurClients></OurClients>
        </div>
    );
};


export default Home;