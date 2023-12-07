'use client';
import React from 'react';
import GridSystem from '@/components/grid-system/grid-system';

export default function CommonGridLayout({ children }: { children: React.ReactNode }) {

    return (
        <GridSystem>
            {children}
        </GridSystem>
    );
}
