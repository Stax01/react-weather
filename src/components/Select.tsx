import React, { FocusEventHandler } from 'react'
import { ActionMeta, OnChangeValue, StylesConfig, default as ReactSelect } from 'react-select'

export type ISelectOption = {
    value: number,
    label: string
}
export type isMulti = false

export interface ISelectProps {
    styles?: StylesConfig<ISelectOption, isMulti>;
    value: any;
    options: ISelectOption[];
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: (
        value: OnChangeValue<ISelectOption, isMulti>,
        action: ActionMeta<ISelectOption>
    ) => void;
    onFocus?: FocusEventHandler<HTMLInputElement>;
}
export const Select: React.FC<ISelectProps> = ({
    onBlur,
    onFocus,
    
    options,
    styles,
    value,
    onChange,
}) => {
    return (
        <ReactSelect
        className='react-select__control'
            styles={styles}
            value={value}
            onChange={onChange}
            options={options}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    )
}

