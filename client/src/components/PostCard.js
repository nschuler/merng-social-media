
import { useContext } from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton.js';
import DeleteButton from './DeleteButton.js';

function PostCard({post: { body, createdAt, id, username, likeCount, commentCount, likes }}) {
    const { user } = useContext(AuthContext);

    return (
        <Card fluid>
            <Card.Content>
                <Image src="" alt="" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`} >{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} post={{ id, likes, likeCount }} />
                <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                    <Label basic color='blue' poiting='left'>
                        {commentCount}
                    </Label>
                </Button>
                {user && user.username === username && <DeleteButton postId={id} />}
            </Card.Content>
        </Card>
    )
}

export default PostCard;