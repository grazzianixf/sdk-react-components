import React from 'react';

export interface ViewHeaderProps {
    title: string,
    subtitle?: string
}

const ViewHeader = ({ title, subtitle }: ViewHeaderProps) => {

    return (
        <div>
            <h2>
                {title}
            </h2>
            {
                subtitle && (
                    <h4>
                        {subtitle}
                    </h4>
                )
            }
        </div>
    );
};

export default ViewHeader;