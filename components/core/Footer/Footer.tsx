import { FC } from 'react'

const Footer: FC = () => {
    const clickHandler = (link: string) => { window.open(link) }
    return (
        <footer>
            <span>
                &copy; Copyright © {`${new Date().getFullYear()} `}
                <a aria-label="pristine-app.com Link" onClick={() => {clickHandler('https://pristine-app.com')}}>
                    PRISTINE
                </a>, Inc. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer
