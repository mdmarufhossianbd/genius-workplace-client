import Marquee from "react-fast-marquee";
import client1 from "../../assets/images/clients/1 (1).png";
import client10 from "../../assets/images/clients/1 (10).png";
import client11 from "../../assets/images/clients/1 (11).png";
import client12 from "../../assets/images/clients/1 (12).png";
import client13 from "../../assets/images/clients/1 (13).png";
import client14 from "../../assets/images/clients/1 (14).png";
import client15 from "../../assets/images/clients/1 (15).png";
import client16 from "../../assets/images/clients/1 (16).png";
import client17 from "../../assets/images/clients/1 (17).png";
import client2 from "../../assets/images/clients/1 (2).png";
import client3 from "../../assets/images/clients/1 (3).png";
import client4 from "../../assets/images/clients/1 (4).png";
import client5 from "../../assets/images/clients/1 (5).png";
import client6 from "../../assets/images/clients/1 (6).png";
import client7 from "../../assets/images/clients/1 (7).png";
import client8 from "../../assets/images/clients/1 (8).png";
import client9 from "../../assets/images/clients/1 (9).png";

const OurClients = () => {
    return (
        <div>
            <h2 className="text-center font-semibold text-5xl">Our Clients</h2>
            <Marquee>
                <img className="w-[200px]" src={client1} alt="" />
                <img className="w-[200px]" src={client2} alt="" />
                <img className="w-[200px]" src={client3} alt="" />
                <img className="w-[200px]" src={client4} alt="" />
                <img className="w-[200px]" src={client5} alt="" />
                <img className="w-[200px]" src={client6} alt="" />
                <img className="w-[200px]" src={client7} alt="" />
                <img className="w-[200px]" src={client8} alt="" />
                <img className="w-[200px]" src={client9} alt="" />
                <img className="w-[200px]" src={client10} alt="" />
                <img className="w-[200px]" src={client11} alt="" />
                <img className="w-[200px]" src={client12} alt="" />
                <img className="w-[200px]" src={client13} alt="" />
                <img className="w-[200px]" src={client14} alt="" />
                <img className="w-[200px]" src={client15} alt="" />
                <img className="w-[200px]" src={client16} alt="" />
                <img className="w-[200px]" src={client17} alt="" />  
            </Marquee>
        </div>
    );
};

export default OurClients;