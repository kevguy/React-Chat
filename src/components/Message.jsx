import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ListItem leftAvatar={<Avatar src="https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />}>
				{this.props.message}
			</ListItem>
		);
	}
}

export default Message;