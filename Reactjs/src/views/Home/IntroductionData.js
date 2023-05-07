import "./HomeStyle/Introduction.scss";


import {Component} from 'react';

class IntroductionData extends Component {
    render() {
        return (
            <>
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                    {this.props.text}
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1} />

                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
            </>
        )
    }
}
export default IntroductionData;