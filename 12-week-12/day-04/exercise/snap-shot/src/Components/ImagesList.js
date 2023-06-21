import {useState, useEffect} from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

// const URL = 'https://api.pexels.com/v1/search'

const ImagesList = (props) => {
	const {imgList, setImgList} = useContext(AppContext);

	return (
		<>
			<div className='row'>
				<div className='d-flex flex-wrap'>
					{imgList.map ((value, key) => <Image url={value.src.medium} i = {key} />)}
				</div>
			</div>
		</>
	)
}


const Image = (props) => {

	return(
		<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3  p-1'>
			<img style={{width:'95%'}} className={'img-thumbnail gallery'} src={props.url} alt="{No image}" />
		</div>
	)
}

export default ImagesList