import React from "react";
import "./TopicList.scss";
import { withRouter } from 'react-router-dom';
import axios from "axios";
class TopicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: '',
            topic: '',
        };
    }

    async componentDidMount() {
        let dataFromLevel = this.props.location.state;
        console.log(">>>check data from Level : ", this.props);
        this.setState(
            {
                level: dataFromLevel.level
            }
        )
    }

    handleClickTopicVehicle = () => {
        // console.log("check level : ", this.state.level);
        const { level } = this.state;
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: level,
                topic: "vehicle"
            }
        });
    }

    handleClickTopicWeather = () => {
        const { level } = this.state;
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: level,
                topic: "weather"
            }
        });
    }
    handleClickTopicAnimal = () => {
        const { level } = this.state;
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: level,
                topic: "animal"
            }
        });
    }
    handleClickTopicSport = () => {
        const { level } = this.state;
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: level,
                topic: "sport"
            }
        });
    }
    handleClickTopicPlant = () => {
        const { level } = this.state
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: level,
                topic: "plant"
            }
        });
    }
    handleClickTopicPersonality = () => {
        const { level } = this.state
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: level,
                topic: "personality"
            }
        });
    }
    render() {
        return (
            <>
                <h1>Chọn chủ đề</h1>
                <ol class="olcards">
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicVehicle()} level={"esay"}>
                        <div class="content">
                            <div class="icon">😀</div>
                            <div class="title">Phương tiện</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>

                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicWeather()}>
                        <div class="content">
                            <div class="icon">😁</div>
                            <div class="title">Thời tiết</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicAnimal()}>
                        <div class="content">
                            <div class="icon">😀</div>
                            <div class="title">Động vật</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicSport()} >
                        <div class="content">
                            <div class="icon">😉</div>
                            <div class="title">Thể thao</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicPlant()}>
                        <div class="content">
                            <div class="icon">😀</div>
                            <div class="title">Thực vật</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicPersonality()} >
                        <div class="content">
                            <div class="icon">😁</div>
                            <div class="title">Tính cách</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                </ol>
            </>
        )
    }
}

export default withRouter(TopicList);