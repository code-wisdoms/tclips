import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { Wrapper } from './components/Wrapper';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Result } from './components/Result';
import { ErrorMessage } from './components/ErrorMessage';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curLink: '',
      clipData: {}
    }
  }

  handleChange = event => {
    this.setState({ curLink: event.target.value });
  }

  handleClick = () => {
    const urlArr = this.state.curLink.split('/').filter(e => Boolean(e));
    const slug = urlArr[urlArr.length - 1];

    axios.get(`https://api.twitch.tv/kraken/clips/${slug}`, {
      'headers': {
        'Client-ID': 'g2q5mymdhlm5vhtr7i2unz2zcvgvrh',
        'Accept': 'Accept: application/vnd.twitchtv.v5+json'
      }
    }).then(res => {
      this.setState({
        clipData: {
          title: res.data.title,
          broadcaster: res.data.broadcaster.name,
          preview: res.data.thumbnails.medium,
          download_link: res.data.thumbnails.medium.replace('-preview-480x272.jpg', '.mp4'),
        },
        failed: false
      });     

    }).catch(() => this.setState({ failed: true }));
  }

  handleKeyPress = () => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Reset />
        <Wrapper>
          <Input type="text" placeholder="https://www.twitch.tv/truefaust/clip/HyperBoringPigCmonBruh" 
                 value={this.state.curLink} onChange={this.handleChange} 
                 onKeyPress={this.handleKeyPress} />

          <Button onClick={this.handleClick}>Get download link</Button>

          { this.state.clipData.title && !this.state.failed && <Result {...this.state.clipData} /> }
          { this.state.failed && <ErrorMessage /> }

        </Wrapper>
      </React.Fragment>
    );
  }
}
