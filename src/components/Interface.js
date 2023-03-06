import React, { useState } from 'react';
import * as math from 'mathjs';

function Interface() {
	const [value, setValue] = useState('');

	const handleClick = (e) => {
		// console.log(e.target.value);
		setValue(value + e.target.value);
	};
	const handleResult = (e) => {
		// console.log(math.evaluate(e.target.value + value));
		setValue(math.evaluate(e.target.value + value));
	};
	const handleClear = () => {
		setValue('');
	};
	return (
		<div className='container'>
			<div className='interface-container'>
				<div className='text-container'>
					<textarea
						className='userText'
						name='result'
						id=''
						cols='25'
						rows='2'
						value={value}
						onChange={handleClick}
					></textarea>
				</div>
				<div className='button-container'>
					<button className='custom-button' onClick={handleClick} value='0'>
						0
					</button>
					<button className='custom-button' onClick={handleClick} value='1'>
						1
					</button>
					<button className='custom-button' onClick={handleClick} value='2'>
						2
					</button>
					<button className='custom-button' onClick={handleClick} value='3'>
						3
					</button>
					<button className='custom-button' onClick={handleClick} value='4'>
						4
					</button>
					<button className='custom-button' onClick={handleClick} value='5'>
						5
					</button>
					<button className='custom-button' onClick={handleClick} value='6'>
						6
					</button>
					<button className='custom-button' onClick={handleClick} value='7'>
						7
					</button>
					<button className='custom-button' onClick={handleClick} value='8'>
						8
					</button>
					<button className='custom-button' onClick={handleClick} value='9'>
						9
					</button>
					<button className='custom-button' onClick={handleClick} value='+'>
						+
					</button>
					<button className='custom-button' onClick={handleClick} value='-'>
						-
					</button>
					<button className='custom-button' onClick={handleClick} value='/'>
						/
					</button>
					<button className='custom-button' onClick={handleClick} value='*'>
						*
					</button>
					<button className='custom-button' onClick={handleResult}>
						=
					</button>
					<div className='clearcontainer'>
						<button
							className='custom-button clear'
							value={value}
							onClick={handleClear}
						>
							Clear
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Interface;
