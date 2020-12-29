
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';
import {Link} from 'react-router-dom';

function PostCard({post: { body, createdAt, id, username, likeCount, commentCount, likes }}){
    const likePost = () => {
        console.log('likePost')
    }

    const commentOnPost = () => {
        console.log('commentOnPost')
    }


    return (
        <Card fluid>
            <Card.Content>
                <Image src="" alt="" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`} >{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button color='teal' basic>
                        <Icon name='heart' />
                    </Button>
                    <Label basic color='teal' poiting='left'>
                        {likeCount}
                    </Label>
                </Button>
                <Button as='div' labelPosition='right' onClick={commentOnPost}>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                    <Label basic color='blue' poiting='left'>
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostCard;