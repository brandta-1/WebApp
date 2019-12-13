import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import FriendActions from '../../actions/FriendActions';
import FriendStore from '../../stores/FriendStore';
import VoterStore from '../../stores/VoterStore';
import { renderLog } from '../../utils/logging';

export default class SuggestedFriendToggle extends Component {
  static propTypes = {
    otherVoterWeVoteId: PropTypes.string.isRequired,
  };

  constructor (props) {
    super(props);
    this.state = {
      voter: {
        we_vote_id: '',
      },
    };
    this.sendFriendInvite = FriendActions.friendInvitationByWeVoteIdSend.bind(this, this.props.otherVoterWeVoteId);
  }

  componentDidMount () {
    this.friendStoreListener = FriendStore.addListener(this.onFriendStoreChange.bind(this));
    this.voterStoreListener = VoterStore.addListener(this.onVoterStoreChange.bind(this));
    this.onFriendStoreChange();
    this.onVoterStoreChange();
  }

  componentWillUnmount () {
    this.friendStoreListener.remove();
    this.voterStoreListener.remove();
  }

  onFriendStoreChange () {
    this.setState({
      isFriend: FriendStore.isFriend(this.props.otherVoterWeVoteId),
    });
  }

  onVoterStoreChange () {
    this.setState({
      voter: VoterStore.getVoter(),
    });
  }

  render () {
    renderLog('SuggestedFriendToggle');  // Set LOG_RENDER_EVENTS to log all renders
    if (!this.state) { return <div />; }
    const { otherVoterWeVoteId } = this.props;
    const { isFriend } = this.state;
    // console.log("SuggestedFriendToggle, otherVoterWeVoteId:", otherVoterWeVoteId, ", isFriend:", isFriend);
    const isLookingAtSelf = this.state.voter.we_vote_id === otherVoterWeVoteId;
    // You should not be able to friend yourself
    if (isLookingAtSelf) {
      // console.log("SuggestedFriendToggle, isLookingAtSelf");
      return <div />;
    }

    return (
      <>
        {isFriend ? null : (
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={this.sendFriendInvite}
              fullWidth
            >
              {window.innerWidth > 620 ? 'Add Friend' : 'Add'}
            </Button>
          </ButtonContainer>
        )}
      </>
    );
  }
}

const ButtonContainer = styled.div`
  width: 100%;
  margin-right: 12px;
  @media(min-width: 400px) {
    width: fit-content;
    margin: 0;
    margin-bottom: 6px;
  }
  @media(min-width: 520px) {
    margin: 0;
    margin-right: 8px;
  }
`;
