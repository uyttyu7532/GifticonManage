import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Gifticon extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.barcode_img} alt="barcode_img"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.exp_date}</TableCell>
                <TableCell>{this.props.used}</TableCell>
            </TableRow>
        
        )
    }
}


export default Gifticon;