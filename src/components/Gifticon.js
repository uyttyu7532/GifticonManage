import React from "react";

class Gifticon extends React.Component{
    render(){
        return(
            <div>
                <GifticonProfile id={this.props.id} gifticonimg={this.props.img} name={this.props.name}/>
                <GifticonInfo exp_date={this.props.exp_date} used={this.props.used}/>
            </div>
        )
    }
}

class GifticonProfile extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.id}</h2>
                <h2>{this.props.name}</h2>
                <img src={this.props.gifticonimg} alt="gifticonimg"/>
            </div>
        )
    }
}

class GifticonInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.exp_date}</p>
                <p>{this.props.used}</p>
            </div>
        )
    }
}

export default Gifticon;