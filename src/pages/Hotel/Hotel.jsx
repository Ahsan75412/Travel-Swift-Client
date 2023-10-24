
import { Helmet } from "react-helmet-async";
import Hotels from "../Home/Hotels/Hotels";
import SemiCover from "../Shared/SemiCover/SemiCover";


const Hotel = () => {
    return (
        <div>
            <Helmet>
                <title>Travel-Swift | Hotels</title>
            </Helmet>
            <SemiCover></SemiCover>
            <Hotels></Hotels>

        </div>
    );
};

export default Hotel;