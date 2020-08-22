import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import GifticonDelete from "./GificonDelete";

class Gifticon extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.barcode_img} alt="barcode_img" style={{width:64 ,height: 64}}></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.exp_date}</TableCell>
                <TableCell>{this.props.used}</TableCell>
                <TableCell><GifticonDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
            </TableRow>
        
        )
    }
}


export default Gifticon;