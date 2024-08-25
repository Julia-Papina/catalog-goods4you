import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { MainButton } from '../ui';

describe('MainButton', () => {
    it('correct rendering', () => {
        render(<MainButton variant="main" onClick={() => { }}>Add to cart</MainButton>)
        expect(screen.getByText('Add to cart')).toBeInTheDocument()
    });
});
