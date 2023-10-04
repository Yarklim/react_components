import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useInput;

// Example
/*
function UserInput() {
	const userName = useInput('')
	const userPassword = useInput('')

	return (
		<div>
			<input {...userName} type='text' placeholder='Username' />
			<input {...userPassword} type='password' placeholder='Password' />
			<button onClick={() => console.log(userName.value, userPassword.value)}></button>
		</div>
	)
}
*/
