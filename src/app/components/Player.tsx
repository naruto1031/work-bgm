"use client"
import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { css } from '../../../styled-system/css';

type PlayerProps = {
	url: string;
}

export const Player: FC<PlayerProps> = ({url}) => {
	const [hasWindow, setHasWindow] = useState(false)
	useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
	return (
    <div className={css({borderRadius: "10px", w: "fit-content"})}>
      {hasWindow && <ReactPlayer url={url} width={"100%"}/>}
    </div>
	)
}