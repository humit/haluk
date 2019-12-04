import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Haluk Kürkçüoğlu ATÖLYESİ</h1>
                <p>Geleneksel Ebru ve Katı el sanatları ve vücuda ebru uygulamaları.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>HAKKINDA</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>ÇALIŞMALAR</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>İLETİŞİM</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
