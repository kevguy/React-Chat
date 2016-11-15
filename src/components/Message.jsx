import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ListItem leftAvatar={<Avatar src="https://up-1.cdn-fullscreendirect.com/production/photos/10272/large/20160818_183851_10272_939474.png" />}>
				{this.props.message}
			</ListItem>
		);
	}
}

export default Message;