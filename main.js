/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputpass, inputIcon) =>{
	const input = document.getElementById(inputpass),
	      iconEye = document.getElementById(inputIcon)
		  
	iconEye.addEventListener('click', () =>{
		
		if(input.type === 'Password'){
			
			input.type = 'text'
			
			
			iconEye.classList.add('ri-eye-line')
			
			
			iconEye.classList.remove('ri-eye-off-line')
		}else{
			
			input.type = 'Password'
			
			
			iconEye.classList.remove('ri-eye-line')
			
			iconEye.classList.add('ri-eye-off-line')
		}
    })
}

showHiddenPass('input-pass','input-icon')