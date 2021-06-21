import React, { useEffect, useState } from 'react';
import backBtn from '../../../images/button/backBtn.svg';
import search from '../../../images/button/search.svg';
import slider from '../../../images/button/sliders.svg';

export default function SearchBar() {
	const [searchWord, setSearchWord] = useState('');
	const [savedWord, setSavedWord] = useState([]);
	useEffect(() => {
		if (!!localStorage.searchWord) {
			setSearchWord(JSON.parse(localStorage.searchWord));
		}
	}, []);

	const onClickHandler = (option) => {
		let searchContainer = document.querySelector('#search__container');
		if (option) {
			searchContainer.classList.add('active');
		} else {
			searchContainer.classList.remove('active');
		}
	};

	const onChangeHandler = (e) => {
		setSearchWord(e.target.value);
	};

	const onSubmitHandler = () => {
		let update = [searchWord, ...savedWord.slice()];
		setSavedWord(update);
		localStorage.searchWord = JSON.stringify(update);
	};

	const onEnterKey = (e) => {
		if (e.keyCode === 13) {
			onSubmitHandler();
		}
	};

	return (
		<div>
			<img
				alt=''
				className='nav__icon'
				src={search}
				onClick={() => onClickHandler(true)}
			/>
			<img alt='' className='nav__icon' src={slider} />
			<div id='search__container'>
				<div id='search__top'>
					<img
						alt=''
						className='nav__icon'
						src={backBtn}
						onClick={() => onClickHandler(false)}
					/>
					<input
						id='search__input'
						value={searchWord}
						onChange={onChangeHandler}
						onKeyDown={onEnterKey}></input>
					<img
						alt=''
						className='nav__icon'
						src={search}
						onClick={onSubmitHandler}
					/>
				</div>
				<div id='search__searchWord__container'>{}</div>
			</div>
		</div>
	);
}
