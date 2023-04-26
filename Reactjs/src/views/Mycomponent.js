import React from "react";
import speechSynthesis from "react-speech-kit";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        text: "",
        voiceIndex: 0,
        voices: [],
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSpeechClick = this.handleSpeechClick.bind(this);
    //   this.handleClearClick = this.handleClearClick.bind(this);
    }
  
    // componentDidMount() {
    //   if ('speechSynthesis' in window) {
    //     // Get available voices
    //     const voices = window.speechSynthesis.getVoices();
    //     this.setState({ voices });
        
    //     // Update voices when they change
    //     window.speechSynthesis.onvoiceschanged = () => {
    //       const updatedVoices = window.speechSynthesis.getVoices();
    //       this.setState({ voices: updatedVoices });
    //     }
    //   }
    // }
  
    handleInputChange(event) {
      this.setState({ text: event.target.value });
    }
  
    handleSpeechClick() {
      const { text, voiceIndex, voices } = this.state;
      
      const utterance = new SpeechSynthesisUtterance(text);
    //   utterance.voice = voices[voiceIndex];
      console.log(">>>check utterance ", utterance);
      window.speechSynthesis.speak(utterance);
    }
  
    // handleClearClick() {
    //   this.setState({ text: "" });
    // }
  
    render() {
      const { voices, voiceIndex } = this.state;
      return (
        <div>

          <input type="text" value={this.state.text} onChange={this.handleInputChange} />

          <select value={voiceIndex} onChange={(e) => this.setState({ voiceIndex: e.target.value })}>
            {voices.map((voice, index) => (
              <option key={voice.name} value={index}>{voice.name}</option>
            ))}
          </select>

          <button onClick={this.handleSpeechClick}>Speech</button>


          {/* <button onClick={this.handleClearClick}>Clear</button> */}
        </div>
      );
    }
  }
  export default MyComponent;