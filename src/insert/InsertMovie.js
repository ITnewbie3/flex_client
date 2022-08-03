import React, { useState } from 'react';
import Header from '../include/Header';
import './style.css'
import axios from 'axios';
import { BackTop, Form, Divider, Input, InputNumber, Button, Upload } from 'antd';

const InsertMovie = () => {
    const [formData, setFormData] = useState({
        title: "",
        atten: "",
        opening: "",
        rating : "",
        genre : "",
        country : "",
        runtime : "",
        distribution : "",
        desc : "",
        sns : "",
        imgurl : "abc" //초기 상태값 관리
    })

    const onChange=(e)=>{
        console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    //이미지 경로 상태관리하기
    const [imgurl, setImgurl] = useState([]); //배열로 변경해서 관리하기

    //이미지 처리 함수
    const onChangeImg2 = (info)=>{
        //파일 업로드 중일때
        if(info.file.status === 'uploading'){
           console.log(info);
            return;
        }
        //파일 업로드 완료되었을때
        if(info.file.status === 'done'){
            const res2 = info.fileList;
            console.log(res2);
           const imgs = []; //이미지 리스트 배열
           imgs.push(res2.map(data=>`${data.name}`))
           setImgurl(imgs.toString()) //배열을 다시 문자열로 변경
           console.log(imgurl);
        //    console.log(imgs);
            setFormData({
                ...formData,
                imgurl: imgurl
            })
        }
        
    }
    
    function insertMovie(){
        axios.post('http://localhost:3001/addmovie',formData)
        .then(result=>{
            console.log(result);
            alert('영화등록완료되었습니다.')

        })
        .catch(e=>{
            console.log(e);
        })
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        insertMovie();

    }
    return (

        <div id='insertdiv'>
            <Header/>
            <form id='insertform' onSubmit={onSubmit}>
                <table>
                <tr>
                    <th>제목</th>
                    <td><input type='text' onChange={onChange} name='title'/></td>
                </tr>
                <tr>
                    <th>관객수</th>
                    <td><input type='text' onChange={onChange} name='atten'/></td>
                </tr>                <tr>
                    <th>개봉일</th>
                    <td><input type='text' onChange={onChange} name='opening'/></td>
                </tr>                <tr>
                    <th>등급</th>
                    <td><input type='text' onChange={onChange} name='rating'/></td>
                </tr>                <tr>
                    <th>장르</th>
                    <td><input type='text' onChange={onChange} name='genre'/></td>
                </tr>                <tr>
                    <th>국가</th>
                    <td><input type='text' onChange={onChange} name='country'/></td>
                </tr>                <tr>
                    <th>러닝타임</th>
                    <td><input type='text' onChange={onChange} name='runtime'/></td>
                </tr>                <tr>
                    <th>배급</th>
                    <td><input type='text' onChange={onChange} name='distribution'/></td>
                    </tr>   <tr>
                    <th>img</th>
                    <td>
                    <Form.Item
                label={<div className='upload-label'></div>}>  
                    <Upload id='poto' onChange={onChangeImg2} 
                    listType="picture" showUploadList={false} name="image" 
                    action={'http://localhost:3001/upload'} multiple> 
                        <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>
                    </Upload>
                </Form.Item></td>       
                             </tr>   <tr>
                    <th>내용</th>
                    <td><textarea name='desc' onChange={onChange}/></td>
                </tr>      <tr>
                    <td> SNS</td>
                   <td> <input type='text'  onChange={onChange} name='sns' placeholder=',로 구분해 검색어를 입력해주세요'/></td>
                    </tr>
                    <td colSpan={2}><button type='submit'>전송</button><button type='reset'>취소</button></td>
                </table>
            </form>
        </div>
    );
};

export default InsertMovie;