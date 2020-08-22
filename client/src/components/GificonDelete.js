import React from 'react';

class GifticonDelete extends React.Component {
    
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
            <button onClick={(e)=>{this.deleteGifticon(this.props.id)}}>삭제</button>
        )
    }
}

export default GifticonDelete;