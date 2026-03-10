import React from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
    children: React.ReactNode;
    variant?: AlertVariant;
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
}

const icons: Record<AlertVariant, string> = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
};

export default function Alert({
    children,
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
}: AlertProps) {
    const variants: Record<AlertVariant, string> = {
        info:
            'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-400',
        success:
            'bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200 dark:border-green-400',
        warning:
            'bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-400',
        error:
            'bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200 dark:border-red-400',
    };

    return (
        <div
            role="alert"
            className={`border-l-4 rounded-r-lg p-4 ${variants[variant]}`}
        >
            <div className="flex justify-between items-start">
                <div className="flex gap-2 items-start">
                    <span aria-hidden="true">{icons[variant]}</span>
                    <div>
                        {title && <p className="font-semibold mb-1">{title}</p>}
                        <p className="text-sm">{children}</p>
                    </div>
                </div>
                {dismissible && (
                    <button
                        onClick={onDismiss}
                        className="ml-4 opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current rounded"
                        aria-label="Kapat"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
}
