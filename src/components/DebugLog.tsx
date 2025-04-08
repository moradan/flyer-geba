import React from 'react';

export default function DebugLog() {

    return (
        <div
            id='DebugLog'
            style={{
                position: 'fixed',
                top: '0.5rem',
                left: '0.5rem',
                width: '300px',
                maxHeight: '200px',
                overflowY: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#0f0',
                fontFamily: 'monospace',
                fontSize: '12px',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                zIndex: 9999,
            }}
        />
    );
}