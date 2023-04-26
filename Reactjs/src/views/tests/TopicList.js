import React from "react";
import "./TopicList.scss";
import { withRouter } from 'react-router-dom';
class TopicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: '',
            topic: '',
        };
    }

    handleClickTopicTechnology = () => {
        this.props.history.push({
            pathname: "/mainFlashcard",
            state: {
                level: "easy",
                topic: "vehicle"
            }
        });
    }

    render() {
        return (
            <>
                <h1>Chọn chủ đề</h1>
                <ol class="olcards">
                    <li style={{ cardColor: "#fc374e" }} onClick={() => this.handleClickTopicTechnology()} level={"esay"}>
                        <div class="content">
                            <div class="icon">😀</div>
                            <div class="title">Công Nghệ</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>

                    <li style={{ cardColor: "#fc374e" }}>
                        <div class="content">
                            <div class="icon">😁</div>
                            <div class="title">Ẩm thực</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }}>
                        <div class="content">
                            <div class="icon">😀</div>
                            <div class="title">Văn Hoá</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }}>
                        <div class="content">
                            <div class="icon">😉</div>
                            <div class="title">Sức khoẻ</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }}>
                        <div class="content">
                            <div class="icon">😀</div>
                            <div class="title">Đô thị</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                    <li style={{ cardColor: "#fc374e" }}>
                        <div class="content">
                            <div class="icon">😁</div>
                            <div class="title">Dân số</div>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
                        </div>
                    </li>
                </ol>
            </>
        )
    }
}

export default withRouter(TopicList);