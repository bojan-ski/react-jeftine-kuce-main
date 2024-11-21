import React from 'react'


const AccountTypeOptions = ({ accountType, setAccountType }) => {
    return (
        <div className="mb-3">
            <label className='form-label fw-bold'>
                Tip naloga
            </label>
            <div>
                <button
                    type='button'
                    className={accountType === 'fizičko' ? 'select-option-btn-active' : 'select-option-btn'}
                    id='accountType'
                    value='fizičko'
                    onClick={() => setAccountType('fizičko')}
                >
                    Fizičko lice
                </button>
                <button
                    type='button'
                    className={accountType === 'pravno' ? 'select-option-btn-active' : 'select-option-btn'}
                    id='accountType'
                    value='pravno'
                    onClick={() => setAccountType('pravno')}
                >
                    Pravno lice
                </button>
            </div>
        </div>
    )
}

export default AccountTypeOptions