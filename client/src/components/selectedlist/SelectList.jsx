
import React, { useMemo, useState } from 'react'
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import './select.css'

const SelectList = ({ setCategories }) => {


    const handleOnchange = val => {
        setCategories(val.split(','))
    }

    const options = useMemo(() => [
        { label: 'ReactJS', value: 'ReactJS' },
        { label: 'NodeJS', value: 'NodeJS' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'HTML/CSS', value: 'HTML/CSS' },
    ])

    return (
        <div className="app">
            <div className="preview-values">
                <h4>Categories</h4>
            </div>

            <MultiSelect
                onChange={handleOnchange}
                options={options}
            />
        </div>
    )
};
export default SelectList;