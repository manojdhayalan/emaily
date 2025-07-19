import { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Emaily</a>
                        <ul className="right">
                            <li><a>Login with Google</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);