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
            <div className="topicList">
                <div className="topic-title">Choose topic</div>
                <ol class="olcards">

                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicVehicle()} level={"esay"}>
                        <div class="content">
                            <div class="icon"><i class="fa-solid fa-car"></i></div>

                            <div class="title">Vehicle</div>
                            <div class="text">A machine, usually with wheels and an engine, used for transporting people or goods, especially on land.</div>
                        </div>
                    </li>

                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicWeather()}>
                        <div class="content">
                            <div class="icon"><i class="fa-solid fa-cloud"></i></div>

                            <div class="title">Weather</div>
                            <div class="text">The conditions in the air above the earth such as wind, rain, or temperature, especially at a particular time over a particular area.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicAnimal()}>
                        <div class="content">
                            <div class="icon"><i class="fa-solid fa-squirrel"></i></div>

                            <div class="title">Animal</div>
                            <div class="text">Something that lives and moves but is not a human, bird, fish, or insect</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicSport()} >
                        <div class="content">
                            <div class="icon"><i class="fa-solid fa-volleyball"></i></div>
                            <div class="title">Sport</div>
                            <div class="text">A game, competition, or activity needing physical effort and skill that is played or done according to rules, for enjoyment and/or as a job.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicPlant()}>
                        <div class="content">
                            <div class="icon"><i class="fa-solid fa-tree"></i></div>

                            <div class="title">Plant</div>
                            <div class="text">A living thing that grows in earth, in water, or on other plants, usually has a stem, leaves, roots, and flowers, and produces seeds.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicPersonality()} >
                        <div class="content">
                            <div class="icon"><i class="fa-solid fa-person"></i></div>
                            <div class="title">Character</div>
                            <div class="text">The particular combination of qualities in a person or place that makes them different from others.</div>
                        </div>
                    </li>
                </ol>
            </div>
        )
    }
}

export default withRouter(TopicList);