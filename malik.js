import React from 'react';
import SearchContract  from '../SearchContract';
import { fireEvent, render } from '@testing-library/react';
import { renderWithStore } from '../../../TestUtils';
import { IScope, useScope } from '@elixir/fx';
require('@testing-library/jest-dom/extend-expect');

describe('SearchContract tests', () => {
    const scope: IScope<scope>='scope';
    
    it("The test for Contract", () => {
       
        const setSearch = jest.fn((value) => {})

        const { queryByPlaceholderText } = render(<SearchContract scope={scope}/>)

        const searchInput = queryByPlaceholderText('SEARCH');
        
        console.log(searchInput)
        //fireEvent.change(searchInput, { target: { value: '1879209978' } })
        //expect(searchInput.value).toBe('1879209978')
    }
    )
}
)