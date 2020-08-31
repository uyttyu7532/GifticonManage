import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import GifticonDelete from "./GificonDelete";
import { Link, HashRouter } from "react-router-dom";

function Gifticon({ id, barcode_img, name, exp_date, used, stateRefresh }) {
    return (
        <TableRow>
            <TableCell>
                <HashRouter>
                    <Link
                        to={{
                            pathname:  `/barcode/${id}`,
                            state: {
                                barcode_img: `${barcode_img}`
                            },
                            search:`${barcode_img}`
                        }}>
                        <img src={`http://ec2-15-164-50-1.ap-northeast-2.compute.amazonaws.com${barcode_img}`} alt="barcode_img" style={{ width: 100, height: 100 }}></img>
                    </Link>
                </HashRouter>
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{exp_date}</TableCell>
            <TableCell>{used}</TableCell>
            <TableCell><GifticonDelete stateRefresh={stateRefresh} id={id} /></TableCell>
        </TableRow>
    )
}


export default Gifticon;