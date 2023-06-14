import React from 'react';

const Footer = ({ className, children  }) => (
    <footer className={className}>
        &copy; {new Date().getFullYear()} - Made with love by{' '}
        {children}
    </footer>
)

export default Footer;