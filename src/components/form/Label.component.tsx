import React, { memo } from 'react'

const Label = (
	props: React.DetailedHTMLProps<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>,
) => {
	return (
		<label
			{...props}
			className={
				'block mb-2 font-semibold text-base text-[#111827]' + props.className
			}
		>
			{props.children}
		</label>
	)
}

export default memo(Label)
