import React from 'react';
import { post } from 'axios'; // post방식으로 서버에 보내기 위해

class GifticonAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            barcode_img: null,
            name: '',
            exp_date: '',
            used: '',
            fileName: ''
        }
    }

    // 추가 버튼을 누르면 실행
    // 내부적으로 이벤트 함수를 전달받는다.
    handleFormSubmit = (e) => {
        e.preventDefault() // 오류가 발생하지 않도록
        this.addGifticon()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            barcode_img: null,
            name: '',
            exp_date: '',
            used: '',
            fileName: ''
        })
        window.location.reload();
    }

    // 파일 값이 변경됐을 때
    handleFileChange = (e) => {
        this.setState({
            barcode_img: e.target.files[0],
            fileName: e.target.value
        })
    }

    // 텍스트 값이 변경됐을 때
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addGifticon = () => {
        const url = '/api/gifticons';
        // 특정한 데이터를 서버로 보내기 위해
        const formData = new FormData();
        formData.append('barcode_img',this.state.barcode_img);
        formData.append('name',this.state.name);
        formData.append('exp_date',this.state.exp_date);
        formData.append('used',this.state.used);
        // 파일이 포함된 데이터를 서버로 전송 => header추가 
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render(){
        return (
            // 추가 버튼을 누르면 handleFormSubmit() 실행
            <form onSubmit={this.handleFormSubmit}>
                <h1>기프티콘 추가</h1>
                기프티콘 이미지: <input type="file" name="barcode_img" file={this.state.barcode_img} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름: <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
                유효기한: <input type="text" name="exp_date" value={this.state.exp_date} onChange={this.handleValueChange}/><br/>
                사용여부: <input type="text" name="used" value={this.state.used} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default GifticonAdd;