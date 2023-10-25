import React from 'react';
import { useEffect, useState } from "react";


export default function Menu(props) {

	const [selected, setSelected] = useState(props.selected);
	const [isVisible, setIsVisible] = useState(props.isVisible);
	const [items] = useState(props.items);
	const [open, setOpen] = useState(false);


	useEffect(() => {
	    setSelected(props.selected);	    
	},[props.selected]);

	useEffect(() => {
	    setIsVisible(props.isVisible);	    
	},[props.isVisible]);

	useEffect(() => {
	    window.addEventListener("scroll", closeMenu);
	    return () =>
	       window.removeEventListener("scroll", closeMenu);
	}, []);

	const closeMenu = () => {
		setOpen(false);
	}

	const { onChange } = props;	

	let filter = items.filter((v,i) => { return i !== selected; } );	

	const updateSelected = (item) =>{
		setOpen(false);
		if(onChange){
			onChange(items.findIndex(obj => obj.icon === item.icon));
		}		
	}

	return (
		<div className={`icons-menu ${isVisible ? 'is-visible' : ''}`}>
			<ul className={`${open ? 'is-active' : ''}`}>
				{
					filter.map((v,i) => (
						<li key={i} style={ {background: '#fff url(images/menu-images/'+v.icon+'.png) no-repeat center center / 100%'}} onClick={() => updateSelected(v) }></li>
					))					
				}
			</ul>
			<div className="item-selected" style={ {background: '#fff url(images/menu-images/'+items[selected].icon+'.png) no-repeat center center / 100%'}} onClick={() => setOpen(!open)}></div>
		</div>
	)	
}