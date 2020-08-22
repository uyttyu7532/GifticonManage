import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { DialogActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class GifticonDelete extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen=()=> {
        this.setState({
            open: true
        })
    }

    handleClose=()=>{
        this.setState({
            open: false
        }) 
    }

    deleteGifticon(id){
        const url = '/api/gifticons/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        // 새로 바뀐 목록 출력
        this.props.stateRefresh();
    }

    render() {
        return (
            <div>
                <Button variant="contained" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>삭제 경고</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 사진이 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant = "contained" color="primary" onClick={(e)=>{this.deleteGifticon(this.props.id)}}>삭제</Button>
                        <Button variant = "outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
            )
    }
}

export default GifticonDelete;