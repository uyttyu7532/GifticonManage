import React from "react";
import Nav from './Nav';


class Detail extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { barcode_img: "barcode_img" };
    }

    render() {
        var result = this.props.location.search.split('/')
        console.log(this.props);
        return (
            <div>
                <Nav />
                <div id="container">
                    <img src={`http://ec2-15-164-50-1.ap-northeast-2.compute.amazonaws.com/barcode_img/${result[2]}`} alt="barcode_img" style={{ width: "100%", height: "auto" }}></img>
                </div>
            </div>
        );
    }
}
export default Detail;