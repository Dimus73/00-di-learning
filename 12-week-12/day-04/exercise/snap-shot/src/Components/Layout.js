import {Link, Outlet} from 'react-router-dom'
import Search from './Searche'
import ImagesList from './ImagesList'

import {AppContext} from '../App'

import { createContext, useState, useEffect } from "react"


const Layout = () => {
	const [imgList, setImgList] = useState([]);
	return(
		<>
			<div className='container'>
			<div className={'row'}>
				<div className={'col-12'}>
					<AppContext.Provider value={{imgList, setImgList}}>
						<Search />
					<Outlet />
						<ImagesList />
					</AppContext.Provider>
				</div>
			</div>
		</div>

	</>
	)
}

export default Layout