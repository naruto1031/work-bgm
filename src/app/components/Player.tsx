"use client"
import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { css } from '../../../styled-system/css';
import { hstack } from '../../../styled-system/patterns';

type Data = {
	title: string,
	url: string[]
}

type PlayerProps = {
	url: string;
	data: Data[]
}

export const Player: FC<PlayerProps> = ({ url, data }) => {
	const [hasWindow, setHasWindow] = useState(false)
	const [currentTitle, setCurrentTitle] = useState("")
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);
	const handleClick = (title: string) => {
    setCurrentTitle(title)
  }
	return (
		<>
			<div className={hstack({justifyContent: "center", mt: "20px", fontWeight: "bold"})}>
				{data.map((item, i) => (
					<div key={i} onClick={()=>handleClick(item.title)} className={css({padding: "10px", borderRadius: "15px",backgroundColor: "#E8EAED", shadow: "md", cursor: "pointer", _hover: {opacity: "0.7"}})}>{item.title}</div>
				))}
			</div>
			{data.map((item, i)=>(
			 <div key={i} className={css({width: "90vw", margin: "0 auto"})}>
					{item.title === currentTitle && 
						item.url.map((url, j)=>(
							<div key={j} className={css({margin: "20px", borderRadius: "10px"})}>
								{hasWindow && <ReactPlayer url={url} width={"100%"} style={{borderRadius: "20px", overflow: "hidden"}}/>}
							</div>
						))
					}
				</div>	
			))}
		</>

	)
}