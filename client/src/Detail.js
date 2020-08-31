import React from "react";

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { barcode_img: "barcode_img" };
    }

    render() {
        var result = this.props.location.search.split('/')
        console.log(result[2]);
        return (
            <div id="container">
                <img src={`http://ec2-15-164-50-1.ap-northeast-2.compute.amazonaws.com/barcode_img/${result[2]}`} alt="barcode_img" style={{ width: "100%", height: "auto"}}></img>
            </div>
        );
    }
}
export default Detail;