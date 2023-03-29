import React from 'react'
import { useController } from 'react-hook-form'


function RadioField(
	props
) {
	const {
		control,
		label,
		id,
		name,
		className = '',
		fullWidth = false,
		...radioFieldProps
	} = props

	const {
		field: { ref: inputRef, ...inputProps },
		fieldState: { error }
	} = useController({ name, control })

	return (
		<div className={`inline-block flex items-center gap-1 ${fullWidth && 'w-full'}`}>
			<input
				{...inputProps}
				{...inputRef}
				{...radioFieldProps}
				className={`relative border p-1 rounded outline-none w-full ${className} ${error && 'border-[.5px] border-rose-500'
					}`}
				type="radio"
			/>
			<label className='text-[14px]' htmlFor={id}>{label}</label>
		</div>
	)
}

export default RadioField